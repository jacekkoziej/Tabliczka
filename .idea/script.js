const startSimpleButton = document.getElementById('start-simple-btn')
const startNormalButton = document.getElementById('start-normal-btn')
const startHardButton = document.getElementById('start-hard-btn')

const questionContainer = document.getElementById('question-container')
const confirmButton = document.getElementById('confirm-btn')
const points = document.getElementById('points')
const timer = document.getElementById('timer')
const question = document.getElementById('question')
var answer = document.getElementById('answer')
//aktualna liczba rozegranych gier
let gamesNumber = 1
startSimpleButton.addEventListener('click', startSimpleGame)
startNormalButton.addEventListener('click', startNormalGame)
startHardButton.addEventListener('click', startHardGame)
//zmienna helper mówi o tym, który rodzaj gry należy wywołać w funkcji validate 1-simple, 2-normal, 3-hard
let helper
//całkowita liczba gier
let gamesCount
confirmButton.addEventListener('click', validate)
let liczba1 = Math.floor(Math.random() * 9) + 1
let liczba2 = Math.floor(Math.random() * 9) + 1
let iloczyn = liczba1 * liczba2
let punkty = 0
//pozostały czas
var downloadTimer

function startSimpleGame() {
    document.getElementById("progressBar2").classList.add('hide')
    document.getElementById("progressBar3").classList.add('hide')
    helper = 1
    gamesCount = 10
    var timeleft = 15
    clearInterval(downloadTimer)
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert("Czas minął")
            if (gamesNumber == gamesCount) {
                alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
                window.location.reload(true)
            } else
                gamesNumber++
            startSimpleGame()
        }
        document.getElementById("progressBar1").value = 15 - timeleft
        timeleft -= 1
    }, 1000)
    liczba1 = Math.floor(Math.random() * 9) + 1
    liczba2 = Math.floor(Math.random() * 9) + 1
    iloczyn = liczba2 * liczba1
    hideStartMenu();
    let question = document.getElementById('question')
    question.innerText = "Ile to jest...\n\n" + liczba1 + " * " + liczba2
    points.innerText = "Ilość punktów: " + punkty
}

function startNormalGame() {
    helper = 2
    gamesCount = 15
    document.getElementById("progressBar1").classList.add('hide')
    document.getElementById("progressBar3").classList.add('hide')
    var timeleft = 10
    clearInterval(downloadTimer)
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert("Czas minął")
            if (gamesNumber == gamesCount) {
                alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
                window.location.reload(true)
            } else
                gamesNumber++
            startNormalGame()
        }
        document.getElementById("progressBar2").value = 10 - timeleft
        timeleft -= 1
    }, 1000)
    liczba1 = Math.floor(Math.random() * 9) + 1
    liczba2 = Math.floor(Math.random() * 9) + 1
    iloczyn = liczba2 * liczba1
    hideStartMenu();
    let question = document.getElementById('question')
    question.innerText = "Ile to jest...\n\n" + liczba1 + " * " + liczba2
    points.innerText = "Ilość punktów: " + punkty
}

function startHardGame() {
    helper = 3
    gamesCount = 20
    document.getElementById("progressBar1").classList.add('hide')
    document.getElementById("progressBar2").classList.add('hide')
    var timeleft = 5
    clearInterval(downloadTimer)
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert("Czas minął")
            if (gamesNumber == gamesCount) {
                alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
                window.location.reload(true)
            } else
                gamesNumber++
            startHardGame()
        }
        document.getElementById("progressBar3").value = 5 - timeleft
        timeleft -= 1
    }, 1000)
    liczba1 = Math.floor(Math.random() * 9) + 1
    liczba2 = Math.floor(Math.random() * 9) + 1
    iloczyn = liczba2 * liczba1
    hideStartMenu();
    let question = document.getElementById('question')
    question.innerText = "Ile to jest...\n\n" + liczba1 + " * " + liczba2
    points.innerText = "Ilość punktów: " + punkty
}

function validate() {
    var wynik = Number(answer.value)
    if (gamesNumber == gamesCount) {
        if (wynik === iloczyn) {
            alert("Dobra odpowiedź")
            points.innerText = "Ilość punktów: " + punkty
            alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
            window.location.reload(true);
        } else {
            alert("Błędna odpowiedź")
            points.innerText = "Ilość punktów: " + punkty
            alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
            window.location.reload(true);
        }
    } else {
        gamesNumber++
        if (wynik === iloczyn) {
            alert("Dobra odpowiedź")
            punkty += 10
            points.innerText = "Ilość punktów: " + punkty
        } else {
            alert("Zła odpowiedź")
        }
    }
    answer.value = ""
    if (helper == 1)
        startSimpleGame()
    else if (helper == 2)
        startNormalGame()
    else if (helper == 3)
        startHardGame()
}

function hideStartMenu() {
    startSimpleButton.classList.add('hide')
    startNormalButton.classList.add('hide')
    startHardButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    confirmButton.classList.remove('hide')
}
