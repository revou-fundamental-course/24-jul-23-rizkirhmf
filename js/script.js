const slides = ["image1.jpg", "image2.jpg", "image3.jpg"];

let currentSlide = 1;
const slideImage = document.getElementById("slideshow");

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    const slidePath = "assets/hand-holding-loupe-traveller-table.jpg" + slides[currentSlide];
    slideImage.src = slidePath;
    const slidePath = "assets/flat-lay-hands-holding-photos.jpg" + slides[currentSlide];
    slideImage.src = slidePath;
    
}

setInterval(changeSlide, 5000);

  function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');
  
    // Validasi Nama
    if (nameInput.value.trim() === '') {
      alert('Please Enter Your Name!');
      nameInput.focus();
      return false;
    }
  
    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please Enter Correct Email!');
      emailInput.focus();
      return false;
    }
  
    // Validasi Destination
    if (interestSelect.value === '') {
      alert('Please Select the Destination!');
      interestSelect.focus();
      return false;
    }
  
    // Jika semua validasi berhasil, form akan dikirimkan
    return true;
  }
// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Fungsi untuk menutup menu saat link pada menu di-klik
const menuLinks = document.querySelectorAll(".menu li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
  });
});