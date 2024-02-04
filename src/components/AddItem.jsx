import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { OPTIONS } from "../config/data";

const AddItem = ({ addItem, addType }) => {
  const [newItem, setNewItem] = useState("");
  const [newType, setNewType] = useState("");

  const handleItemChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNewType(e.target.value);
  };

  const handleAddList = () => {
    if (newItem === "" || newType === "") {
      alert("Hello world");
      return;
    }
    addItem(newItem);
    addType(newType);
    setNewItem("");
    setNewType("");
  };

  return (
    <Box component={"form"}>
      <Stack direction={"row"} spacing={2} paddingBottom={2}>
        <TextField
          label="List Name"
          variant="filled"
          value={newItem}
          onChange={handleItemChange}
          required
        />
        <FormControl required variant="filled" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel>Type</InputLabel>
          <Select value={newType} onChange={handleTypeChange}>
            {OPTIONS.map((item) => (
              <MenuItem value={item.type}>{item.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Button onClick={handleAddList} variant="contained" fullWidth>
        Add An Item
      </Button>
    </Box>
  );
};

export default AddItem;
