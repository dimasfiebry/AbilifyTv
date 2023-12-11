var users = [
    { name: "Arif", avatar: "../img/foto1.png", responses: generateAutoReplyMessages("Arif") },
    { name: "Dipta", avatar: "../img/foto2.png", responses: generateAutoReplyMessages("Dipta") },
    { name: "Bowo", avatar: "../img/foto3.png", responses: generateAutoReplyMessages("Bowo") },
    { name: "Dimas", avatar: "../img/foto4.png", responses: generateAutoReplyMessages("Dimas") },
    { name: "Naela", avatar: "../img/foto5.png", responses: generateAutoReplyMessages("Naela") }
];

var currentUserIndex = 0;
var chatMessages = document.getElementById('chat-messages');

// Menambahkan event listener untuk tombol Enter
document.getElementById('message').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById('message');
    var message = messageInput.value.trim();
    var currentUser = users[currentUserIndex];

    if (message !== '') {
        var messageContainer = document.createElement('div');
        messageContainer.className = 'message-container current-user';

        var senderDetails = document.createElement('div');
        senderDetails.className = 'sender-details';

        var senderAvatar = document.createElement('img');
        senderAvatar.src = currentUser.avatar;
        senderAvatar.alt = 'User Avatar';
        senderAvatar.className = 'sender-avatar';
        senderDetails.appendChild(senderAvatar);

        var senderName = document.createElement('div');
        senderName.textContent = currentUser.name;
        senderName.className = 'sender-name';
        senderDetails.appendChild(senderName);

        messageContainer.appendChild(senderDetails);

        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.className = 'message';
        messageContainer.appendChild(newMessage);

        chatMessages.appendChild(messageContainer);

        var autoReplyMessages = generateAutoReplyMessages(getOtherUser().name);
        sendAutoReplyMessages(autoReplyMessages);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        currentUserIndex = (currentUserIndex + 1) % users.length;
    }
}

function sendAutoReplyMessages(messages) {
    messages.forEach(function(autoReply, index) {
        setTimeout(function() {
            var autoReplyContainer = document.createElement('div');
            autoReplyContainer.className = 'message-container other-user';

            var autoReplyDetails = document.createElement('div');
            autoReplyDetails.className = 'sender-details';

            var autoReplyAvatar = document.createElement('img');
            autoReplyAvatar.src = getOtherUser().avatar;
            autoReplyAvatar.alt = 'User Avatar';
            autoReplyAvatar.className = 'sender-avatar';
            autoReplyDetails.appendChild(autoReplyAvatar);

            var autoReplySenderName = document.createElement('div');
            autoReplySenderName.textContent = getOtherUser().name;
            autoReplySenderName.className = 'sender-name';
            autoReplyDetails.appendChild(autoReplySenderName);

            autoReplyContainer.appendChild(autoReplyDetails);

            var autoReplyMessage = document.createElement('div');
            autoReplyMessage.textContent = autoReply;
            autoReplyMessage.className = 'message';
            autoReplyContainer.appendChild(autoReplyMessage);

            chatMessages.appendChild(autoReplyContainer);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, (index + 1) * 1000);
    });
}

function generateAutoReplyMessages(sender) {
    return [
        "Hallo, selamat datang di ABILIFY, " + sender + "!",
        "Saya akan membantu sebisa mungkin, " + sender + ".",
        // "Ada yang bisa saya bantu, " + sender + "?",
        // "Menarik, " + sender + "!",
        // "Saya akan cek untuk Anda, " + sender + "."
    ];
}

function getOtherUser() {
    return users[(currentUserIndex + 0) % users.length];
}

function goToHome() {
    // Gantilah "URL_HALAMAN_TUJUAN" dengan URL yang ingin Anda arahkan
    var urlHalamanTujuan = "../social.html"; 

    // Mengarahkan pengguna ke halaman tujuan
    window.location.href = urlHalamanTujuan;
}