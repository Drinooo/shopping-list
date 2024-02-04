import React, { useEffect, useState } from "react";
import { arrayMove } from "react-sortable-hoc";
import SortableList from "./SortableList";

const ReadItem = ({ items }) => {
  const [itemState, setItemState] = useState(items);
  const [newQuantity, setNewQuantity] = useState([]);

  useEffect(() => {
    setItemState(items);
  }, [items]);

  const handleListChange = (e, index) => {
    const updatedItems = [...itemState];
    updatedItems[index] = e.target.value;
    setItemState(updatedItems);
  }

  const handleQuantityChange = (e, index) => {
    const updatedQuantities = [...newQuantity];
    updatedQuantities[index] = e.target.value;
    setNewQuantity(updatedQuantities);
  };

  const handleDelete = (index) => {
    const updatedItems = [...itemState];
    const updatedQuantities = [...newQuantity];

    updatedItems.splice(index, 1);
    updatedQuantities.splice(index, 1);

    setItemState(updatedItems);
    setNewQuantity(updatedQuantities);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItemState(arrayMove(itemState, oldIndex, newIndex));
    setNewQuantity(arrayMove(newQuantity, oldIndex, newIndex));
  };

  return (
    <SortableList
      items={itemState}
      newQuantity={newQuantity}
      handleListChange={handleListChange}
      handleQuantityChange={handleQuantityChange}
      handleDelete={handleDelete}
      onSortEnd={onSortEnd}
      axis="y"
      useDragHandle
    />
  );
};

export default ReadItem;
