
// // Check if user is logged in
// if (localStorage.getItem('isLoggedIn') !== 'true') {
//     window.location.href = './login.html';
// }

// // Chat functionality
// function getTime() {
//     const now = new Date();
//     return now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
// }

// const chatInput = document.getElementById('chatInput');
// const sendBtn = document.getElementById('sendBtn');
// const chatMessages = document.getElementById('chatMessages');

// sendBtn.addEventListener('click', sendMessage);
// chatInput.addEventListener('keypress', function(e){
//     if(e.key === 'Enter') sendMessage();
// });

// function sendMessage() {
//     const messageText = chatInput.value.trim();
//     if (!messageText) return;

//     const newMessage = document.createElement('div');
//     newMessage.classList.add('message', 'user-message');
    
//     const text = document.createElement('div');
//     text.textContent = messageText;

//     const time = document.createElement('div');
//     time.classList.add('message-time');
//     time.textContent = getTime();

//     newMessage.appendChild(text);
//     newMessage.appendChild(time);

//     chatMessages.appendChild(newMessage);
//     chatInput.value = '';
//     chatMessages.scrollTop = chatMessages.scrollHeight;

//     // Auto-reply demo
//     // setTimeout(() => {
//     //     const reply = document.createElement('div');
//     //     reply.classList.add('message', 'admin-message');
//     //     reply.textContent = " আপনার মেসেজ পেয়েছি। আমাদের admin এর পক্ষ থেকে খুব তাড়াতাড়ি আপনার সাথে যোগাযোগ করা হবে, ধন্যবাদ আমাদের পাশে থাকার জন্য";
//     //     chatMessages.appendChild(reply);
//     //     chatMessages.scrollTop = chatMessages.scrollHeight;
//     // }, 1000);
// }

// Broker selection and modal
// const selectBtns = document.querySelectorAll('.select-btn');
// selectBtns.forEach(btn => {
//     btn.addEventListener('click', function(){
//         if (this.classList.contains('selected')) return;

//         // Unselect other brokers
//         selectBtns.forEach(b => b.classList.remove('selected'));
//         this.classList.add('selected');
//         this.textContent = 'Selected ✓';
//         alert(`Broker ${this.getAttribute('data-name')} সফলভাবে নির্বাচিত হয়েছে!`);
//     });
// });



