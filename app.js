let currentSubject = '';
let currentChapterId = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
const userAnswers = {};
let quizSubmitted = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    generateSubjectCards();
});

// Generate subject cards dynamically
function generateSubjectCards() {
    const subjectsContainer = document.getElementById('subjects-container');
    subjectsContainer.innerHTML = '';

    Object.keys(allQuizData).forEach((subjectKey) => {
        const subject = {
            name: subjectKey,
            icon: '📚', // You might want to define icons elsewhere, for now let's use a default
            description: `Quizzes on ${subjectKey}`,
            color: 'dark', // Default color, you can define this in a config.js file if needed
            chapters: Object.keys(allQuizData[subjectKey]).map(chapterName => ({
                name: chapterName,
                id: chapterName
            }))
        };
        const chapterCount = Object.keys(allQuizData[subjectKey]).length;

        const subjectCard = document.createElement('div');
        subjectCard.className = 'col-md-4 col-lg-3 mb-4';
        subjectCard.innerHTML = `
            <div class="card topic-card h-100 shadow border-${subject.color}" onclick="showChapters('${subjectKey}')">
                <div class="card-body text-center">
                    <div class="display-4 mb-3">${subject.icon}</div>
                    <h5 class="card-title text-${subject.color}">${subject.name}</h5>
                    <p class="card-text">${subject.description}</p>
                    <small class="text-muted">${chapterCount} chapter${chapterCount > 1 ? 's' : ''} available</small>
                </div>
            </div>
        `;
        subjectsContainer.appendChild(subjectCard);
    });
}

