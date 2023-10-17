
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
let userName = '';

submitButton.addEventListener('click', () => {
    const inputText = userInput.value.trim();
    userInput.value = ''; 
    if (!userName) {
        
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

function addChatMessage(message) {
    const chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.textContent = message;
    chatContainer.appendChild(chatMessage);
}

function handleUserResponse(response) {
    response = response.toLowerCase();

     let botResponse;

    if (response === 'wildlife') {
        addChatMessage('Did you know that many different species right now like tigers and elephants are currently losing their homes and source to food? Type yes to continue...');
    } else if (response.includes('yes')) {
        botResponse = "";
    }
    else if (response === 'pollution') {
        addChatMessage('Did you know in 2022 that 66 million tons of waste and rubbish and other polluted products were effused from the US? Type okay to continue...');
    } else if (response === 'antarctic') {
        addChatMessage('Did you know that in Antartica has lost 150 billion metric tons of ice from 2002-2023? Type ok to continue...')
    }
    else {
        addChatMessage("error, please check your spelling is correct");
    }

    addChatMessage(botResponse);
    scrollToBottom();
}
