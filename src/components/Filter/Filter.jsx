import { TextField } from '@mui/material';
import { selectFilterString } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterString } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterString);
  return (
    <TextField
      sx={{ width: '400px' }}
      variant="outlined"
      color="primary"
      size="small"
      label="Find contacts by name"
      type="text"
      name="name"
      value={filter}
      onChange={event => dispatch(setFilterString(event.target.value.trim()))}
    />
  );
};
