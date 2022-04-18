// const { default: axios } = require("axios")

const savedContainer = document.querySelector('#saved-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:5500`

const savedCallBack = ({ data: saved }) => displaySaved(saved)
const errCallBack = err => console.log(err)

const getAllSaved = () => axios.get(baseURL).then(savedCallBack).catch(errCallBack)
const createSaved = body => axios.post(baseURL, body).then(savedCallBack).catch(errCallBack)

function submitHandler(e) {
    e.preventDefault()

    let userQuestion = document.querySelector('#userQuestion')
    let eightballResponse = document.querySelector('#eightballResponse')

    let bodyObj = {
        userQuestion: userQuestion.value,
        eightballResponse: eightballResponse.value
    }

    createSaved(bodyObj)

    userQuestion.value = ''
    eightballResponse.value = ''
}

function createSavedCard(saved) {
    const savedCard = document.createElement('div')
    savedCard.classList.add('saved-card')

    savedCard.innerHTML = `<li class="user-question" id="userQuestion">Q: ${saved.userQuestion}</li>
    <li class="eightball-respose" id="eightballResponse">A: ${saved.eightballResponse}</li>`

    savedContainer.appendChild(savedCard)
}

function createRepsonse() {

    let userQuestion = document.querySelector('#userQuestion')

    let eightballResponse = document.querySelector('#eightballResponse')

    let responses = {
        1: 'It is certain.',
        2: 'Without a doubt.',
        3: 'You may rely on it.',
        4: 'Yes definitely.',
        5: 'It is decidely so.',
        6: 'As I see it, yes.',
        7: 'Most likely.',
        8: 'Yes',
        9: 'Outlook good.',
        10: 'Signs point to yes.',
        11: 'Reply hazy, try again.',
        12: 'Better not tell you now.',
        13: 'Ask again later.',
        14: 'Cannot predict now.',
        15: 'Concentrate and ask again.',
        16: `Don't count on it.`,
        17: 'Outlook not so good.',
        18: 'My sources say no.',
        19: 'Very doubtful.',
        20: 'My reply is no.'
    }

    if (userQuestion != '') {
        alert('You need to at least ask a question first...')
    } else {
        eightballResponse = Math.random(responses)
    }
}

function displaySaved(arr) {
    savedContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSavedCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
document.addEventListener('onclick', createRepsonse)

getAllSaved()