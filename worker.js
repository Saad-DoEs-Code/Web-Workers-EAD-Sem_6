this.onmessage = function (e) {
    if (e.data.input !== undefined) {
        let temp = e.data.input;
        console.log("Worker received: ", temp);
        console.log("Entering Loop");
        var x = 0;
        for (let i = 0; i < 10000000000; i++) {
            x = x + i;
        }
        console.log('After loop in Thread: ', x);
        this.postMessage({ output: x });
    }
}