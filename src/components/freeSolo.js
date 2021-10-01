import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo(props) {
  return (
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={props.brandOptions.map((option) => option.label)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Brand"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
  );
}

