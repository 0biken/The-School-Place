document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');
      
      // Close all first (optional: if you want only one open at a time)
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = null;
      });

      // If it wasn't active, open it
      if (!isActive) {
        question.classList.add('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Pre-select subject in booking wizard when clicking a subject card link
  const subjectLinks = document.querySelectorAll('.subject-link');

  subjectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const subject = e.target.closest('.subject-card').getAttribute('data-subject');
      if (subject) {
        const radio = document.querySelector(`input[name="subject"][value="${subject}"]`);
        if (radio) radio.checked = true;
      }
    });
  });

  // Wizard Logic
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  const btnNextList = document.querySelectorAll('.btn-next');
  const btnPrevList = document.querySelectorAll('.btn-prev');
  const bookingForm = document.getElementById('booking-form');

  let currentStep = 1;

  function updateWizard() {
    wizardSteps.forEach(step => {
      if (parseInt(step.getAttribute('data-step')) === currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    progressSteps.forEach(step => {
      if (parseInt(step.getAttribute('data-step')) <= currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  function validateStep(stepNumber) {
    if (stepNumber === 1) {
      const subject = document.querySelector('input[name="subject"]:checked');
      if (!subject) {
        alert('Please select a subject.');
        return false;
      }
    }
    if (stepNumber === 2) {
      const level = document.querySelector('input[name="level"]:checked');
      if (!level) {
        alert('Please select a level.');
        return false;
      }
    }
    return true;
  }

  btnNextList.forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        currentStep++;
        updateWizard();
      }
    });
  });

  btnPrevList.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep--;
      updateWizard();
    });
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(bookingForm);
      const name = formData.get('name');
      const subject = formData.get('subject');
      const level = formData.get('level');
      const contact = formData.get('contact');
      const message = formData.get('message');
      
      // For V1, redirect to WhatsApp with a pre-filled message
      const waNumber = '1234567890';
      const text = `Hi, I'm interested in booking a consultation.\n\nName: ${name}\nSubject: ${subject}\nLevel: ${level}\nContact: ${contact}\nMessage: ${message}`;
      
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      
      // Reset form and go back to step 1
      bookingForm.reset();
      currentStep = 1;
      updateWizard();
      
      // Show simple feedback
      alert('Redirecting to WhatsApp to send your request!');
    });
  }

  // Scroll Animations Observer (Emil-style reveals)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  // Respect user's reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (!prefersReducedMotion.matches && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once revealed, no need to observe again (one-time animation)
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
      threshold: 0.1
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion is enabled, just make them all visible immediately
    revealElements.forEach(el => {
      el.classList.add('is-visible');
    });
  }
});
