const form = document.querySelector('#form')
const formName = document.querySelector('#name')

const list = document.querySelector('#list')

let emails = []


form.addEventListener('submit', (event) => {
    event.preventDefault()

    let form = event.target
    let input_name = form.elements['name'].value
    let input_email = form.elements['email'].value

    if (!validateName(input_name)) {
        displayErrorMessage("name", "name is not invalid. Minimum length is  3. Maximum length is 20")
        return
    }
    if (!validateEmail(input_email)) {
        displayErrorMessage("email", "email is not valid")
        return
    }
    if (!isEmailAvailable(input_email)) {
        displayErrorMessage("email", "email is not available")
        return
    }

    dismissErrorMessage('name')
    dismissErrorMessage('email')

    emails.push(input_email)

    const li = document.createElement('li')
    li.innerText = `${input_name} ${input_email}`
    list.append(li)


})


const form_name = document.getElementById('name')
form_name.addEventListener('keyup', event => {
    console.log(event.target.value)
    if (!validateName(event.target.value)) {
        displayErrorMessage("name", "name is not invalid. Minimum length is  3. Maximum length is 20")
    } else {
        dismissErrorMessage('name')
    }
})


const form_email = document.getElementById('email')
form_email.addEventListener('keyup', event => {
    if (!validateEmail(event.target.value)) {
        displayErrorMessage("email", "email is not valid")
    } else if (!isEmailAvailable(event.target.value)) {
        displayErrorMessage("email", "email is not available")
    }
    else {
        dismissErrorMessage('email')
    }
})


const validateEmail = email => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return email.match(pattern)
}

const isEmailAvailable = email => {
    return !emails.includes(email)
}

const validateName = name => {
    if ((name.length >= 3) && (name.length < 20)) return true
    return false
}
const displayErrorMessage = (target, error) => {
    console.log(target, error)
    let error_div = document.getElementById(`${target}-error`)
    error_div.innerHTML = error
}

const dismissErrorMessage = target => {
    let error_div = document.getElementById(`${target}-error`)
    error_div.innerHTML = ''
}
