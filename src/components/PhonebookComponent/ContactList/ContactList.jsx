import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          ></ContactItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
