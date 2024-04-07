const pwd = document.querySelector('#pwd')
const verifyPwd = document.querySelector('#verify-pwd')
const spanPwd = document.querySelector('.match-pwd')

function matchingPwd() {

    if (pwd.value === '' && verifyPwd.value === '') {
        spanPwd.textContent = ''
    } else if (pwd.value === verifyPwd.value) {
        spanPwd.style.color = "green"
        spanPwd.textContent = "Passwords match"
    } else {
        spanPwd.style.color = "red"
        spanPwd.textContent = "Passwords do not match" 
    } 
}
matchingPwd()

verifyPwd.addEventListener('keyup', matchingPwd)
pwd.addEventListener('keyup', matchingPwd)
    
