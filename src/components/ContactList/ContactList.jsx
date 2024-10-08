import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={styles.contactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;
