const tempoDescription = document.querySelector('.tempo-description');
const tempoSlider = document.querySelector('.tempo-slider');

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



tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo()
    updateMetronome()
});


function updateMetronome() {
    for (let i = 0; i < tempoDescriptionsArray.length; i++) {
        if (bpm > tempoDescriptionsArray[i][0] && bpm < tempoDescriptionsArray[i][1]) {
            tempoDescriptionString = tempoDescriptionsArray[i][2]}
        }
    tempoDescription.textContent = tempoDescriptionString;
}

function validateTempo() {
    if (bpm <= 20) { return }
    if (bpm >= 250) { return }
}