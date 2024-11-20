const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentIndex = 0;

// Show lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(item);
  });
});

function showLightbox(item) {
  const img = item.querySelector('img');
  lightboxImage.src = img.src;
  lightboxCaption.textContent = item.dataset.caption;
  lightbox.classList.remove('hidden');
}

// Close lightbox
lightboxClose.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Navigate to next/previous image
lightboxNext.addEventListener('click', () => navigateLightbox(1));
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
  const nextItem = galleryItems[currentIndex];
  showLightbox(nextItem);
}

// Close lightbox on click outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});
