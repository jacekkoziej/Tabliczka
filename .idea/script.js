const startSimpleButton = document.getElementById('start-simple-btn')
const startNormalButton = document.getElementById('start-normal-btn')
const startHardButton = document.getElementById('start-hard-btn')
const questionContainer = document.getElementById('question-container')
const confirmButton = document.getElementById('confirm-btn')
const points = document.getElementById('points')
const timer = document.getElementById('timer')
const question = document.getElementById('question')
var answer = document.getElementById('answer')
let gamesNumber = 1
startSimpleButton.addEventListener('click', startSimpleGame)
confirmButton.addEventListener('click', validate)
let liczba1 = Math.floor(Math.random() * 9) + 1
let liczba2 = Math.floor(Math.random() * 9) + 1
let iloczyn = liczba1 * liczba2
let punkty = 0
var downloadTimer

function startSimpleGame() {
    let timeleft = 15
    clearInterval(downloadTimer)
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert("Czas minął")
            if (gamesNumber == 10) {
                alert("Koniec gry.\nZdobyłeś: " + punkty + " punktów!")
                window.location.reload(true)
            } else
                gamesNumber++
            startSimpleGame()
        }
        document.getElementById("progressBar").value = 15 - timeleft
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
    if (gamesNumber == 10) {
        if (wynik === iloczyn) {
            alert("Dobra odpowiedź")
            punkty += 10
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
    startSimpleGame()
}

function hideStartMenu() {
    startSimpleButton.classList.add('hide')
    startNormalButton.classList.add('hide')
    startHardButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    confirmButton.classList.remove('hide')
}
