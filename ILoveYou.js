const scoldings = [
    "Nahi? Sochi bhi mat! Chup chaap se Haan kro! 😤",
    "Arey! Galat button daba rhi ho, 'YES' side mein hai! ❤️",
    "Finger slip ho gyi hogi... Chup chaap Haan kro 🙄",
    "Itna nakhra? Haan krdo ab meri Fuljadi! ✨",
    "Arey! Ye 'Nahi' wala button kharab hai, 'Haan' try kro! 💖",
    "Bohot badmash ho gyi ho... Chup chaap Haan pe click kro! 😂",
    "Maan jao na... Kitni baar Nahi bologe? 🥺",
    "Seriously? Ab toh Haan bol do! 😤❤️",
    "Nahi click krne se kuch nahi hoga, sirf daant milegi! 😂"
];

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0);
}

// Background Hearts Generator
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.position = 'fixed';
    heart.style.top = '100vh';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);

const noBtn = document.getElementById('no-btn');

// This ONLY scolds. It does NOT hide or move the button.
noBtn.addEventListener('click', () => {
    const randomMsg = scoldings[Math.floor(Math.random() * scoldings.length)];
    alert(randomMsg);
});