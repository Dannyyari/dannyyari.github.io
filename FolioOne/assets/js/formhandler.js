document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const loadingDiv = document.querySelector(".loading");
  const errorDiv = document.querySelector(".error-message");
  const successDiv = document.querySelector(".sent-message");
  const submitBtn = document.querySelector("button[type='submit']");


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
      const response = await fetch("RAILWAYAPI_HÄR", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      hideLoading(); // Glöm inte ta bort loading-indikatorn

      if (response.ok) {
        showSuccess();
        alert("Message sent to backend, thanks!");
        form.reset();
      } else {
        // Försök hämta ett felmeddelande från backend
        const errorText = await response.text();
        showError(errorText || "Something went wrong, please try again.");
      }
    } catch (err) {
      hideLoading();
      console.error(err);
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