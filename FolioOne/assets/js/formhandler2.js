document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const loadingDiv = document.querySelector(".loading");
  const errorDiv = document.querySelector(".error-message");
  const successDiv = document.querySelector(".sent-message");

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
      console.log("Sending to:", "https://backenddannysportfolio-production.up.railway.app/api/contact");
      
      // KOPIERA DENNA EXAKTA RAD
      const response = await fetch("https://backenddannysportfolio-production.up.railway.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      console.log("Response status:", response.status);
      hideLoading();

      if (response.ok) {
        console.log("sending to backend was successful");
        showSuccess();
        form.reset();
      } else {
        const errorText = await response.text();
        showError(errorText || "Something went wrong, please try again.");
      }
    } catch (err) {
      hideLoading();
      console.error("Fetch error:", err);
      showError("Could not connect to server");
    }
  });

  function showLoading() {
    loadingDiv.style.display = "block";
    errorDiv.style.display = "none";
    successDiv.style.display = "none";
  }

  function hideLoading() {
    loadingDiv.style.display = "none";
  }

  function showError(msg) {
    errorDiv.textContent = msg;
    errorDiv.style.display = "block";
    successDiv.style.display = "none";
  }

  function showSuccess() {
    successDiv.style.display = "block";
    errorDiv.style.display = "none";
  }
});