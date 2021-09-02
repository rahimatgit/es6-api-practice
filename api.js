

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const ul = document.getElementById('user');
    for (const element of data) {
        const li = document.createElement('li');
        li.innerText = `id: ${element.id} name: ${element.name}`;
        ul.appendChild(li);
    }
}

