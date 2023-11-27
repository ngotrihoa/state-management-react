import React from 'react';
import {
  DragDropContext,
  DragDropContextProps,
  Draggable,
  Droppable,
  DroppableProps,
} from 'react-beautiful-dnd';

interface DraggableItem {
  id: string;
}

export interface DndProps extends DragDropContextProps {
  children: React.ReactNode;
  dndId: string;
  disabled?: boolean;
  direction?: DroppableProps['direction'];
  draggableItems: any[];
}

const Dnd = ({
  children,
  dndId,
  disabled = false,
  direction = 'vertical',
  draggableItems,
  ...restProps
}: DndProps) => {
  return (
    <DragDropContext {...restProps}>
      <Droppable
        droppableId={dndId}
        isDropDisabled={disabled}
        direction={direction}
      >
        {(provider, snapshot) => (
          <div
            className=''
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {draggableItems.map((item, index) => (
              <Draggable draggableId={item.id} index={index}>
                {(provider, snapshot) => <div className=''>{children}</div>}
              </Draggable>
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dnd;
