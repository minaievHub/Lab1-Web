let regName = /[А-Я-ІЄ][а-я-іє]{1,20}\s[А-Я-ІЄ]\.[А-Я-ІЄ]\./,
    regGroup = /[А-Я-ІЄ]{2}\-[1-9]{2}/,
    regFaculty = /[А-Я-ІЄ]{4}/,
    regNum = /\([0-9]{3}\)\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,
    regAdress = /[м]\.\s[А-Я-ІЄ][а-я-іє]{1,20}/,
    regMail = /[a-z]{20}\@[a-z]{7}\.[com]{3}/,
    regDate = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/,
    regCard = /[А-Я-ІЄ]{2}\s\№[1-9]{6}/;
    


let inpName = document.querySelector("#name");
let inpGroup = document.querySelector("#group");
let inpFaculty = document.querySelector("#faculty");
let inpNum = document.querySelector("#num");
let inpCard = document.querySelector("#card");
let inpAdress = document.querySelector("#adress");
let inpDate = document.querySelector("#date");

document.querySelector(".submit").onclick = function(e){
    e.preventDefault();
    if (regName.test(inpName.value) && regCard.test(inpCard.value) && 
        regFaculty.test(inpFaculty.value) && regDate.test(inpDate.value) && 
        regAdress.test(inpAdress.value)) {
        console.log("corect");
        submit();
    }else {
        console.log("error");
    }

};

function submit(){
    alert(`Ім'я: ${inpName.value}
ID-card: ${inpCard.value}
Факультет: ${inpFaculty.value}
Дата народження: ${inpDate.value}
Адреса: ${inpAdress.value}
`)
}

const titl = document.getElementById('c1');

titl.onmouseover = function() {
    let randomColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    let randColor = '#'+ Math.floor(Math.random() * 19777215).toString(16);
    titl.style.backgroundColor = randColor;
    titl.style.color = randomColor;
}

const cell2 = document.getElementById('c9');

const three = document.getElementById('c3');
const six = document.getElementById('c6');
const eleven = document.getElementById('c11');
const sixteen = document.getElementById('c16');
const fifteen = document.getElementById('c15');
const twentyOne = document.getElementById('c21');
const twentySix = document.getElementById('c26');
const thirtyOne = document.getElementById('c31');

six.ondblclick = function() {
    six.style.background = color.value;
    eleven.style.background = color.value;
    sixteen.style.background = color.value;
    twentyOne.style.background = color.value;
    twentySix.style.background = color.value;
    thirtyOne.style.background = color.value;
}
function setColor() {
    const color = document.getElementById("color");
}

six.onclick = function() {
    six.style.background = color.value;
}