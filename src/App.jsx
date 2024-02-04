import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { OPTIONS } from "./config/data";
import AddItem from "./components/AddItem";
import ReadItem from "./components/ReadItem";
import DeleteItem from "./components/DeleteItem";

const App = () => {
  const [item, setItem] = useState([]);
  const [type, setType] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
    };
    setItem([...item, newItem]);
  };

  const addType = (type) => {
    const newType = {
      id: Date.now(),
      type,
    };
    setType([...type, newType]);
  };

  return (
    <Stack
    spacing={4}
      sx={{
        background:
          "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);",
        backdropFilter: "blur(20px)",
        padding: "48px",
        borderRadius: "25px",
      }}
    >
      <Box textAlign={"center"}>
        <Typography variant="h1">Shopping List</Typography>
      </Box>

      <AddItem addItem={addItem} addType={addType} />
      <ReadItem items={item} />
    </Stack>
  );
};

export default App;
