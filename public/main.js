const savedContainer = document.querySelector('#saved-container')
const button = document.querySelector('#eightball')

const baseURL = `http://localhost:5500/`

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

    savedCard.innerHTML = `<h2 class="user-question" id="userQuestionSaved" style="color: #084c61">Q: ${userQuestion.value}</h2>
    <h2 class="eightball-respose" id="eightballResponseSaved" style="color: #084c61">A: ${eightballResponse.value}</h2>`

    if (userQuestion.value.length === 0) {
        
    } else {
        savedContainer.appendChild(savedCard)
    }
}

function createResponse() {

    let userQuestion = document.querySelector('#userQuestion')
    let eightballResponse = document.querySelector('#eightballResponse')

    let responses = [
        'It is certain.',
        'Without a doubt.',
        'You may rely on it.',
        'Yes definitely.',
        'It is decidedly so.',
        'As I see it, yes.',
        'Most likely.',
        'Yes',
        'Outlook good.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Better not tell you now.',
        'Ask again later.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        `Don't count on it.`,
        'Outlook not so good.',
        'My sources say no.',
        'Very doubtful.',
        'My reply is no.'
    ]

    let randomIndex = Math.floor(Math.random() * responses.length)
    window.randomResponse = responses[randomIndex]

    if (userQuestion.value.length == 0) {
        alert('You need to at least ask a question...')
    } else {
        eightballResponse.value = randomResponse
    }
}

function displaySaved(arr) {
    savedContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSavedCard(arr[i])
    }
}

function inputClear() {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById('userQuestion').value = '';
            document.getElementById('eightballResponse').value = '';
            resolve('resolved');
        }, 1000);
    });
}

document.addEventListener('submit', submitHandler)
button.addEventListener('click', createResponse)
button.addEventListener('click', createSavedCard)

button.addEventListener('click', inputClear)