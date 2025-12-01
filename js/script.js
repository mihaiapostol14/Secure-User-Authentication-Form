const ButtonEye = document.querySelector('.eye')
const PasswordInput = document.querySelector('.password')

ButtonEye.addEventListener('click', () => {
  if (PasswordInput.type === 'password') {
    PasswordInput.type = 'text'
    ButtonEye.classList.replace('fa-eye-slash', 'fa-eye')
    // console.log(ButtonEye)
  } else {
    PasswordInput.type = 'password'
    ButtonEye.classList.replace('fa-eye', 'fa-eye-slash')
    // console.log(ButtonEye)
  }
})
