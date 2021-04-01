//this is never get called 
for (let i = 0; i < 100; i++) {
    console.log("called from worker thread" + i);
}

//this is the entry point of dedicated worker and its gotten called from the main thread when it needs
onmessage = function (e) {
    console.log('Worker: Message received from main script');

    //the next lines if uncommented can hang the worker thread but not the main thread
    // for (let i = 0; i < 100000; i++) {
    //     console.log("called from worker thread" + i);
    // }
    
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('Please write two numbers');
    } else {
        const workerResult = 'Result: ' + result;
        console.log('Worker: Posting message back to main script');
        postMessage(workerResult); //notify the main thread, this thread has finished working
    }
}