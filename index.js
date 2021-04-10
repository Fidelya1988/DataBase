const addUserForm = document.querySelector("#add-user-form");
const inputName = addUserForm.querySelector("input.name");
const inputLastName = addUserForm.querySelector("input.last-name");
const inputPhone = addUserForm.querySelector("input.phone");
const inputCity = addUserForm.querySelector("input.city");

const tbody = document.querySelector("#tbody");
const tableRowTemplate = document.querySelector("#table-row").content;
const templateCells = tableRowTemplate.querySelectorAll("td");

const users = {};

class User {
    static createID() {
        return Math.random().toString().slice(10);
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
    for (const cell of templateCells)
        cell.textContent = newUser[cell.dataset.userPropertyKey];
      
        

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

tbody.addEventListener("click", (event) => {
    // this forbids putting tables inside tables
    const row = event.target.closest("tr");
   
    const user = users[row.dataset.userId];

    // TODO: add popup form
    user.name = prompt("Set new user name:", user.name) || user.name;

    const nameCell = row.querySelector(".name");

    nameCell.textContent = user.name;
});
