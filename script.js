
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
        addChatMessage(`Hiii, ${userName}! Answer with 'yes' or 'no' for the following. Want to continue?`);
        userInput.placeholder = 'Type "yes" or "no"'; 
    } else {
        handleUserResponse(inputText);
    }

});



function addChatMessage(message) {
    const chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.textContent = message;
    chatContainer.appendChild(chatMessage);
}

function handleUserResponse(response) {
    response = response.toLowerCase();

    if (response === 'yes') {
        addChatMessage('Great! How can I assist you today?');
    } else if (response === 'no') {
        addChatMessage('Okay. If you change your mind, feel free to ask me anything!');
    } else {
        addChatMessage("Sorry, I can only respond to 'yes' or 'no' answers.");
 
    }
}
