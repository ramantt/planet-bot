
const chatContainer = document.getElementById('chat-container'); 
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
let userName = '';
//variables - to HTML elements 



submitButton.addEventListener('click', () => {  //adding EventListner to a function will trigger the line of code I want to function for a user interaction
    const inputText = userInput.value.trim(); // trimming white space to make user inputs more clearer
    userInput.value = ''; // Confirming user name is in user input
    if (!userName) {  // ! is used to define if username variable is false  
        // will automatically set user name and start conversation 
        userName = inputText; 
        chatContainer.innerHTML = '';  
        addChatMessage(`Hiii, ${userName}! Do you want to start talking about Wildlife, Pollution or Antarctic first?`);
        userInput.placeholder = 'Wildlife, Pollution or Antartic...'; 
    } else {
        handleUserResponse(inputText);
    } 
    scrollToBottom();
});

function addChatMessage(message) {
    chatContainer.innerHTML += `<div class="chat-message">${message}</div>`;
}

// adding the chat message in the chat container
function addChatMessage(message) {
    const chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.textContent = message;
    chatContainer.appendChild(chatMessage); //appendChild, adding the element
}

// conducting user responses 
function handleUserResponse(response) {
    response = response.toLowerCase();

     let botResponse;
// statments for chatbot 
    if (response === 'wildlife') {
        // wildlife responses / information
        addChatMessage('Did you know that many different species right now like tigers and elephants are currently losing their homes and source to food? Type yes to continue or type in "reset" to start again ');
    } else if (response === 'yes') {
        botResponse = "Another fact is that habitat Loss is one of the most impactful issues for wildlife. Many animals lose their homes destruction, climate change and pollution etc. Want to know how to help wildlife in NZ? type 'help' to continue... ";
    } else if (response.includes('help')) {
        botResponse = "To help Animals in NZ keep their habitats or be able to have a safe enviroment, donating to reliable wildlife company's can be a great start. Tiaki Promise a great orginization that helps many native animals preserve their homes. Type in 'reset' to start again. "
    }
    else if (response === 'pollution') {
        // pollution responses / information
        addChatMessage('Did you know in 2022 that 66 million tons of waste and rubbish and other polluted products were effused from the US? Type "okay" to continue or type reset to restart');
    } else if (response === 'okay') {
    botResponse = 'Did you know that in 2019, 9 million death est. were linked to pollution. Type "next" to see how you can help pollution in nz'
    } else if (response === 'next') {
        botResponse = 'A good way to reduce pollution is reducing the usage of car trips. This can prevent toxic gasses into the air greatly. Type in "reset" to start again.  '
    }
    else if (response === 'antarctic') {
        // antarctic responses / information 
        addChatMessage('Did you know that in Antartica has lost 150 billion metric tons of ice from 2002-2023? Type "ok" to continue...')
    } else if (response === 'ok') {
        botResponse = 'Another fact is overfishing in Antartica has its effects on many target species and effects on predator populations food sources. Type "how to help" to find out how to help Antarctica. '
    } else if (response === 'how to help') {
        botResponse = 'Reducing the effects of climate change is one of the best ways to help preserve the Antarctic. Doing simple things everyday like recycling, walking to school/work will help a long way. Type "reset" to start again.'
    }
    // to reset the conversation with bot for user
    else if (response === 'reset') {
        botResponse = 'Resetting the conversation. Do you want to start talking about Wildlife, Pollution or Antarctic first?'
    }
    else {
        // handling other response from user
        addChatMessage("error, check your spelling is correct.");
    }
// bots response added to the chat
    addChatMessage(botResponse);
    scrollToBottom();
}



