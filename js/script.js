//Validasi Nama

if (nameInput.value.trim() === '') {
    alert('Please Enter Your Name.');
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