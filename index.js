const addUserForm = document.querySelector("#add-user-form");
const inputName = addUserForm.querySelector("input.name");
const inputLastName = addUserForm.querySelector("input.last-name");
const inputPhone = addUserForm.querySelector("input.phone");
const inputCity = addUserForm.querySelector("input.city");

const tbody = document.querySelector("#tbody");
const tableRowTemplate = document.querySelector("#table-row").content;
const templateCells = tableRowTemplate.querySelectorAll("td");

const changeUserForm = document.querySelector("#change-user-form");
const changeInputName = changeUserForm.querySelector("input.name");
const changeInputLastName = changeUserForm.querySelector("input.last-name");
const changeInputPhone = changeUserForm.querySelector("input.phone");
const changeInputCity = changeUserForm.querySelector("input.city");
const changeFormInputs = changeUserForm.querySelectorAll("input");

const addUserFormInputs = addUserForm.querySelectorAll('input')
const addUserFormButton = addUserForm.querySelector('button')
const users = {};

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

let selectedRow = null;
let user = null;

const populateChangeUserForm = (row) => {
    user = users[row.dataset.userId];
    const userKeys = Object.keys(user)
    
    
    for (const input of changeFormInputs) {
         
        const inputPropertyKey = input.dataset.inputPropertyKey;
        for (i=0; i<userKeys.length; i++) {
            if (userKeys[i] === inputPropertyKey ) {
                input.value = user[userKeys[i]]
            }
        }
           
            }
        }
   

tbody.addEventListener("click", (event) => {
    event.preventDefault();

    selectedRow = event.target.closest("tr");
    populateChangeUserForm(selectedRow)
    
    changeUserForm.classList.remove('hidden');
    changeUserForm.classList.add('show');
    addUserForm.classList.add('disabled');
   
   for (const input of addUserFormInputs) {
   input.readOnly =true;
   }
   addUserFormButton.disabled = true;
  
});

changeUserForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const selectedCells = selectedRow.querySelectorAll("td");
  

    for (const input of changeFormInputs) {

        const propertyKey = input.dataset.inputPropertyKey;
        if (user[propertyKey] = propertyKey) {
            user[propertyKey] = input.value;
        }


    }

    for (const cell of selectedCells) {

        cell.textContent = user[cell.dataset.userPropertyKey]
    }




    selectedRow = null;
    changeUserForm.classList.add('hidden');
    changeUserForm.classList.remove('show');
    addUserForm.classList.remove('disabled');
    for (const input of addUserFormInputs) {
        input.readOnly =false;
        }
        addUserFormButton.disabled = false;
    changeUserForm.reset();
})

