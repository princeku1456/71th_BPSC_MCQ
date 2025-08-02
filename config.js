// config.js
const subjectsConfig = {
    // HISTORY SUBJECT
    CurrentAffair: {
        name: 'Current Affair',
        description: 'Explore MCQs',
        color: 'dark',
        icon: '📰 🗞️ 📢',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'chapter1',
                name: 'Current Affairs - Lecture 1',
                file: 'CA/Lec_1.html'
            },
            {
                id: 'chapter2',
                name: 'Current Affairs - Lecture 2',
                file: 'CA/Lec_2.html'
            },
            {
                id: 'chapter3',
                name: 'Current Affairs - Lecture 3',
                file: 'CA/Lec_3.html'
            },
            {
                id: 'chapter4',
                name: 'Current Affairs - Lecture 4',
                file: 'CA/Lec_4.html'
            },
            {
                id: 'chapter5',
                name: 'Current Affairs - Lecture 5',
                file: 'CA/Lec_5.html'
            },
            {
                id: 'chapter6',
                name: 'Current Affairs - Lecture 6',
                file: 'CA/Lec_6.html'
            },
            {
                id: 'chapter7',
                name: 'Current Affairs - Lecture 7',
                file: 'CA/Lec_7.html'
            },
            {
                id: 'chapter8',
                name: 'Current Affairs - Lecture 8', // Corrected duplicate id
                file: 'CA/Lec_8.html'
            },
            {
                id: 'chapter9',
                name: 'Current Affairs - Lecture 9', // Corrected duplicate id
                file: 'CA/Lec_9.html'
            },
            {
                id: 'chapter10',
                name: 'Current Affairs - Lecture 10', // Corrected duplicate id
                file: 'CA/Lec_10.html'
            },
            {
                id: 'chapter11',
                name: 'Current Affairs - Lecture 11', // Corrected duplicate id
                file: 'CA/Lec_11.html'
            }
        ]
    }
};