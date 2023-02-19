import css from '../Form/Form.module.css';

export const ContactList = ({ filterContacts, contacts, onDelete }) => {
  return (
    <ul className={css.ul}>
      {filterContacts(contacts).map(({ id, name, number }) => (
        <li key={id} className={css.liitem}>
          <div>
            <span>{name}: </span>
            <span>{number}</span>
          </div>

          <button onClick={() => onDelete(name)} className={css.itembtn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
