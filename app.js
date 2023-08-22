let monthEle = document.getElementById('monthTxt');
let dayNumEle = document.getElementById('dayNumber');
let dayNameEle = document.getElementById('dayName');
let yearEle = document.getElementById('year');

const date = new Date();
// let getDate = date.toLocaleString("default",{dateStyle: "full"});
// console.log(getDate);

const getMonth = date.getMonth();
console.log(getMonth);
monthEle.innerText= date.toLocaleString("default",{month: "short"});

dayNumEle.innerText = date.toLocaleString("en", {day: "numeric"});

dayNameEle.innerText = date.toLocaleString("en",{weekday: "long"});

yearEle.innerText = date.getFullYear();

