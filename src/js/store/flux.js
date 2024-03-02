const getState = ({ getStore, setStore }) => {
    const handleResponse = (response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    };

    // Centralized function to refresh contacts
    const refreshContacts = () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/yjlmotley")
            .then(handleResponse)
            .then((data) => setStore({ contacts: data }))
            .catch((error) => console.error('Fetching contacts failed:', error));
    };

    return {
        store: {
            contacts: [],
        },
        actions: {
            getContacts: refreshContacts, 

            addContacts: (contactData) => {
                fetch("https://playground.4geeks.com/apis/fake/contact/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contactData),
                })
                .then(handleResponse)
                .then(() => refreshContacts()) 
                .catch((error) => console.error('Adding contact failed:', error));
            },

            deleteContacts: (id) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: "DELETE",
                })
                .then(handleResponse)
                .then(() => refreshContacts()) 
                .catch((error) => console.error('Deleting contact failed:', error));
            },

            editContact: (id, contactData) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contactData),
                })
                .then(handleResponse)
                .then(() => refreshContacts()) 
                .catch((error) => console.error('Editing contact failed:', error));
            },
        },
    };
};

export default getState;