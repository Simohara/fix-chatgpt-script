// ==UserScript==
// @name         chatgpt
// @namespace   https://chat.openai.com/chat
// @match    https://chat.openai.com/chat
// @match    https://chat.openai.com/chat#
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Declare variables
    let currentMessage = ""; // stores current chat message
    let previousMessage = ""; // stores previous chat messages
    let addedText = ""; // stores text added to chat message
    let oldPubSubPublish = window.PubSub.publish; // stores original PubSub.publish function

    // Function to clear previousMessage variable
    function clearPreviousMessage() {
        previousMessage = "";
        console.log("Cleared previous message.")
    }

    // Create button to clear previousMessage variable
    var newButton = document.createElement("a");
    newButton.className = "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20";
    newButton.innerHTML = 'Clear previous message';
    newButton.addEventListener("click", clearPreviousMessage);
    document.querySelector("nav.m-2").insertBefore(newButton, document.querySelector("nav.m-2").firstChild.nextSibling);

    // Override PubSub.publish function to append previousMessage to chat messages
    window.PubSub.publish = function (code, obj) {
        if (obj.flag !== undefined) {
            // Append currentMessage to previousMessage and store in previousMessage
            previousMessage = previousMessage + currentMessage;
            addedText = currentMessage;
            // Append previousMessage to chat message and store in obj.text
            obj.text = `${obj.text}\n\n${previousMessage}`;
            console.log(previousMessage)
            // Reset currentMessage
            currentMessage = "";
            // Delete flag from obj
            delete obj.flag;
        } else {
            // Store current chat message in currentMessage
            currentMessage = obj.text;
            // Append previousMessage to chat message and store in obj.text
            obj.text = `${previousMessage}\n${obj.text}`;
        }
        // Call original PubSub.publish function
        oldPubSubPublish(code, obj)
    }
}) ();
