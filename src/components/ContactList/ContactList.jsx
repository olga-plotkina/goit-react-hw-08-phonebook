import { deleteContact } from 'redux/contacts/operations';
import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Filter } from 'components/Filter';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <Box marginX="auto" width="400px">
      <Filter />
      <List
        variant="standard"
        sx={{
          bgcolor: 'background.body',
          marginX: 'auto',
          width: '100%',
          marginTop: '40px',
          maxWidth: 400,
          borderRadius: 'sm',
          boxShadow: 'sm',
          '--List-decorator-size': '48px',
          '--List-item-paddingLeft': '1.5rem',
          '--List-item-paddingRight': '1rem',
        }}
      >
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <p>{error}</p>}
        {contacts.map(contact => (
          <ListItem
            key={contact.id}
            sx={{
              borderBottom: '1px solid grey',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {contact.name}: {contact.number}
            <IconButton
              aria-label="Delete"
              size="sm"
              color="primary"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <Delete color="warning" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
