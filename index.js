let form = document.querySelector('form');
let inputArea = form.querySelector('.input-area');
let submitButton = form.querySelector('.submit-button');
let table = document.querySelector('#table');


let templateTable =  document.querySelector('#template-table').content;
let templateLine = templateTable.querySelector('.template-line')
let lineId = templateLine.querySelector('.line-id');
let lineName = templateLine.querySelector('.line-name');
let lineLastName = templateLine.querySelector('.line-last-name');
let linePhone = templateLine.querySelector('.line-phone');
let lineCity = templateLine.querySelector('.line-city');
let User =  function (id, name, lastName, phone, city){


  
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.city = city;
       



}

const renderLine = (newUser) =>{
    lineId.textContent  = newUser.id;
    lineName.textContent = newUser.name;
    lineLastName.textContent = newUser.lastName;
    linePhone.textContent = newUser.phone;
    lineCity.textContent = newUser.city;
}



let users = [];



console.log(templateLine)


submitButton.addEventListener ('click', evt => {
    
    evt.preventDefault();
    let inputName = form.querySelector('#name').value;
    let  inputLastName = form.querySelector('#last-name').value;
    let  inputPhone = form.querySelector('#phone-number').value;
    let  inputCity = form.querySelector('#city').value;
    
  let newUser =  new User(users.length+1, inputName, inputLastName, inputPhone, inputCity);
 renderLine(newUser);
  users.push(newUser);
  console.log(users)

  
let newLine = templateLine.cloneNode(true);
table.appendChild(newLine);


        
     

})

  

// let addLine = (newUser) => {

//     newUser.map(user => {


//    let id = `<div class='id'>${user.id}</div>`;
//    let name = `<div class='name'>${user.name}</div>`;
//    let lastName = `<div class='lastName'>${user.lastName}</div>`;
//    let phone = `<div class='phone'>${user.phone}</div>`;
//    let city = `<div class='city'>${user.city}</div>`;
 
//  let line = $("#table tr:last").after(`<tr><td>${name}</td><td>${lastName}</td><td>${phone}</td><td>${id}</td><td>${city}</td></tr>`);


//   return line;


// })
// }
