const findBtn = document.getElementById('findBtn');
const nameInput = document.getElementById('name');
const dotAnim = document.getElementById('dotAnim');
const finalMessage = document.getElementById('finalMessage');
const detectText = document.getElementById('detectText');

const funnyLines = [
    "Detecting",
    "Calling Brahma ji",
    "Checking your future",
    "Asking devta log",
    "Consulting fate server",
    "Uploading your naam to universe",
    "Downloading result from bhavishya"
];

let funnyIndex = 0;
let funnyInterval;

function startFunnyText() {
    funnyInterval = setInterval(() => {
        detectText.textContent = funnyLines[funnyIndex];
        funnyIndex = (funnyIndex + 1) % funnyLines.length;
    }, 700);
}

function stopFunnyText() {
    clearInterval(funnyInterval);
}

function runFeature() {
    finalMessage.classList.remove('show');
    finalMessage.classList.add('hidden');
    dotAnim.classList.remove('hidden');
    finalMessage.innerHTML = '';
    findBtn.disabled = true;
    findBtn.style.opacity = 0.7;

    startFunnyText();

    setTimeout(() => {
        stopFunnyText();
        dotAnim.classList.add('hidden');

        // create video element
        const video = document.createElement('video');
        video.src = 'video/duniya_khtam.mp4';
        video.alt = 'Playing Your Future'; // <-- your video path
        video.autoplay = true;
        video.loop = false;
        video.muted = true; // some browsers require mute for autoplay
        video.controls = false;
        video.style.maxWidth = '100%';
        video.style.borderRadius = '10px';
        video.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';

        finalMessage.appendChild(video);
        finalMessage.classList.remove('hidden');
        requestAnimationFrame(() => finalMessage.classList.add('show'));

        findBtn.disabled = false;
        findBtn.style.opacity = 1;

    }, 3500); // ~3.5s funny animation
}

findBtn.addEventListener('click', runFeature);
nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runFeature();
});