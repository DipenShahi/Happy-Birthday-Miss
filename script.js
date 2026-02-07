const text = `Happy Birthday 💖\n\nI am truly glad I met you.\nEven if we are not together, thank you for the memories and kindness.\n\nI hope your future is full of peace, success, and genuine happiness.`;


let i = 0;
function typeWriter() {
if (i < text.length) {
document.getElementById("typingText").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 40);
}
}
typeWriter();


function openLetter() {
const letter = document.getElementById("letter");
letter.style.display = "block";
letter.style.opacity = "0";
setTimeout(() => letter.style.opacity = "1", 10); // Smooth reveal
}


function sendAnswer(answer) {
const message = answer === 'Yes'
? "Maybe… someday… that would be the happiest surprise of my life."
: "That’s okay. I will still wish you happiness, always.";


document.getElementById("response").innerText = message;


window.location.href = `mailto:dipenshahi2009@gmail.com?subject=Answer%20to%20your%20letter&body=Her%20answer:%20${answer}`;
}


function toggleMusic() {
const music = document.getElementById("music");
music.paused ? music.play() : music.pause();
}


const hearts = document.querySelector('.hearts');
const flowers = document.querySelector('.flowers');


setInterval(() => {
const heart = document.createElement('span');
heart.innerText = '💖';
heart.style.left = Math.random() * 100 + 'vw';
hearts.appendChild(heart);
setTimeout(() => heart.remove(), 8000);
}, 500);


setInterval(() => {
const flower = document.createElement('span');
flower.innerText = '🌸';
flower.style.left = Math.random() * 100 + 'vw';
flowers.appendChild(flower);
setTimeout(() => flower.remove(), 8000);
}, 900);


// Dynamic countdown: prompt for birthday date
let targetDate = localStorage.getItem('birthdayDate');
if (!targetDate) {
const birthdayInput = prompt('Enter the birthday date (MM/DD/YYYY):', '02/09/2026');
if (birthdayInput) {
targetDate = new Date(birthdayInput + ' 00:00:00').getTime();
localStorage.setItem('birthdayDate', targetDate);
} else {
targetDate = new Date('Feb 9, 2026 00:00:00').getTime(); // Fallback
}
}

setInterval(() => {
const now = new Date().getTime();
const diff = targetDate - now;

const d = Math.floor(diff / (1000*60*60*24));
const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
const m = Math.floor((diff % (1000*60*60)) / (1000*60));
const s = Math.floor((diff % (1000*60)) / 1000);

document.getElementById('countdown').innerText =
diff > 0 ? `${d}d ${h}h ${m}m ${s}s until her birthday 🎂` : 'Happy Birthday 🎉';
}, 1000);
