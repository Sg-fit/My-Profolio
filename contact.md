---
layout: base.liquid
title: Contact
description: My contact form. Thanks for your patience filling out. 
permalink: /contact/
---

# Contact

Welcome any form of helpful information. Looking for lab or research opportunity in particular, any high school or perferrably college level program are welcome. (NO COMMERCIAL)

<form id="contact-form" action="https://formspree.io/f/xykrlrog" method="POST">
  <label for="name">
    Name
    <input type="text" id="name" name="name" autocomplete="name" required>
  </label>

  <label for="email">
    Email
    <input type="email" id="email" name="email" autocomplete="email" required>
  </label>

  <label for="message">
    Message
    <textarea id="message" name="message" rows="6" required></textarea>
  </label>

  <!-- Sets the subject line of the email Formspree sends you -->
  <input type="hidden" name="_subject" value="New message from your portfolio">

  <!-- Honeypot: hidden from people, filled in by bots, so Formspree drops it -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <button type="submit" id="contact-submit">Send message</button>
</form>

<p id="contact-error" role="alert" hidden></p>

<section id="contact-elsewhere" hidden>
  <hr>
  <h2>Thanks — message sent</h2>
  <p>I'll get back to you. In the meantime, you can also reach me here:</p>
  <ul>
    <li><strong>Email:</strong> zimuniu7@gmail.com</li>
    <li><strong>GitHub:</strong> <a href="https://github.com/Sg-fit">Sg-fit</a></li>
  </ul>
</section>

<script>
  (function () {
    var form = document.getElementById("contact-form");
    var button = document.getElementById("contact-submit");
    var error = document.getElementById("contact-error");
    var elsewhere = document.getElementById("contact-elsewhere");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      error.hidden = true;
      button.setAttribute("aria-busy", "true");
      button.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            elsewhere.hidden = false;
            var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            elsewhere.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
          } else {
            throw new Error("Formspree rejected the submission");
          }
        })
        .catch(function () {
          error.textContent =
            "Something went wrong sending that. Please email me directly instead.";
          error.hidden = false;
        })
        .finally(function () {
          button.removeAttribute("aria-busy");
          button.disabled = false;
        });
    });
  })();
</script>
