# Web Workers Demo

This repository contains a simple demonstration of Web Workers, showcasing how they can be used to offload heavy computations to a separate thread in a web browser environment.

## Files

1. **HTML File: `index.html`**

   ```html
   <!DOCTYPE html>
   <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
   <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
   <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
   <!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
   <html>
       <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <title>Web Workers</title>
           <meta name="description" content="">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <link rel="stylesheet" href="./style.css">
       </head>
       <body>
           <h1>Web Workers Demo</h1>
           <button onclick="show()">Click Me</button>

           <script>
               var x=0;

               function show(){
                   alert("Button Clicked!");
               }

               console.log('Before creating worker');
               if (window.Worker) {
                   var myWorker = new Worker('./worker.js');
                   myWorker.postMessage({input:x});

                   myWorker.onmessage = function(e) {
                       console.log('Message received from worker', e.data);
                   }
               } else {
                   console.log('Your browser doesn\'t support web workers.')
               }
           </script>
       </body>
   </html>
   ```

2. **CSS File: `style.css`**

   ```css
   button {
       background-color: #4CAF50;
       color: white;
       padding: 14px 20px;
       margin: 8px 0;
       border: none;
       cursor: pointer;
       width: 100%;
   }
   ```

3. **Worker.js File: `worker.js`**

   ```javascript
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
   ```

## Description

This project demonstrates the use of Web Workers to execute heavy computations in a separate thread, preventing UI blocking. The main HTML file (`index.html`) contains a button that triggers a Web Worker (`worker.js`) when clicked. The Web Worker performs a time-consuming loop and sends the result back to the main thread.

## How to Use

1. Clone this repository: `git clone https://github.com/Saad-DoEs-Code/Web-Workers-EAD-Sem_6.git`
2. Open `index.html` in a web browser.
3. Click the "Click Me" button to see the Web Worker in action.

OR

1. Open link `https://app.netlify.com/sites/web-workers-demo-by-saad/configuration/general?customize-site-name=true`

**Note**: Ensure that your browser supports Web Workers for the demo to work correctly.