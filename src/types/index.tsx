export type Updater<T> = T | ((prevValue: T) => T);

export type SetState<T> = (updater: Updater<T>) => void;
