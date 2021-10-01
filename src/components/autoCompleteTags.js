import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AutoCompleteTags(props) {
  var type = "Add Tags to " + props.type; 
  return (
      <Autocomplete
        multiple
        id="tags-filled"
        options={props.tagOptions.map((option) => option.label)}
        defaultValue={[props.tagOptions[2].label]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            
            variant="filled"
            label={type}
            placeholder="Favorites"
          />
        )}
      />
  );
}
