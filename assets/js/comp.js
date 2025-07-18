
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero").innerHTML = data;
            document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Form ko actual submit hone se roko

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    const subject = `New Consultation Request from ${name}`;
    const body = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Interested In: ${service}`;

    // Gmail compose link
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to= enquiry@evosalchemy.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose in new tab
    window.open(gmailURL, "_blank");
  });
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/about.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("about").innerHTML = data;
          const videoContainer = document.querySelector('.video-container');
      const video = videoContainer.querySelector('video');
      
      // Try intersection observer first
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              videoContainer.classList.add('visible');
              video.play().catch(e => console.log('Autoplay prevented:', e));
            } else {
              video.pause();
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe(videoContainer);
      } else {
        // Fallback for older browsers
        videoContainer.classList.add('visible');
        video.play().catch(e => console.log('Autoplay prevented:', e));
      }
      
      // Ensure video loops properly
      video.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      });
        })
        .catch(error => console.error("Error loading the header:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/property.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("property").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/top.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("top").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/about2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("about2").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/facilities.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("facilities").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/banner.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("banner").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});




document.addEventListener("DOMContentLoaded", function () {
  fetch("components/pop.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("pop").innerHTML = data;

      const infoModal = document.getElementById("infoModal");
      const appContent = document.getElementById("app-content");
      const closeBtn = document.querySelector(".close-btn");

      // Function to close modal
      function closeModal() {
        infoModal.classList.remove("show");
        if (appContent) appContent.classList.remove("blurred");
      }

      // Function to show modal
      function showModal() {
        if (infoModal) {
          infoModal.classList.add("show");
          if (appContent) appContent.classList.add("blurred");
        }
      }

      // Show popup on first load after small delay
      setTimeout(() => {
        showModal();
      }, 100);

      // Attach close button
      if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
      }

      // Close if clicked outside modal content
      infoModal.addEventListener("click", function (event) {
        if (event.target === infoModal) {
          closeModal();
        }
      });

       // ✅ Manual trigger function
    window.showPopup = function () {
      infoModal.classList.add("show");
      appContent.classList.add("blurred");
    };
    })
    .catch(error => console.error("Error loading the popup:", error));
});

