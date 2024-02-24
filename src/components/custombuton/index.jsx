import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

const Custom_Button = (props) => {
  return (
    <Stack sx={{width:'50%', margin:'auto', }}>
      <Button variant="contained"  {...props}>
        {props.children}
      </Button>
    </Stack>
  )
}

export { Custom_Button}
