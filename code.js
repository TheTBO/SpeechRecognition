console.log("its on!!!");

let rec = new webkitSpeechRecognition();

rec.lang = "en-US"

rec.interimResults = true;

let dev = document.getElementsByClassName("words")[0];

let p = document.createElement("P");
dev.appendChild(p);

let stop = false;

rec.onresult = function (event) {
    console.log(event.results)
    let final_transcript = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        }
    }
    p.innerHTML += " " + final_transcript;
    if (final_transcript === "stop") {
        stop = true;
        rec.stop();
    }

};

rec.onend = function () {
    if (!stop) {
        rec.start();
    }
}

let startButton = document.getElementById("start");

let stopButton = document.getElementById("stop");

let save = document.getElementById("save");

startButton.onclick = function () {
    rec.start();
}

stopButton.onclick = function () {
    stop = true;
    rec.stop();
}

save.onclick = function () {
    download('file.txt', p.innerHTML)
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}