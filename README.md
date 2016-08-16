# Overwolf + Typescript + Webpack Experiment

This is just a small experiment to see how easy it is to build Overwolf apps
using Typescript/Webpack. Answer: really easy. This small sample project just
creates a window that tells you what game you are currently playing when you
push a button. However, it does some nifty stuff:

- Package jQuery for DOM manipulation
- Include custom Typescript declarations for Overwolf functionality
- Dynamically package styles, HTML, and JS together
- Enable source mapping right in the Overwolf debugger

To test it out, first check out the code, then:

    $ npm install
    $ npm run build # use build:watch for continuous incremental compilation

Then, just install the app from the Overwolf dev tools and marvel in its glory!
