var button = document.querySelector('#button');


if (window.SharedWorker) {
    var myWorker = new SharedWorker("worker2.js");

    button.onclick = function () {
        myWorker.port.postMessage('button is clicked');
        console.log('Message posted to worker');
    }

    myWorker.port.onmessage = function (e) {
        console.log(e);
        alert("button is clicked " + e.data + " times");
    }
}