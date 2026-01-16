const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("applicationForm");
const sendMail = document.getElementById("sendMail");

// Open modal
openModal.onclick = () => modal.style.display = "flex";

// Close modal
closeModal.onclick = () => modal.style.display = "none";

// Mock submit (JS handling)
form.onsubmit = (e) => {
  e.preventDefault();
  alert("Application sent successfully (mock submission).");
  modal.style.display = "none";
};

// Open default email app
sendMail.onclick = () => {
  const from = document.getElementById("fromEmail").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailtoLink =
    `mailto:admin@example.com?subject=${encodeURIComponent(subject)}
    &body=${encodeURIComponent(message + "\n\nFrom: " + from)}`;

  window.location.href = mailtoLink;
};
