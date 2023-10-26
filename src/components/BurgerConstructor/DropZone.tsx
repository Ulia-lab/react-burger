import React from "react";
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { moveItem } from "../../services/actions/constructorItems";
import { DropZoneProps } from "./interfaces";

export const DropZone = ({ index, children }: DropZoneProps) => {
  const dispatch = useDispatch();

  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: 'card',
    drop: (item, monitor) => {
      //@ts-ignore
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch(moveItem(dragIndex, hoverIndex));
      //@ts-ignore
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div ref={dropRef} className='mb-4' style={{ opacity: isActive ? 0.5 : 1 }}>
      {children}
    </div>)
};


export default DropZone;

