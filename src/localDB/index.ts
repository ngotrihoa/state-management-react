import { v4 as uuidv4 } from 'uuid';

class LocalDB<T extends { id?: string }> {
  constructor(private table: string) {
    this.table = table;

    if (!this.getTable()) {
      this.setTable([]);
    }
  }

  private setTable = (value: T[]) => {
    window.localStorage.setItem(this.table, JSON.stringify(value));
  };

  private getTable = () => window.localStorage.getItem(this.table);

  public getAll = (): T[] => JSON.parse(this.getTable()!);

  public getById = (id: string): T | null => {
    const foundedItem = this.getAll().find((item) => item.id === id);

    return foundedItem || null;
  };

  public create = (payload: Partial<T>): T => {
    try {
      if (!('id' in payload)) payload.id = uuidv4();

      this.setTable([...this.getAll(), payload as T]);

      return payload as T;
    } catch (error) {
      throw new Error('500: Server Error');
    }
  };

  public removeById = (id: string): boolean => {
    let itemExist = false;
    const filteredData = this.getAll().filter((item) => {
      if (item.id === id) itemExist = true;
      return item.id !== id;
    });

    if (itemExist) {
      this.setTable(filteredData);
      return true;
    }
    return false;
  };

  public updateById = (id: string, payload: Partial<T>): T => {
    let updatedItem = null;

    const updatedData = this.getAll().map((item) => {
      let mapItem = { ...item };
      if (item.id === id) {
        mapItem = { ...mapItem, ...payload };
        updatedItem = mapItem;
      }
      return mapItem;
    });

    if (updatedItem) {
      this.setTable(updatedData);
      return updatedItem;
    } else {
      throw new Error('404: not found');
    }
  };
}

export default LocalDB;
