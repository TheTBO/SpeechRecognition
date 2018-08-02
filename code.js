console.log("its on!!!");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.onResult = function (event) {
    console.log(event)
};

recognition.start();

console.log("Nothing?");