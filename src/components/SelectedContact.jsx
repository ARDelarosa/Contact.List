import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContactDetails() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
                console.log('Fetched Contact:', result);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        if (selectedContactId) {
            fetchContactDetails();
        }
    }, [selectedContactId]);

    const handleBackToList = () => {
        setSelectedContactId(null);
    };

    return (
        <div>
            <h2>Selected Contact Details</h2>
            {contact ? (
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{contact.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{contact.phone}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleBackToList}>Back to List</button>
        </div>
    );
}

export default SelectedContact;