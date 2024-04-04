document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const submitButton = document.getElementById('submit-btn');

    const testData = {
        testName: "Тест з ІТ",
        questions: [
   {
                question: "Що таке HTTP і яка його роль у веб-розробці?",
                answers: [
                    { answer: "Мова програмування, що використовується для створення веб-сторінок", isCorrect: false },
                    { answer: "Протокол передачі гіпертексту, що використовується для передачі даних в інтернеті", isCorrect: true },
                    { answer: "Мова стилів для оформлення веб-сторінок", isCorrect: false },
                    { answer: "Браузерна технологія для відтворення відео на веб-сторінках", isCorrect: false }
                ]
            },
            {
                question: "Що таке DNS і яка його роль у веб-розробці?",
                answers: [
                    { answer: "Мова програмування для розробки динамічних веб-сайтів", isCorrect: false },
                    { answer: "Служба, що переводить доменні імена в IP-адреси та навпаки", isCorrect: true },
                    { answer: "Мова стилів для оформлення веб-сторінок", isCorrect: false },
                    { answer: "Браузерна технологія для анімації веб-елементів", isCorrect: false }
                ]
            },
            {
                question: "Що таке адаптивний веб-дизайн?",
                answers: [
                    { answer: "Веб-сайт без стилів", isCorrect: false },
                    { answer: "Веб-сайт з однаковим виглядом на всіх пристроях", isCorrect: false },
                    { answer: "Веб-сайт, який адаптується до різних пристроїв та розмірів екранів", isCorrect: true },
                    { answer: "Веб-сайт, який можна переглядати лише на комп'ютерах", isCorrect: false }
                ]
            },
            {
                question: "Що таке SEO і чому воно важливе для веб-розробки?",
                answers: [
                    { answer: "Спеціалізований редактор для написання веб-коду", isCorrect: false },
                    { answer: "Веб-технологія для збереження та обробки даних користувачів", isCorrect: false },
                    { answer: "Оптимізація веб-сайту для покращення його позицій у пошукових системах", isCorrect: true },
                    { answer: "Платформа для створення та редагування веб-графіки", isCorrect: false }
                ]
            },
            {
                question: "Які є основні типи HTTP-запитів?",
                answers: [
                    { answer: "GET, POST, DELETE, UPDATE", isCorrect: true },
                    { answer: "INSERT, SELECT, DELETE, UPDATE", isCorrect: false },
                    { answer: "CREATE, READ, UPDATE, DELETE", isCorrect: false },
                    { answer: "FETCH, PUT, DELETE, MODIFY", isCorrect: false }
                ]
            },
            {
                question: "Що таке CDN і яка його роль у веб-розробці?",
                answers: [
                    { answer: "Централізована база даних", isCorrect: false },
                    { answer: "Хмарне сховище файлів", isCorrect: false },
                    { answer: "Мережа серверів для швидкого розповсюдження контенту", isCorrect: true },
                    { answer: "Технологія шифрування даних", isCorrect: false }
                ]
            },
            {
                question: "Що таке JavaScript і яка його роль у веб-розробці?",
                answers: [
                    { answer: "Мова стилів для оформлення веб-сторінок", isCorrect: false },
                    { answer: "Мова програмування для створення веб-сторінок", isCorrect: false },
                    { answer: "Мова програмування для створення інтерактивних ефектів на веб-сторінках", isCorrect: true },
                    { answer: "Мова програмування для роботи з базами даних", isCorrect: false }
                ]
            },
            {
                question: "Які основні типи CSS властивостей?",
                answers: [
                    { answer: "Inline, Internal, External", isCorrect: false },
                    { answer: "Class, ID, Tag", isCorrect: false },
                    { answer: "Text, Background, Border", isCorrect: false },
                    { answer: "Margin, Padding, Border", isCorrect: true }
                ]
            },
            {
                question: "Що таке медіазапит у CSS?",
                answers: [
                    { answer: "Короткий шлях до зображень", isCorrect: false },
                    { answer: "Код, який змінює розмір шрифту", isCorrect: false },
                    { answer: "Код, який дозволяє встановлювати стилі для різних розмірів екранів", isCorrect: true },
                    { answer: "Код, який додає анімаційні ефекти", isCorrect: false }
                ]
            },
            {
                question: "Що таке анімація веб-елементів і як вона реалізується?",
                answers: [
                    { answer: "Створення 3D-моделей для веб-сторінок", isCorrect: false },
                    { answer: "Підхід до оформлення веб-сторінок за допомогою стилів", isCorrect: false },
                    { answer: "Створення рухомих ефектів на веб-сторінках за допомогою CSS або JavaScript", isCorrect: true },
                    { answer: "Робота з веб-камерою та відео на веб-сторінках", isCorrect: false }
                ]
            }
        ]
    };

    function displayQuestions(questions) {
        questions.forEach((question, index) => {
            const questionElem = document.createElement('div');
            questionElem.classList.add('question');
            questionElem.innerHTML = `
                <p>${index + 1}. ${question.question}</p>
                ${question.answers.map((answer, answerIndex) => `
                    <input type="radio" id="question-${index}-answer-${answerIndex}" name="question-${index}" value="${answerIndex}">
                    <label for="question-${index}-answer-${answerIndex}">${answer.answer}</label><br>
                `).join('')}
            `;
            quizContainer.appendChild(questionElem);
        });
    }

    submitButton.addEventListener('click', function() {
        const answers = document.querySelectorAll('input[type="radio"]:checked');
        let score = 0;
        let correctAnswers = [];

        answers.forEach((radio) => {
            const [questionIndex, answerIndex] = radio.id.split('-').slice(1).map(num => parseInt(num));
            const correctAnswer = testData.questions[questionIndex].answers[answerIndex].isCorrect;
            if (correctAnswer) {
                score++;
                correctAnswers.push(radio);
            }
        });

        const resultText = `Ваш результат: ${score} з ${testData.questions.length}`;
        resultContainer.innerHTML = `<p>${resultText}</p>`;
        resultContainer.style.display = 'block';

        correctAnswers.forEach(answer => {
            answer.nextElementSibling.style.color = 'green';
        });

        const result = {
            score: score,
            totalQuestions: testData.questions.length
        };
        localStorage.setItem('quizResult', JSON.stringify(result));

        alert('Результати тесту збережено');
    });

    displayQuestions(testData.questions);

    window.addEventListener('load', function() {
        const quizResult = JSON.parse(localStorage.getItem('quizResult'));
        if (quizResult) {
            const resultText = `Ваш результат: ${quizResult.score} з ${quizResult.totalQuestions}`;
            resultContainer.innerHTML = `<p>${resultText}</p>`;
            resultContainer.style.display = 'block';
        }
    });
});
