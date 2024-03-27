const form = document.querySelector('#form')
const myName = document.querySelector('#name')
const myEmail = document.querySelector('#email')
const list = document.querySelector('#list')
const button = document.querySelector('#submit-button')

// addEventListener
// preventDefault
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const li = document.createElement('li')
    li.innerText = `${myName.value} (${myEmail.value})`

    list.append(li)
    myName.value = ''
    myEmail.value = ''
})
