function checkCertificate() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value.trim();

  const result = document.getElementById("result");
  const spinner = document.getElementById("spinner");

  result.innerHTML = "";
  spinner.classList.remove("hidden");

  setTimeout(() => {
    spinner.classList.add("hidden");

    // Dummy success case
    if (
      name.toLowerCase() === "debottam" &&
      email === "debottam2004@gmail.com" &&
      course.toLowerCase() === "web development"
    ) {
      result.innerHTML = `
        <h4 class="text-success mb-3">✅ Certificate Verified</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${course}</p>
        <a class="btn btn-outline-primary mt-3" href="https://example.com/certificate.pdf" target="_blank">View Certificate</a>
      `;
    } else {
      showToast("❌ Certificate not found. Please check your inputs.");
    }
  }, 1500);
}

function showToast(message) {
  const toastEl = document.getElementById("liveToast");
  const toastBody = toastEl.querySelector(".toast-body");
  toastBody.textContent = message;

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
