console.log("its on!!!");

const recognition = new webkitSpeechRecognition();

recognition.onResult = function (event) {
    console.log("Result Bruh!");
    console.log(event);
};

recognition.onError = function (event) {
    console.log("Error Bruh!");
    console.log(event);
};

recognition.onStart = function (event) {
    console.log("Started Bruh!");
    console.log(event);
};

recognition.start();