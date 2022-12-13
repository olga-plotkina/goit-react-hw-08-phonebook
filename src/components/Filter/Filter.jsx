import { TextField, Box } from '@mui/material';
import { selectFilterString } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterString } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterString);
  return (
    <Box width="500" mx="auto">
      <TextField
        sx={{ width: '400px' }}
        marginRight="auto"
        marginLeft="auto"
        mt="20px"
        variant="outlined"
        color="primary"
        size="small"
        label="Find contacts by name"
        type="text"
        name="name"
        value={filter}
        onChange={event => dispatch(setFilterString(event.target.value.trim()))}
      />
    </Box>
  );
};
