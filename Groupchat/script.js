/*
Das Folgende ist dafür da, damit die Funktionen wie das senden einer Nachricht, das aktualisieren des Chats, 
das Schließen des Fensters und das Scrollen des Fensters funktionieren. 
TODO: Es muss noch implementiert werden, dass die Hompage wieder erscheint, wenn das Fenster geschlossen wird.
Wichtig: Man kann Nachrichten senden, doch diese werden nicht abgespeichert. Bei erneuter Öffnung des Chats
wird der Chatverlauf wieder auf dem ursprünglichem Stand sein.  
*/
document.querySelector('.send-button').addEventListener('click', function() {
    const messageInput = document.querySelector('.input-field');
    const messageText = messageInput.value;
    
    if (messageText) {
        const chatWindow = document.querySelector('.chat-window');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `
            <div class="message-user">Ich:</div> 
            <div class="message-text">${messageText}</div>
        `;
        chatWindow.appendChild(newMessage);
        messageInput.value = ''; 
        chatWindow.scrollTop = chatWindow.scrollHeight; 
    }
});
document.getElementById('closeButton').addEventListener('click', function() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = 'none'; 
});