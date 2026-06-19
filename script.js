
window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";



},1500);

});


// ================= AOS =================

AOS.init({
duration:1000,
once:true
});


// ================= TYPING EFFECT =================
const texts = [
"Elektronika Enthusiast",
"Electronics & Software Builder",
"Backend Developer",
"IoT Developer",
"AI Prompting",
"Motorcycle Modifier",
"NodeMCU Programmer",
"C++ Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeText() {

if (count === texts.length) {
count = 0;
}

currentText = texts[count];

letter = currentText.slice(0, ++index);

const el = document.getElementById("typing");
if (!el) return;

el.textContent = letter;

if (letter.length === currentText.length) {
setTimeout(erase, 1500);
} else {
setTimeout(typeText, 100);
}

}
typeText();
function erase() {

letter = currentText.slice(0, --index);

const el = document.getElementById("typing");
if (!el) return;

el.textContent = letter;

if (letter.length === 0) {
count++;
setTimeout(typeText, 300);
} else {
setTimeout(erase, 50);
}

}

// start typing

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = ()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML = "☀️";

}
else{

themeBtn.innerHTML = "🌙";

}

};
const progressBars =
document.querySelectorAll(".progress");

window.addEventListener("scroll",()=>{

progressBars.forEach(bar=>{

bar.style.animation =
"fillBar 2s forwards";

});

});




// ================= PROJECT CARD 3D =================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

const rotateY =
(-1/5 * x + 20);

const rotateX =
(1/5 * y - 20);

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateX(0deg) rotateY(0deg)";

});

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});
const ctx = document.getElementById('skillChart');

new Chart(ctx, {

type: 'radar',

data: {

labels: [
"Python",
"Html",
"CSS",
"Javascript",
"PHP",
'Arduino',
'ESP8266',
'ESP32',
'C++',
'Elektronika',
'Troubleshooting'
],

datasets: [{

label: 'Skill Level',

data: [90,90,85,85,70,60,60,60,70,80,86],

backgroundColor: 'rgba(0,255,255,0.2)',

borderColor: 'cyan',

borderWidth: 3,

pointBackgroundColor: 'cyan',

pointRadius: 5

}]

},

options: {

responsive:true,

plugins:{
legend:{
labels:{
color:'white'
}
}
},

scales:{
r:{
angleLines:{
color:'rgba(255,255,255,.2)'
},
grid:{
color:'rgba(255,255,255,.2)'
},
pointLabels:{
color:'white'
},
ticks:{
display:false
}
}
}

}

});
function openProject(el){
  let title = el.querySelector("h3").innerText;
  let desc = el.querySelector("p").innerText;

  alert("🚀 PROJECT\n\n" + title + "\n\n" + desc);
}

function openCert(title, subtitle, desc){
  let modal = document.getElementById("achvModal");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalSubtitle").innerText = subtitle;
  document.getElementById("modalDesc").innerText = desc;

  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById("achvModal").style.display = "none";
}

/* FILTER FIX (INI PENTING) */
function achvFilter(type, event){
  let items = document.querySelectorAll(".achv-item");
  let buttons = document.querySelectorAll(".achv-btn");

  buttons.forEach(b => b.classList.remove("achv-active"));
  event.currentTarget.classList.add("achv-active");

  items.forEach(i=>{
    if(type === "all"){
      i.style.display = "block";
    } 
    else {
      i.style.display = i.classList.contains(type) ? "block" : "none";
    }
  });
}