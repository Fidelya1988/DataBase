let form = document.querySelector('form');
let inputArea = form.querySelector('.input-area');
let submitButton = form.querySelector('.submit-button');
let table = document.querySelector('#table');
let templateTable = document.querySelector('#template-table').content;
let templateRow = templateTable.querySelector('.template-row')
let rowId = templateRow.querySelector('.row-id');
let rowName = templateRow.querySelector('.row-name');
let rowLastName = templateRow.querySelector('.row-last-name');
let rowPhone = templateRow.querySelector('.row-phone');
let rowCity = templateRow.querySelector('.row-city');

let User = function (id, name, lastName, phone, city) {



    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.city = city;
}

const renderRow = (newUser) => {
    rowId.textContent = newUser.id;
    rowName.textContent = newUser.name;
    rowLastName.textContent = newUser.lastName;
    rowPhone.textContent = newUser.phone;
    rowCity.textContent = newUser.city;
}



let users = [];




submitButton.addEventListener('click', evt => {

    evt.preventDefault();
    let inputName = form.querySelector('#name').value;
    let inputLastName = form.querySelector('#last-name').value;
    let inputPhone = form.querySelector('#phone-number').value;
    let inputCity = form.querySelector('#city').value;

    let newUser = new User(users.length + 1, inputName, inputLastName, inputPhone, inputCity);
    renderRow(newUser);
    users.push(newUser);
   
    let newRow = templateRow.cloneNode(true);
    table.appendChild(newRow);





})



// let addrow = (newUser) => {

//     newUser.map(user => {


//    let id = `<div class='id'>${user.id}</div>`;
//    let name = `<div class='name'>${user.name}</div>`;
//    let lastName = `<div class='lastName'>${user.lastName}</div>`;
//    let phone = `<div class='phone'>${user.phone}</div>`;
//    let city = `<div class='city'>${user.city}</div>`;

//  let row = $("#table tr:last").after(`<tr><td>${name}</td><td>${lastName}</td><td>${phone}</td><td>${id}</td><td>${city}</td></tr>`);


//   return row;


// })
// }
