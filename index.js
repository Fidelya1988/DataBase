let form = document.querySelector("form");
let inputAreas = document.querySelectorAll(".input-area");
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

    let inputName = form.querySelector("#name").value;
    let inputLastName = form.querySelector("#last-name").value;
    let inputPhone = form.querySelector("#phone-number").value;
    let inputCity = form.querySelector("#city").value;

    let newUser = new User(
        users.length + 1,
        inputName,
        inputLastName,
        inputPhone,
        inputCity
    );
    renderRow(newUser);
    users.push(newUser);

    let newRow = templateRow.cloneNode(true);
    table.appendChild(newRow);

    for (let i = 0; i < inputAreas.length; i++) {
        inputAreas[i].value = "";
    }
});
