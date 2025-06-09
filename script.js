// ==== SELECTORS ====
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const galleryImages = document.querySelectorAll(".gallery-div img");

// Track current image index
let currentIndex = 0;

// ==== OPEN MODAL FUNCTION ====
function openModal(clickedImage) {
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10); // for fade-in
  modalImg.src = clickedImage.src;
  currentIndex = Array.from(galleryImages).indexOf(clickedImage);
  document.body.style.overflow = "hidden"; // Lock background scroll
}

// ==== CLOSE MODAL FUNCTION ====
function closeModal() {
  modal.classList.remove("active"); // fade-out
  setTimeout(() => {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "auto";
  }, 300); // match CSS transition duration
}

// ==== PREVIOUS IMAGE FUNCTION ====
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImg.classList.add("fade");
  setTimeout(() => {
    modalImg.src = galleryImages[currentIndex].src;
    modalImg.classList.remove("fade");
  }, 150);
}

// ==== NEXT IMAGE FUNCTION ====
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImg.classList.add("fade");
  setTimeout(() => {
    modalImg.src = galleryImages[currentIndex].src;
    modalImg.classList.remove("fade");
  }, 150);
}

// ==== CLOSE ON OUTSIDE CLICK ====
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ==== KEYBOARD NAVIGATION SUPPORT ====
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "none") return;

  switch (e.key) {
    case "ArrowRight":
      nextImage();
      break;
    case "ArrowLeft":
      prevImage();
      break;
    case "Escape":
      closeModal();
      break;
  }
});
