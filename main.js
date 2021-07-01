
let mainTable = document.querySelector("#main-table");
let editTable = document.querySelector("#edit-table");
//buttons
let accountsBtn = document.querySelector("#accountsBtn");
let addAccountsBtn = document.querySelector("#addAccountsBtn");
let editAccountsBtn = document.querySelector("#editAccountsBtn");
let saveAccountBtn = document.querySelector("#saveAccountBtn");
//views
let accountsView = document.querySelector("#accounts-view");
let addAccountsView = document.querySelector("#add-accounts-view");
let editAccountsView = document.querySelector("#edit-accounts-view");
//inputs
let nameInput = document.querySelector("[name='name']")
let lastNameInput = document.querySelector("[name='lastName']")
let emailInput = document.querySelector("[name='email']")
let phoneInput = document.querySelector("[name='phone']")


//listeners
addAccountsBtn.addEventListener("click",displayAddAccountsView);
accountsBtn.addEventListener("click",displayAccountsView);
saveAccountsBtn.addEventListener("click",saveNewAccount);
editAccountsBtn.addEventListener("click",createEditTable);

createTable();

function displayAddAccountsView(){
    accountsView.style.display = "none";
    addAccountsView.style.display = "block";
}

function displayAccountsView() {
    accountsView.style.display = "block";
    addAccountsView.style.display = "none";
}
function displayEditView() {
    accountsView.style.display = "none";
    addAccountsView.style.display = "none";
    editAccountsView.style.display = "block";
}

function saveNewAccount(){
      let newAccount = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
    }

    if (validate(newAccount)){
        db.push(newAccount);
        createTable();
        displayAccountsView();
        nameInput.value=lastNameInput.value=emailInput.value=phoneInput.value="";
        }else{
        alert("forma nije ok")
    }
}

function validate(account) {
    if(account.name.length < 3 || account.lastName.length < 3 || account.email.length < 3 || account.phone.length < 3){
        return false;
    }else{
        return true;
    }
}






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

function createEditTable() {
    let text = ``;
    db.forEach(account => {
        text+=`
            <tr>
            <td>${account.name}</td>
            <td>${account.lastName}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
            <td><button class="btn btn-warning btn-sm form control>Edit</td>
            <td><button class="btn btn-danger btn-sm form control>Delete</td>
            </tr>   
        `;
        editTable.innerHTML = text;
        displayEditView();
    })
}


