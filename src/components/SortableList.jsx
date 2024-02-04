import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { QUANTITY } from "../config/data";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { DeleteIcon, HmaburgerIcon } from "./common/Icons";

const DragHandle = SortableHandle(() => <HmaburgerIcon />);

const SortableItem = SortableElement(({ value, deleteItem }) => (
  <Stack direction={"row"} spacing={2} paddingBottom={2} alignItems={"center"}>
    <DragHandle />
    {value}
    <IconButton onClick={deleteItem}>
      <DeleteIcon />
    </IconButton>
  </Stack>
));

const SortableList = SortableContainer(
  ({ items, newQuantity, handleListChange, handleQuantityChange, handleDelete }) => {

    return (
      <Stack>
        {items.map((item, index) => (
          <SortableItem
            key={item.name}
            index={index}
            value={
              <>
                <TextField
                  label="List Name"
                  variant="filled"
                  value={item.name}
                  onBlur={(e) => handleListChange(e, index)}
                  margin="dense"
                  required
                />
                <FormControl
                  required
                  variant="filled"
                  sx={{ m: 1, minWidth: 200 }}
                >
                  <InputLabel>Quantity</InputLabel>
                  <Select
                    value={newQuantity[index]}
                    onChange={(e) => handleQuantityChange(e, index)}
                  >
                    {QUANTITY.map((item) => (
                      <MenuItem key={item.quantity} value={item.quantity}>
                        {item.quantity}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            }
            deleteItem={() => handleDelete(index)}
          />
        ))}
      </Stack>
    );
  }
);

export default SortableList;
