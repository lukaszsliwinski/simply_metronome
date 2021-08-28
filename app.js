const tempoDescription = document.querySelector('.tempo-description');
const tempoSlider = document.querySelector('.tempo-slider');


let bpm = 120;
let tempoDescriptionString = "Allegro";



tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo()
    updateMetronome()
});


function updateMetronome() {
    if (bpm <= 40) { tempoDescriptionString = "Grave" };
    if (bpm > 40 && bpm < 45) { tempoDescriptionString = "Lento" };
    if (bpm > 45 && bpm < 55) { tempoDescriptionString = "Largo" };
    if (bpm > 55 && bpm < 65) { tempoDescriptionString = "Adagio" };
    if (bpm > 65 && bpm < 73) { tempoDescriptionString = "Adagietto" };
    if (bpm > 73 && bpm < 86) { tempoDescriptionString = "Andante" };
    if (bpm > 86 && bpm < 98) { tempoDescriptionString = "Moderato" };
    if (bpm > 98 && bpm < 109) { tempoDescriptionString = "Allegretto" };
    if (bpm > 109 && bpm < 132) { tempoDescriptionString = "Allegro" };
    if (bpm > 132 && bpm < 168) { tempoDescriptionString = "Vivace" };
    if (bpm > 168 && bpm < 178) { tempoDescriptionString = "Presto" };
    if (bpm > 178 && bpm < 280) { tempoDescriptionString = "Prestissimo" };

    tempoDescription.textContent = tempoDescriptionString;
}

function validateTempo() {
    if (bpm <= 20) { return }
    if (bpm >= 250) { return }
}