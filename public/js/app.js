import Timer from './timer.js';

const click1 = new Audio('/media/click1.mp3');
const click2 = new Audio('/media/click2.mp3');

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

// change tempo value
$('.decrease-tempo-btn').on('click', () => {
    bpm--;
    validateTempo();
});

$('.increase-tempo-btn').on('click', () => {
    bpm++;
    validateTempo();
});

$('.tempo-slider').on('input', () => {
    bpm = $('.tempo-slider').val();
    validateTempo();
});


// change measure - beats
$('.subtract-beats-btn').on('click', () => {
    if (beats <= 1) { return };
    beats--;
    $('.display-beats').text(beats);
    count = 0;
});

$('.add-beats-btn').on('click', () => {
    if (beats >= 12) { return };
    beats++;
    $('.display-beats').text(beats);
    count = 0;
});


// change measure - notes
$('.subtract-notes-btn').on('click', () => {
    if (notes <= 1) { return };
    notes /= 2;
    $('.display-notes').text(notes);
    updateMetronome();
    count = 0;
});

$('.add-notes-btn').on('click', () => {
    if (notes >= 16) { return };
    notes *= 2;
    $('.display-notes').text(notes);
    updateMetronome();
    count = 0;
});


// play button
$('.play-btn').on('click', () => {
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        $(this).addClass('is-playing');
    } else {
        metronome.stop();
        isRunning = false;
        $(this).removeClass('is-playing');
    };
});


function updateMetronome() {
    $('.tempo-value').text(bpm);
    metronome.timeInterval = 240000 / bpm / notes;
    for (let i = 0; i < tempoDescriptionsArray.length; i++) {
        if (bpm > tempoDescriptionsArray[i][0] && bpm < tempoDescriptionsArray[i][1]) {
            tempoDescriptionString = tempoDescriptionsArray[i][2]};
        };
    $('.tempo-description').text(tempoDescriptionString);
};

function validateTempo() {
    if (bpm <= 20) { bpm = 20 };
    if (bpm >= 250) { bpm = 250 };
    updateMetronome();
};

function playClick() {
    if (count === beats) {
        count = 0;
    };
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    };
    count++;
};

const metronome = new Timer(playClick, 240000 / bpm / notes, { immediate: true });