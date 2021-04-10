let form = document.querySelector("form");
let inputName = form.querySelector("#name");
let inputLastName = form.querySelector("#last-name");
let inputPhone = form.querySelector("#phone-number");
let inputCity = form.querySelector("#city");

let table = document.querySelector("#table");
let templateTable = document.querySelector("#template-table").content;
let templateRow = templateTable.querySelector(".template-row");
let rowId = templateRow.querySelector(".row-id");
let rowName = templateRow.querySelector(".row-name");
let rowLastName = templateRow.querySelector(".row-last-name");
let rowPhone = templateRow.querySelector(".row-phone");
let rowCity = templateRow.querySelector(".row-city");

let User = function (id, name, lastName, phone, city) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.city = city;
};

const renderRow = (newUser) => {
    rowId.textContent = newUser.id;
    rowName.textContent = newUser.name;
    rowLastName.textContent = newUser.lastName;
    rowPhone.textContent = newUser.phone;
    rowCity.textContent = newUser.city;
};

let users = [];

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let newUser = new User(
        users.length + 1,
        inputName.value,
        inputLastName.value,
        inputPhone.value,
        inputCity.value,
    );
    renderRow(newUser);
    users.push(newUser);

    let newRow = templateRow.cloneNode(true);
    table.appendChild(newRow);
    form.reset();
});
