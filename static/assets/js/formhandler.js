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
          alert("Meddelandet skickat till backend!");
          form.reset();
        } else {
          alert("Något gick fel. Försök igen.");
        }
      } catch (err) {
        console.error(err);
        alert("Kunde inte nå servern.");
      }
    });
  }
});