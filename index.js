

class User {


    constructor(id, name, lastName, phone, city) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.city = city;

    }



}





let users = [
    new User(1, "Dmytriy", "Parzhytsky", "0931230000", "Bachmut"),
    new User(2, "Oleksandra", "Marchenko", "0962782865", "Kyiv"),
    new User(3, "Volodymyr", "Kyselyov", "0962782845", "Kamyans`ke")];

let addTable = users.map(user => {


    let id = `<div class='id'>${user.id}</div>`;
    let name = `<div class='name'>${user.name}</div>`;
    let lastName = `<div class='lastName'>${user.lastName}</div>`;
    let phone = `<div class='phone'>${user.phone}</div>`;
    let city = `<div class='city'>${user.city}</div>`;

    let line = $("#table tr:last").after(`<tr><td>${name}</td><td>${lastName}</td><td>${phone}</td><td>${id}</td><td>${city}</td></tr>`);
    return line;


});

