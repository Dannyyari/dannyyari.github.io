const form = document.getElementById('contactForm');

from.addEventListener('submit', async function(event){
    event.preventDefault();

    const status = document.querySelector(".sent-message");
    const error = document.querySelector(".error-message");
    const loading = document.querySelector(".loading");
    const button = document.querySelector("button[type='submit']");

    loading.style.display = "block";
    button.style.display = "none";
    status.style.display = "none";
    error.style.display = "none";

    const data = new FormData(event.target);

    fetch (event.target.action, {
        method: from.method,
        body: data,
        headers: {'Accept': 'application/json'
        }
    }).then(response=> {
        loading.style.display = "none";
        if (response.ok) {
            status.style.display = "block";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    error.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    error.innerHTML = "Oops! Something went wrong.";
                }
                error.style.display = "block";
                button.style.display = "block";
            })
        }
    }).catch(error => {
        loading.style.display = "none";
        error.innerHTML = "Oops! There was a problem submitting your form";
        error.style.display = "block";
        button.style.display = "block";
    });
});
