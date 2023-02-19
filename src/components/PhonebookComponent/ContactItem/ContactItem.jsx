import PropTypes from 'prop-types';
import { Button, Item, Name } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <>
      <Item>
        <Name>{name}</Name>
        <p>{number}</p>
        <Button type="button" onClick={() => onDelete(id)}>
          X
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};
