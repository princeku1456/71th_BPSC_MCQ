let currentSubject = '';
let currentChapter = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    generateSubjectCards();
});

// Generate subject cards dynamically
function generateSubjectCards() {
    const subjectsContainer = document.getElementById('subjects-container');
    subjectsContainer.innerHTML = '';

    Object.keys(subjectsConfig).forEach((subjectKey) => {
        const subject = subjectsConfig[subjectKey];
        const chapterCount = subject.chapters ? subject.chapters.length : 0;

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

// Show chapters directly on subject click
function showChapters(subjectKey) {
    console.log('Showing chapters for subject:', subjectKey);
    currentSubject = subjectKey;

    const subject = subjectsConfig[subjectKey];

    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'none';
    clearQuizContent();

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
                            data-chapter-name="${encodeURIComponent(chapter.name)}" 
                            data-quiz-file="${chapter.file}"
                            type="button">
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;
        chaptersContainer.appendChild(chapterCard);
    });

    console.log(`Loaded ${subject.chapters.length} chapters for ${subject.name}`);
}

// Back to subjects from chapters
function showSubjects() {
    console.log('Showing subjects');
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'block';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    clearQuizContent();
}

function showHome() {
    console.log('Showing home');
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    clearQuizContent();
}

// Back to chapters from quiz
function goBackToChapters() {
    console.log('Going back to chapters');
    clearQuizContent();
    if (currentSubject) {
        showChapters(currentSubject);
    } else {
        showSubjects();
    }
}

// Delegated event listener for all quiz start buttons
document.addEventListener('click', function (e) {
    if (e.target.matches('.quiz-start-btn')) {
        const subject = e.target.dataset.subject;
        const chapterName = e.target.dataset.chapterName;
        const quizFile = e.target.dataset.quizFile;

        console.log('Starting quiz:', { subject, chapterName, quizFile });
        loadQuiz(subject, chapterName, quizFile);
    }
});

// Load quiz iframe
function loadQuiz(subject, chapterName, quizFile) {
    console.log('Loading quiz:', { subject, chapterName, quizFile });

    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('subjects-section').style.display = 'none';
    document.getElementById('chapters-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';

    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="text-center mb-4">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading ${decodeURIComponent(chapterName)} quiz...</p>
        </div>
    `;

    setTimeout(() => {
        quizContent.innerHTML = `
            <div class="quiz-wrapper">
                <h4 class="text-center mb-4">${decodeURIComponent(chapterName)}</h4>
                <iframe class="quiz-iframe" src="./${quizFile}" title="Quiz"></iframe>
            </div>
        `;
        console.log('Quiz loaded successfully in iframe');
    }, 1000);
}

function clearQuizContent() {
    const quizContent = document.getElementById('quiz-content');
    if (quizContent) {
        quizContent.innerHTML = '';
    }
}
