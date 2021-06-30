let db = [
    {
        name: "Danilo",
        lastName: "Vesovic",
        email: "danilo@gmail.com",
        phone: "111-222-333",
    },
    {
        name: "Ivan",
        lastName: "Ivanov",
        email: "ivan@gmail.com",
        phone: "444-555-666",
    },
];

let mainTable = document.querySelector("#main-table");

createTable();

function createTable() {
    let text = ``;
    db.forEach(account => {
        text+=`
            <tr>
            <td>${account.name}</td>
            <td>${account.lastName}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
            </tr>   
        `;
        mainTable.innerHTML = text;
    })
}
