document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const loadingDiv = document.querySelector(".loading");
  const errorDiv = document.querySelector(".error-message");
  const successDiv = document.querySelector(".sent-message");
  const submitBtn = document.querySelector("button[type='submit']");

  // Hide all messages initially
  if (loadingDiv) loadingDiv.style.display = "none";
  if (errorDiv) errorDiv.style.display = "none";
  if (successDiv) successDiv.style.display = "none";

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

       showLoading();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      };
      console.log("Form data being sent:", formData);
      try {
        console.log("About to send fetch request...");

        const result = await fetch("https://python-flask-devops.netlify.app/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        console.log("Fetch completed, status:", result.status)
        if (result.ok) {
          showSuccess();
          alert("Message sent to backend, thanks!");
          form.reset();
        } else {
          alert("Something went wrong, please try again.");
          console.log("ERROR: Form with ID 'contactForm' not found!");
          showError("Something went wrong, please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Could not connect to server");
      }
    });
  }

  function showLoading() {
    hideAllMessages();
    if (loadingDiv) loadingDiv.style.display = "block";
    if (submitBtn) submitBtn.disabled = true;
  }

  function showSuccess() {
    hideAllMessages();
    if (successDiv) successDiv.style.display = "block";
    if (submitBtn) submitBtn.disabled = false;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      if (successDiv) successDiv.style.display = "none";
    }, 5000);
  }

  function showError(message) {
    hideAllMessages();
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = "block";
    }
    if (submitBtn) submitBtn.disabled = false;
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      if (errorDiv) errorDiv.style.display = "none";
    }, 5000);
  }

  function hideAllMessages() {
    if (loadingDiv) loadingDiv.style.display = "none";
    if (errorDiv) errorDiv.style.display = "none";
    if (successDiv) successDiv.style.display = "none";
  }

});