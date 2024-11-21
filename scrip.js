// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demo purposes
  
    // Get form values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
  
    // Simple validation
    if (name === '' || email === '') {
      alert('Harap isi semua field dengan benar!');
      return;
    }
  
    // Email validation (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Harap masukkan alamat email yang valid!');
      return;
    }
  
    // Success message
    alert(`Terima kasih telah mendaftar, ${name}! Kami akan menghubungi Anda melalui email: ${email}`);
    form.reset(); // Reset form fields
  });
  
  // Navbar Active State on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
  // Scroll to Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '⬆️';
  scrollToTopBtn.style.position = 'fixed';
  scrollToTopBtn.style.bottom = '20px';
  scrollToTopBtn.style.right = '20px';
  scrollToTopBtn.style.backgroundColor = '#007bff';
  scrollToTopBtn.style.color = 'white';
  scrollToTopBtn.style.border = 'none';
  scrollToTopBtn.style.borderRadius = '50%';
  scrollToTopBtn.style.padding = '10px 15px';
  scrollToTopBtn.style.cursor = 'pointer';
  scrollToTopBtn.style.display = 'none';
  scrollToTopBtn.style.zIndex = '1000';
  document.body.appendChild(scrollToTopBtn);
  
  // Show/Hide Scroll to Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to Top Functionality
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // Dynamic Year in Footer
  const yearSpan = document.createElement('span');
  yearSpan.textContent = new Date().getFullYear();
  document.querySelector('footer p').appendChild(yearSpan);
  