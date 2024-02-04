import { IconButton } from '@mui/material'
import React from 'react'
import { DeleteIcon } from './common/Icons'

const DeleteItem = ({deleteItem}) => {
  return (
    <IconButton onClick={deleteItem}>
        <DeleteIcon />
    </IconButton>
  )
}

export default DeleteItem