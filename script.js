/*
  Add your Google Form URL below when it is ready.
  Example: const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
*/
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScHAlVd_b4VPcho4vr08ycf89wQ2cIwbmgPVLj16aakFigy5g/viewform?usp=publish-editor";

const signupButton = document.getElementById("signup-button");
const formNote = document.getElementById("form-note");

if (GOOGLE_FORM_URL.trim()) {
  signupButton.href = GOOGLE_FORM_URL;
  signupButton.target = "_blank";
  signupButton.rel = "noopener noreferrer";
  formNote.textContent = "Your sign-up form opens securely in a new tab.";
} else {
  signupButton.href = "#signup";
  signupButton.removeAttribute("target");
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    formNote.textContent = "The sign-up form is coming soon. Please check back for the registration link.";
    formNote.classList.add("form-note-highlight");
  });
}

/* Small interaction: update header CTA appearance after scrolling. */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });
