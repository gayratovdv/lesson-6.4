fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => createCards(data))

function createCards(users) {
    const container = document.getElementById('user-cards-container');
    users.forEach((user) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2')
        name.textContent = user.name;

        const username = document.createElement('p')
        username.textContent = `Username: ${user.username}`;
        username.classList.add('text')

        const address = document.createElement('p')
        address.textContent = `Address: ${user.address.street}`;
        address.classList.add('text')

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;
        email.classList.add('text')

        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(address)
        card.appendChild(email);

        container.appendChild(card)
    })
}