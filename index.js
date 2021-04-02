let form = document.querySelector("form");
let inputName = form.querySelector("input.name");
let inputLastName = form.querySelector("input.last-name");
let inputPhone = form.querySelector("input.phone");
let inputCity = form.querySelector("input.city");

let table = document.querySelector("#table");
let tableRowTemplate = document.querySelector("#table-row").content;
let templateCellId = tableRowTemplate.querySelector("td.id");
let templateCellName = tableRowTemplate.querySelector("td.name");
let templateCellLastName = tableRowTemplate.querySelector("td.last-name");
let templateCellPhone = tableRowTemplate.querySelector("td.phone");
let templateCellCity = tableRowTemplate.querySelector("td.city");

let users = [];

class User {
    static createID() {
        return users.length + 1;
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
    templateCellId.textContent = newUser.id;
    templateCellName.textContent = newUser.name;
    templateCellLastName.textContent = newUser.lastName;
    templateCellPhone.textContent = newUser.phone;
    templateCellCity.textContent = newUser.city;

    // return a deep copy of the row
    return tableRowTemplate.cloneNode(true);
};

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let newUser = new User(
        inputName.value,
        inputLastName.value,
        inputPhone.value,
        inputCity.value,
    );
    users.push(newUser);

    let newRow = createRow(user);
    table.appendChild(newRow);
    form.reset();
});
