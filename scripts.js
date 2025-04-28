function bookNow() {
  alert("Thank you for booking with Hostel Joumana! We will contact you soon.");
}

function openLightbox(imgSrc) {
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Slider functionality
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.gallery-container img');
  slides.forEach((img, i) => {
    img.style.display = i === index ? 'inline-block' : 'none';
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.gallery-container img');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll('.gallery-container img');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-container img');
  if (slides.length > 0) {
    showSlide(currentSlide);

    slides.forEach(img => {
      img.addEventListener('dblclick', () => openLightbox(img.src));
      img.addEventListener('click', () => openLightbox(img.src));
    });

    const gallery = document.querySelector('.gallery-container');

    // Remove existing buttons if any
    const existingPrev = document.querySelector('.gallery-container-prev');
    const existingNext = document.querySelector('.gallery-container-next');
    if (existingPrev) existingPrev.remove();
    if (existingNext) existingNext.remove();

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.className = 'gallery-container-prev';
    prevBtn.onclick = prevSlide;

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.className = 'gallery-container-next';
    nextBtn.onclick = nextSlide;

    gallery.appendChild(prevBtn);
    gallery.appendChild(nextBtn);
  }
});
