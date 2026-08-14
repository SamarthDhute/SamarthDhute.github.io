/**
 * Samarth Dhute Portfolio - Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Scroll Handler
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for active section
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Skills Filtering System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Copy to Clipboard with Toast Notification
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(err => {
      showToast(`Failed to copy: ${err}`);
    });
  };

  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  // Project Details Modal Data
  const projectDetails = {
    hireflow: {
      title: "HireFlow – Job Portal Web Application",
      badge: "Full-Stack • Enterprise Architecture",
      subtitle: "Java • Spring Boot • PostgreSQL • Docker • Redis",
      desc: "HireFlow is a robust, full-stack recruitment platform designed to connect Job Seekers, Employers, and System Administrators with secure role-based access control and high-performance workflows.",
      features: [
        "Multi-Role Architecture: Dedicated workflows for Job Seekers (search, apply, status tracking), Employers (job posting, applicant review), and Admins.",
        "RESTful API Suite: Engineered using Spring Boot, Spring Web MVC, and Spring Data JPA / Hibernate.",
        "Role-Based Security: Implemented BCrypt password hashing and Spring Security with JWT tokens for safe API endpoints.",
        "High Performance Caching: Integrated Redis caching layer to eliminate repetitive database hits and speed up frequent queries.",
        "Data Model & Relations: Complex relational mapping in PostgreSQL covering users, jobs, application states, and categories.",
        "Cloud & Container Readiness: Fully containerized application stack using Docker and Docker Compose."
      ],
      tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST API", "PostgreSQL", "Maven", "Docker", "Redis", "BCrypt", "JWT"]
    },
    staffdesk: {
      title: "StaffDesk – Employee Management System",
      badge: "Full-Stack • React + Spring Boot",
      subtitle: "Java • Spring Boot • React.js • MySQL • Spring Security",
      desc: "StaffDesk is an enterprise-grade employee and workflow management application designed for streamlined organizational tracking, department categorization, and administrative controls.",
      features: [
        "Modern Responsive Frontend: Developed with React.js using modular component architecture, state management, and custom CSS.",
        "Spring Boot Backend Microservice: Secure RESTful APIs exposing granular CRUD operations for staff records.",
        "JWT Security Layer: Secure login authentication, token refresh, and authorization filter interceptors.",
        "MySQL Relational Storage: Normalized schema design with indexed foreign keys for department and role lookups.",
        "API Testing & Documentation: Tested and documented using Postman collections and Swagger UI."
      ],
      tech: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Security", "JWT", "REST API", "Postman", "Swagger", "Maven"]
    }
  };

  // Modal Control Functions
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  window.openProjectModal = function(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="project-badge" style="display:inline-block; margin-bottom: 0.75rem;">${data.badge}</div>
      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${data.title}</h2>
      <p style="color: var(--accent-cyan); font-family: var(--font-code); font-size: 0.9rem; margin-bottom: 1.5rem;">${data.subtitle}</p>
      <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.75rem;">${data.desc}</p>
      
      <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-primary);">Key Architectural Highlights</h3>
      <ul style="list-style: none; margin-bottom: 2rem;">
        ${data.features.map(f => `
          <li style="margin-bottom: 0.75rem; font-size: 0.95rem; color: var(--text-muted); display: flex; gap: 0.75rem;">
            <i class="fa-solid fa-circle-check" style="color: var(--accent-primary); margin-top: 0.25rem;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <h3 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Technologies & Tools</h3>
      <div class="tech-tags" style="margin-bottom: 2rem;">
        ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <a href="https://github.com/SamarthDhute" target="_blank" class="btn btn-primary">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
        <button class="btn btn-secondary" onclick="closeModal()">Close Details</button>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Thank you! Your message has been sent to Samarth Dhute.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }
});
