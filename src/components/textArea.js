import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        display: "flex"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-static"
          label="Product Description..."
          multiline
          rows={4}
          defaultValue=""
        />
    </Box>
  );
}
