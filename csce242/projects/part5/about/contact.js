const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    data.append("access_key", "4ac60f86-4b80-4e12-9bdd-4820f3d033fa");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data
        });

        const result = await response.json();

        if (response.ok && result.success) {
            message.textContent = "Message sent successfully!";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Message could not be sent.";
            message.style.color = "red";
        }
    } catch (error) {
        message.textContent = "Something went wrong. Try again.";
        message.style.color = "red";
    }

    setTimeout(() => {
        message.textContent = "";
    }, 1000);
});