//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr =[ 55, 'hello', true, false, 100, 'elephant',100500, 'turtle', 'butterfly', 999];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let firstBook = {
    title: "The Paris Apartment",
    pageCount: 125,
    genre:"Comedy"
}
console.log(firstBook);
let secondBook = {
    title: "Black Cake",
    pageCount: 250,
    genre:"Fantasy"
}
console.log(secondBook);
let thirdBook = {
    title: "Every Summer",
    pageCount: 336,
    genre:"Horror"
}
console.log(thirdBook);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let Book1 = {
    title: "To Paradise",
    pageCount: 654,
    genre:"Drama",
    authors:['Nita Prose',46]

}
console.log(Book1);
let Book2 = {
    title: "The Candy House",
    pageCount: 405,
    genre:"Thriller",
    authors: ['Jennifer Egan',66]
}
console.log(Book2);
let Book3 = {
    title: "Reminders of Him",
    pageCount: 186,
    genre:"Crime",
    authors:['Colleen Hoover',25]
}
console.log(Book3);
console.log(Book3.authors);
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Alexandra', username :'Smith',password: 'fs2893KL232'},
    {name: 'Adam', username :'Johnson',password: 'BNjn9473859'},
    {name: 'Alison', username :'Williams',password: '1fg1111gf1'},
    {name: 'Arthur', username :'Jones',password: '12d34fgf56'},
    {name: 'Anna', username :'Brown',password: '77ukjy8899'},
    {name: 'Adrian', username :'Davis',password: '9gguv89898'},
    {name: 'Agatha', username :'Miller',password: 'ytGGJH564368'},
    {name: 'Antony', username :'Taylor',password: 'KARAmba122'},
    {name: 'Alen', username :'Thompson',password: '102qsd030'},
    {name: 'Andy', username :'Martin',password: '93csdc5345'},


]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);