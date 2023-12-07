//Jamie logic
function getChatbotResponse(userInput){
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("jamie")) {
        return "Can I help you?";
    }else if(userInput.endsWith("?")){
        return "Yes";
    }else if(userInput === userInput.toUpperCase()){
        if(userInput.endsWith("?")){
            return "Please give me some time to resolve the issue.";
        }else{
            return "Please remain calm.";
        }
    }else if(userInput.endsWith("!")){  
        return "Please remain calm"
    }
    else{
        return "Sorry, I don't understand";
    }
}


//function to add message to the message container
function addMessage(content,type){
    const messageContainer = $("#message-container");
    const messageClass = type === "user" ? "user" : "jamie";
    const senderName = type === "user" ? "You" : "Jamie";

    const bubbleClass = `message-bubble ${messageClass}`;
    const messageBubble = `<div class="${bubbleClass}">
                                <div class="message-sender">${senderName}</div>
                                <div class="message-content">
                                    <p>${content}</p>        
                                </div>
                                <div class="message-datetime">
                                <span class="message-time">${getCurrentDateTime()}</span>
                                </div>
                            </div>`;
    messageContainer.append(messageBubble);

    //Scroll to the bottom of the message container
    messageContainer.scrollTop(messageContainer[0].scrollHeight);
}


$(document).ready(function() {
    // Call the function to send the initial greeting when the document is ready
    sendInitialGreeting();
});

// Function to send initial greeting message from Jamie
function sendInitialGreeting() {
    const greeting = "Hello! Nice to meet you.";
    addMessage(greeting, "jamie");
}

//function to send user message and get Jamie's response
function sendMessage(){
    const userInput = $("#user-input").val();
    if(userInput.trim() !== ""){

     
    
        addMessage(userInput, "user");

        //Get Jamie's response
        const jamieResponse = getChatbotResponse(userInput);
        addMessage(jamieResponse, "jamie");

        //clear the input
        $("#user-input").val("");
    }
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


// Function to get current date and time
function getCurrentDateTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
}