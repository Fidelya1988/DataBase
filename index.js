const body = document.querySelector('body')
const tbody = document.querySelector("#tbody");
const tableRowTemplate = document.querySelector("#table-row").content;

const addUserForm = document.querySelector("#add-user-form");
const inputName = addUserForm.querySelector("input.name");
const inputLastName = addUserForm.querySelector("input.last-name");
const inputPhone = addUserForm.querySelector("input.phone");
const inputCity = addUserForm.querySelector("input.city");
const addUserFormInputs = addUserForm.querySelectorAll('input')
const addUserFormButton = addUserForm.querySelector('.add-user-button')


const templateCells = tableRowTemplate.querySelectorAll("td");

const changeUserForm = document.querySelector("#change-user-form");
const changeInputName = changeUserForm.querySelector("input.name");
const changeInputLastName = changeUserForm.querySelector("input.last-name");
const changeInputPhone = changeUserForm.querySelector("input.phone");
const changeInputCity = changeUserForm.querySelector("input.city");
const changeFormInputs = changeUserForm.querySelectorAll("input");
const cancelChangesButton = changeUserForm.querySelector(".cancel-button");
const userDeleteButton = changeUserForm.querySelector(".delete-button");

const users = {};
let selectedRow = null;
let user = null;
class User {
    static createID() {
        return Math.random().toString().substr(2, 10);
    }

    constructor(name, lastName, phone, city) {
        this.id = User.createID();
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.city = city;
    }
}

const createRow = (newUser) => {
    // populate template cells with new content
    for (const cell of templateCells) {
        cell.textContent = newUser[cell.dataset.userPropertyKey];


    }
    // return a deep copy of the row
    const row = tableRowTemplate.cloneNode(true).querySelector(".user-row");

    row.dataset.userId = newUser.id;

    return row;
};

const returnTableState = () => {
    selectedRow.classList.remove('selected');
    selectedRow = null;

    changeUserForm.classList.add('hidden');
    changeUserForm.classList.remove('show');
    addUserForm.classList.remove('disabled');
    body.classList.remove('disabled-background')
    for (const input of addUserFormInputs) {
        input.readOnly = false;
    }
    addUserFormButton.disabled = false;
    changeUserForm.reset();
    

}

addUserForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newUser = new User(
        inputName.value,
        inputLastName.value,
        inputPhone.value,
        inputCity.value,
    );

    const id = newUser.id;

    users[id] = newUser;

    const newRow = createRow(newUser);
    tbody.appendChild(newRow);
    addUserForm.reset();
});



const populateChangeUserForm = (row) => {
    user = users[row.dataset.userId]
    const userKeys = Object.keys(user)


    for (const input of changeFormInputs) {

        const inputPropertyKey = input.dataset.inputPropertyKey;
        for (i = 0; i < userKeys.length; i++) {
            if (userKeys[i] === inputPropertyKey) {
                input.value = user[userKeys[i]]
            }
        }

    }
}


tbody.addEventListener("click", (event) => {
    event.preventDefault();

    selectedRow = event.target.closest("tr");

    populateChangeUserForm(selectedRow)

    selectedRow.classList.add('selected');
    changeUserForm.classList.remove('hidden');

    changeUserForm.classList.add('show');
    addUserForm.classList.add('disabled');

    body.classList.add('disabled-background')
    for (const input of addUserFormInputs) {
        input.readOnly = true;
    }

    addUserFormButton.disabled = true;


});

changeUserForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const selectedCells = selectedRow.querySelectorAll("td");
    debugger;

    for (const input of changeFormInputs) {

        const propertyKey = input.dataset.inputPropertyKey;
        if (user[propertyKey] = propertyKey) {
            user[propertyKey] = input.value;
        }


    }

    for (const cell of selectedCells) {

        cell.textContent = user[cell.dataset.userPropertyKey]
    }

    returnTableState();

    alert(`User ( ${user.id} : ${user.name} ${user.lastName} ) was changed`);


})


userDeleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    const confirmUserRowDelete = confirm('Do you want to delete this user from table?');
    const confirmUserInstanceDelete = confirm('Do you want to delete this user from data base?');
    if (confirmUserRowDelete) {
        selectedRow.remove();
    }

    if (confirmUserInstanceDelete) {
        user = selectedRow.dataset.userId;

        delete users[user];
        alert(`User ${user} was deleted from data base.`)
    }

    returnTableState();




})

cancelChangesButton.addEventListener('click', (event) => {
    event.preventDefault();
    returnTableState();

})