document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Як звати головного героя Bleach?",
            answers: ["naruto", "go          jo", "tun tun sahur", "Ichigo"],
            correct: 3
        },
        {
            question: "Ким мріє стати головний герой One Piece — Монкі Д. Луффі?",
            answers: ["королем піратів", "королем хокаге", "королем проклять", "королем 67 "],
            correct: 0
        },
        {
            question: "Що проковтує Юджі Ітадорі на початку аніме «Магічна битва» (Jujutsu Kaisen), щоб врятувати друзів і статимістичним носієм?",
            answers: ["диявольський фрукт Хіто Хіто но Мі", "палець Ромена Сукуни", "Божествинго генерал Махораґа", "Verity"],
            correct: 1
        },
        {
            question: "Яку страву найбільше у світі любить їсти Наруто Узумакі?",
            answers: ["диявольські фрукти", "палці сукуни", "рамен", "сікс-севен-кіди"],
            correct: 2
        },
        {
            question: "Хто вбив сімю Тандвжір із «Клинок, який знищує демонів» (Demon Slayer)?",
            answers: ["Мудзан Кібуцуджі", "Майкл джексон", "Ромен Сукна", "Годжо Сатору"],
            correct: 0
        },
        {
            question: "Яку їжу обожнював бог смерті Рюк з «Зошит смерті» (Death Note)? ",
            answers: ["банани", "палці сукуни", "яблука", "пиріжки з лайном"],
            correct: 2
        },
        //   Додай свої запитання
    ];
    
    const questionTitle = document.querySelector('#question-text')
    const answersContainer = document.querySelector('#answers-container')
    
    const startScreen = document.querySelector('#start-screen')
    const quizScreen = document.querySelector('#quiz-screen')
    const resultScreen = document.querySelector('#result-screen')
    
    const startButton = document.querySelector('#start-btn')
    const restartButton = document.querySelector('#restart-btn')
    
    const resultText = document.querySelector('.result-text')
    const timerDisplay = document.querySelector('#timer')
    const scoreBar = document.querySelector('#score-display')
    const timeBar = document.querySelector('#timer')
    
    let questionIndex = 0
    let score = 0
    let timer;
    let interval;
    
    
    function showQuetion(question){
        clearInterval(interval)
        startTime()
        answersContainer.innerHTML = ''
        questionTitle.innerText = question.question
        for (let i = 0; i < question.answers.length; i++){
            const button = document.createElement('button')
            button.classList.add('answer-btn')
            button.innerText = question.answers[i]
            button.addEventListener('click', function(){
                checkAnswer(button, i)
            })
            answersContainer.appendChild(button)
            
        }
    }
    showQuetion(questions[questionIndex])
    
    function checkAnswer(button, answerIndex){
        if (answerIndex == questions[questionIndex].correct){
            score++
            button.classList.add('correct')
            scoreBar.innerText = 'Бали' + score
        }else {
            button.classList.add('wrong')
        }
        setTimeout(nextQuestion, 1000)
    } 
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length){
            showQuetion(questions[questionIndex])
        } else {
            showResult()
        }
    }
    
    function showResult(){
        quizScreen.classList.add('hide')
        startScreen.classList.add('hide')
        resultScreen.classList.remove('hide')
        
        const accuracy = Math.round((score / questions.length) * 100)
        resultText.innerText = `Твій результат ${score} з ${questions.length}. Точність: ${accuracy}%`
    }
        
       function startGame(){
        startScreen.classList.add('hide')
        resultScreen.classList.add('hide')
        quizScreen.classList.remove('hide')
            
        score = 0
        questionIndex = 0 
        showQuetion(questions[questionIndex])
    }
    startButton.addEventListener('click', startGame)
    restartButton.addEventListener('click', startGame)
    
    function startTime(){
        timer = 35 
        timeBar.innerText = `Час: ${timer}`
        interval = setInterval(() => {
            timer--
            timeBar.innerText = `Час: ${timer}`
            if (timer <= 0){
                clearInterval(interval)
                nextQuestion()
            }
        }, 1000)
    }
        
    
    
});

