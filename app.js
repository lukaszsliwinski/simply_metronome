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
});

addBeats.addEventListener('click', () => {
    if (beats >= 12) { return }
    beats++;
    beatsValue.textContent = beats;
});

subtractNotes.addEventListener('click', () => {
    if (notes <= 1) { return }
    notes /= 2;
    notesValue.textContent = notes;
});

addNotes.addEventListener('click', () => {
    if (notes >= 64) { return }
    notes *= 2;
    notesValue.textContent = notes;
});


function updateMetronome() {
    tempoDisplay.textContent = bpm;
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