console.log("its on!!!");

let recognition = new webkitSpeechRecognition();

recognition.onResult = function (event) {
    console.log(event)
};

recognition.start();

console.log("Nothing?");