let browserInstances = [];
let counter = 0;

onconnect = function (e) {
    var port = e.ports[0];
    browserInstances.push(port);
    
    port.onmessage = function (e) {
        counter++;

        for(index in browserInstances){
            browserInstances[index].postMessage(counter);
        }
    }

}