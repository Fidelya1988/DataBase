const form = document.querySelector("form");
const inputName = form.querySelector("input.name");
const inputLastName = form.querySelector("input.last-name");
const inputPhone = form.querySelector("input.phone");
const inputCity = form.querySelector("input.city");

const table = document.querySelector("#table");
const tableRowTemplate = document.querySelector("#table-row").content;
const templateCells = tableRowTemplate.querySelectorAll("td");

const users = [];

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
    for (const cell of templateCells)
        cell.textContent = newUser[cell.dataset.userPropertyKey];

    // return a deep copy of the row
    return tableRowTemplate.cloneNode(true);
};

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newUser = new User(
        inputName.value,
        inputLastName.value,
        inputPhone.value,
        inputCity.value,
    );
    users.push(newUser);

    const newRow = createRow(newUser);
    table.appendChild(newRow);
    form.reset();
});
