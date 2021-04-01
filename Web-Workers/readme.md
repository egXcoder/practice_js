# Web Workers

Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface.

Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa)

A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file

workers run in another global context that is different from the current window. Thus, using the window shortcut to get the current global scope (instead of self) within a Worker will return an error.

you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window

Data is sent between workers and the main thread via a system of messages — both sides send their messages using the postMessage() method, and respond to messages via the onmessage event handler (the message is contained within the Message event's data attribute.) The data is copied rather than shared.

Workers may, in turn, spawn new workers,


## Dedicated workers

a dedicated worker is only accessible by the script that called it