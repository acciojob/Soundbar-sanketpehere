// Sound names (same as audio filenames)
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttonsDiv = document.getElementById("buttons");

let currentAudio = null;

// Create sound buttons
sounds.forEach(sound => {

    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.className = "btn";

    btn.addEventListener("click", () => {

        // stop previous audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });

    buttonsDiv.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement("button");
stopBtn.innerText = "stop";
stopBtn.className = "stop";

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsDiv.appendChild(stopBtn);