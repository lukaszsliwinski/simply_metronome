import Timer from './times.js';

const tempoDisplay = document.querySelector('.tempo');
const tempoDescription = document.querySelector('.tempo-description');
const tempoSlider = document.querySelector('.tempo-slider');
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const subtractNotes = document.querySelector('.subtract-notes');
const addNotes = document.querySelector('.add-notes');
const beatsValue = document.querySelector('.beat');
const notesValue = document.querySelector('.note');
const playPause = document.querySelector('.play-pause');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

const tempoDescriptionsArray = [[19, 40, "Grave"],
                                [40, 45, "Lento"],
                                [45, 55, "Largo"],
                                [55, 65, "Adagio"],
                                [65, 73, "Adagietto"],
                                [73, 86, "Andante"],
                                [86, 98, "Moderato"],
                                [98, 109, "Allegretto"],
                                [109, 132, "Allegro"],
                                [132, 168, "Vivace"],
                                [168, 178, "Presto"],
                                [178, 250, "Prestissimo"],
                                ];

let bpm = 120;
let tempoDescriptionString = "Allegro";
let beats = 4;
let notes = 4;
let count = 0;
let isRunning = false;

decreaseBtn.addEventListener('click', () => {
    bpm--;
    validateTempo()
    updateMetronome()
});
increaseBtn.addEventListener('click', () => {
    bpm++;
    validateTempo()
    updateMetronome()
});

tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo()
    updateMetronome()
});

subtractBeats.addEventListener('click', () => {
    if (beats <= 1) { return }
    beats--;
    beatsValue.textContent = beats;
    count = 0;
});

addBeats.addEventListener('click', () => {
    if (beats >= 12) { return }
    beats++;
    beatsValue.textContent = beats;
    count = 0;
});

subtractNotes.addEventListener('click', () => {
    if (notes <= 1) { return }
    notes /= 2;
    notesValue.textContent = notes;
    updateMetronome()
    count = 0;
});

addNotes.addEventListener('click', () => {
    if (notes >= 16) { return }
    notes *= 2;
    notesValue.textContent = notes;
    updateMetronome()
    count = 0;
});

playPause.addEventListener('click', () => {
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        playBtn.classList.add('hide');
        pauseBtn.classList.remove('hide');
    } else {
        metronome.stop();
        isRunning = false;
        playBtn.classList.remove('hide');
        pauseBtn.classList.add('hide');
    }
})


function updateMetronome() {
    tempoDisplay.textContent = bpm;
    metronome.timeInterval = 240000 / bpm / notes;
    for (let i = 0; i < tempoDescriptionsArray.length; i++) {
        if (bpm > tempoDescriptionsArray[i][0] && bpm < tempoDescriptionsArray[i][1]) {
            tempoDescriptionString = tempoDescriptionsArray[i][2]}
        }
    tempoDescription.textContent = tempoDescriptionString;
}

function validateTempo() {
    if (bpm <= 20) { bpm = 20 };
    if (bpm >= 250) { bpm = 250 };
}

function playClick() {
    if (count === beats) {
        count = 0;
    }
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}


const metronome = new Timer(playClick, 240000 / bpm / notes, { immediate: true });