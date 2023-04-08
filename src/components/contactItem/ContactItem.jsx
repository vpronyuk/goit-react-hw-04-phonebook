import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };
  return (
    <div className={css.container}>
      <li>
        <div className={css.name}>{contact.name}</div>
        <div className={css.number}>{contact.number}</div>
        <button className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
