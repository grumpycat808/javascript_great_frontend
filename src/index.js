async function submitForm(username, email, password, passwordConfirm) {
    try {
        const response = await fetch(
            'https://www.greatfrontend.com/api/questions/sign-up',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirm: passwordConfirm,
                }),
            },
        )

        const { message } = await response.json()
        alert(message)
    } catch (_) {
        alert('Error submitting form!')
    }
}


const usernameInput = document.querySelector('input[name="username"]')
const email = document.querySelector('input[name="email"]')
const pw = document.querySelector('input[name="password"]')
const confirmPw = document.querySelector('input[name="confirm_pw"]')
const submitBtn = document.getElementById('submit')
usernameInput.addEventListener('change', (event) => {
    // console.log("Input changed to:", event.target.value);
})

const formElement = document.querySelector('form')
submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(usernameInput.value)
})

const validUsername = (username) => {
    return username.length >= 4 && /^[a-zA-Z0-9]+$/.test(username);
}

const validEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const pwMatch = (pw, confirmPw) => pw == confirmPw;
const validateForm = () => {
    
}