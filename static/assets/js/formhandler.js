document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      };

      try {
        const result = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (result.ok) {
          alert("Message sent to backend, thanks!");
          form.reset();
        } else {
          alert("Something went wrong, please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Could not connect to server");
      }
    });
  }
});