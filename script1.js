const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch("/submit-form.php", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (result.success) {
    status.className = "success";
    status.innerHTML = "Message sent!";
    form.reset();
  } else {
    status.className = "error";
    status.innerHTML = "There was an error sending the message.";
  }
});
