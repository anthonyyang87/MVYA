import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
  return (
    <div>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
        />
    </div>
    
  );
}