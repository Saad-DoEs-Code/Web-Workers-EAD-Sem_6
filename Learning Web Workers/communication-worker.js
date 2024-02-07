// my-web-worker.js
self.addEventListener("message", () => {
    // Sends a message of "Hellow, window!" from the web worker:
    self.postMessage("Hello, window! This is Web Worker!");
  });