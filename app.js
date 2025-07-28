document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#registration-form");
  if (!form) return;

  const messageBox = document.createElement("div");
  messageBox.id = "form-success-message";
  messageBox.style.color = "green";
  messageBox.style.marginTop = "10px";
  form.parentNode.insertBefore(messageBox, form.nextSibling);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    messageBox.textContent = "✅ Registration successful!";

    // Reset form fields to allow re-entry
    form.reset();
  });
});