// Show chapters on subject click
function showChapters(subjectKey) {
    currentSubject = subjectKey;

    const subject = {
        name: subjectKey,
        color: 'dark',
        chapters: Object.keys(allQuizData[subjectKey]).map(chapterName => ({
            name: chapterName,
            id: chapterName
        }))
    };

    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'none';

    document.getElementById('chapters-title').textContent = `${subject.name} - Choose a Chapter`;

    const chaptersContainer = document.getElementById('chapters-container');
    chaptersContainer.innerHTML = '';

    subject.chapters.forEach((chapter) => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'col-md-6 col-lg-4 mb-4';
        chapterCard.innerHTML = `
            <div class="card chapter-card h-100 shadow">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${chapter.name}</h5>
                    <p class="card-text flex-grow-1">Practice MCQs for this chapter</p>
                    <div class="mt-auto">
                        <button class="btn btn-${subject.color} w-100 quiz-start-btn" 
                            data-subject="${subjectKey}"
                            data-chapter-id="${chapter.id}"
                            data-chapter-name="${encodeURIComponent(chapter.name)}" 
                            type="button">
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;
        chaptersContainer.appendChild(chapterCard);
    });
}

// Back to subjects from chapters
function showSubjects() {
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'block';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
}

function showHome() {
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
}

// Back to chapters from quiz
function goBackToChapters() {
    if (currentSubject) {
        showChapters(currentSubject);
    } else {
        showSubjects();
    }
}

document.addEventListener('click', function (e) {
    if (e.target.matches('.quiz-start-btn')) {
        const subjectKey = e.target.dataset.subject;
        const chapterId = e.target.dataset.chapterId;
        const chapterName = decodeURIComponent(e.target.dataset.chapterName);
        loadQuiz(subjectKey, chapterId, chapterName);
    }
});

function loadQuiz(subjectKey, chapterId, chapterName) {
    currentSubject = subjectKey;
    currentChapterId = chapterId;
    currentQuizData = allQuizData[subjectKey][chapterId];
    currentQuestionIndex = 0;
    Object.keys(userAnswers).forEach(key => delete userAnswers[key]);
    quizSubmitted = false;

    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';

    renderQuizLayout(chapterName);
    renderQuestion();
    renderNav();
}

function renderQuizLayout(chapterName) {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <h3 class="text-center">${chapterName}</h3>
        <div id="question-container"></div>
        <div class="d-flex justify-content-between mt-3">
            <button id="prev-btn" class="btn btn-secondary">Previous</button>
            <button id="next-btn" class="btn btn-primary">Next</button>
        </div>
        <div id="result" class="mt-3 text-center"></div>
    `;

    const quizNav = document.getElementById('quiz-nav');
    quizNav.innerHTML = `
        <div class="nav-header">Questions</div>
        <div id="nav-container" class="nav-grid"></div>
        <button id="final-submit-btn" class="btn btn-success w-100 mt-3">Submit All</button>
    `;

    document.getElementById('prev-btn').addEventListener('click', navigateQuestions.bind(null, -1));
    document.getElementById('next-btn').addEventListener('click', navigateQuestions.bind(null, 1));
    document.getElementById('final-submit-btn').addEventListener('click', submitAll);
}

function renderQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    const question = currentQuizData[currentQuestionIndex];

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p><strong>${currentQuestionIndex + 1}. ${question.text}</strong></p>`;

    question.options.forEach((option, optIndex) => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `
            <input type="radio" name="q${currentQuestionIndex}" value="${optIndex}" />
            ${option}
        `;
        
        const radioInput = label.querySelector('input');
        radioInput.addEventListener('change', (e) => {
            if (!quizSubmitted) {
                userAnswers[currentQuestionIndex] = { answer: parseInt(e.target.value), isCorrect: false };
                updateNavHighlights();
            }
        });
        
        questionDiv.appendChild(label);
    });

    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.id = `explanation${currentQuestionIndex}`;
    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    questionDiv.appendChild(explanationDiv);

    questionContainer.appendChild(questionDiv);

    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === currentQuizData.length - 1;

    if (userAnswers[currentQuestionIndex] !== undefined) {
        const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"][value="${userAnswers[currentQuestionIndex].answer}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
        }
    }
    
    // Only show feedback if the quiz has been submitted
    if (quizSubmitted) {
        showFeedback();
    } else {
        hideFeedback();
    }
}

function renderNav() {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = '';

    currentQuizData.forEach((q, i) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = i + 1;
        navItem.dataset.index = i;

        navItem.addEventListener('click', (e) => {
            currentQuestionIndex = parseInt(e.currentTarget.dataset.index, 10);
            renderQuestion();
            updateNavHighlights();
        });

        navContainer.appendChild(navItem);
    });

    updateNavHighlights();
}

function updateNavHighlights() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
        item.classList.remove('active', 'correct-nav', 'incorrect-nav', 'unattempted', 'attempted');
        const itemIndex = parseInt(item.dataset.index, 10);

        if (itemIndex === currentQuestionIndex) {
            item.classList.add('active');
        }
        
        if (quizSubmitted) {
            if (userAnswers[itemIndex] === undefined) {
                item.classList.add('unattempted');
            } else {
                const isCorrect = userAnswers[itemIndex].answer === currentQuizData[itemIndex].correctAnswer;
                item.classList.add(isCorrect ? 'correct-nav' : 'incorrect-nav');
            }
        } else {
             if (userAnswers[itemIndex] !== undefined) {
                item.classList.add('attempted');
            }
        }
    });
}

function navigateQuestions(direction) {
    const nextIndex = currentQuestionIndex + direction;
    if (nextIndex >= 0 && nextIndex < currentQuizData.length) {
        currentQuestionIndex = nextIndex;
        renderQuestion();
        updateNavHighlights();
    }
}

function showFeedback() {
    const resultDiv = document.getElementById('result');
    const question = currentQuizData[currentQuestionIndex];
    const explanationDiv = document.getElementById(`explanation${currentQuestionIndex}`);
    const options = document.querySelectorAll('.option');

    options.forEach(option => option.style.pointerEvents = 'none');
    
    const selectedAnswer = userAnswers[currentQuestionIndex]?.answer;
    const isCorrect = selectedAnswer !== undefined && selectedAnswer === question.correctAnswer;

    if (userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex].isCorrect = isCorrect;
    }

    if (isCorrect) {
        resultDiv.innerHTML = `<h5 class="text-success">Correct!</h5>`;
    } else if (selectedAnswer !== undefined) {
        resultDiv.innerHTML = `<h5 class="text-danger">Incorrect.</h5>`;
    } else {
        // No penalty for unattempted questions, so no "Incorrect" message
        resultDiv.innerHTML = `<h5>Unattempted.</h5>`;
    }
    
    if (question.correctAnswer !== undefined) {
        options[question.correctAnswer].classList.add('correct-answer-label');
    }

    if (selectedAnswer !== undefined && !isCorrect) {
        options[selectedAnswer].classList.add('incorrect-answer-label');
    }
    
    if (explanationDiv) {
        explanationDiv.style.display = 'block';
    }
}

function hideFeedback() {
    document.getElementById('result').textContent = "";
    const explanationDiv = document.getElementById(`explanation${currentQuestionIndex}`);
    if (explanationDiv) {
        explanationDiv.style.display = 'none';
    }
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'auto';
        option.classList.remove('correct-answer-label', 'incorrect-answer-label');
    });
}

function submitAll() {
    let finalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    quizSubmitted = true;
    
    // First, evaluate all answers and update the userAnswers object
    currentQuizData.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            userAnswers[index].isCorrect = userAnswers[index].answer === question.correctAnswer;
        }
    });

    // Then, calculate the final score and counts based on the updated userAnswers
    currentQuizData.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            if (userAnswers[index].isCorrect) {
                finalScore += 1;
                correctCount += 1;
            } else {
                finalScore -= 1/3;
                incorrectCount += 1;
            }
        } else {
            unattemptedCount += 1;
        }
    });
    
    const totalQuestions = currentQuizData.length;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h5>Quiz Complete!</h5>
        <p>Correct Answers: ${correctCount}</p>
        <p>Incorrect Answers: ${incorrectCount}</p>
        <p>Your score: ${finalScore.toFixed(1)} / ${totalQuestions}</p>
    `;

    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
    
    // We update the navigation highlights here to reflect the results
    updateNavHighlights();
    
    // Disable the navigation buttons after submission
    document.getElementById('prev-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
}