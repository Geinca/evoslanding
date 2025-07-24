const infoModal = document.getElementById("infoModal");
const appContent = document.getElementById("app-content");
const contactForm = document.getElementById("contactForm");

// This ensures the modal appears shortly after the page loads
window.onload = function () {
    setTimeout(() => {
        infoModal.classList.add("show");
        appContent.classList.add("blurred");
    }, 100);
};

// Function to close the modal
function closeModal() {
    infoModal.classList.remove("show");
    appContent.classList.remove("blurred");
}

// Function to show the modal (for button click)
function showPopup() {
    infoModal.classList.add("show");
    appContent.classList.add("blurred");
}

// Close modal when clicking outside the modal content
infoModal.addEventListener('click', function(event) {
    if (event.target === infoModal) {
        closeModal();
    }
});

// Form submission logic
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    const subject = `New Consultation Request from ${name}`;
    const body = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Interested In: ${service}`;

    // Gmail compose link
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=enquiry@evosalchemy.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose in new tab
    window.open(gmailURL, "_blank");

    // Optionally, close the modal after submission
    closeModal();
});