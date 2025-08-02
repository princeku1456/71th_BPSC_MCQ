// config.js
const subjectsConfig = {
    // HISTORY SUBJECT
    CurrentAffair: {
        name: 'Current Affair',
        description: 'Explore MCQs',
        color: 'primary',
        icon: '📰 🗞️ 📢',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'chapter1_1',
                name: 'Current Affairs - Lecture 1',
                file: 'CA/Lec_1.html'
            },
            {
                id: 'chapter1_2',
                name: 'Current Affairs - Lecture 2',
                file: 'CA/Lec_2.html'
            },
            {
                id: 'chapter1_3',
                name: 'Current Affairs - Lecture 3',
                file: 'CA/Lec_3.html'
            },
            {
                id: 'chapter1_4',
                name: 'Current Affairs - Lecture 4',
                file: 'CA/Lec_4.html'
            },
            {
                id: 'chapter2_1',
                name: 'Current Affairs - Lecture 5',
                file: 'CA/Lec_5.html'
            },
            {
                id: 'chapter2_2',
                name: 'Current Affairs - Lecture 6',
                file: 'CA/Lec_6.html'
            },
            {
                id: 'chapter2_3',
                name: 'Current Affairs - Lecture 7',
                file: 'CA/Lec_7.html'
            },
            {
                id: 'chapter2_4',
                name: 'Current Affairs - Lecture 8', // Corrected duplicate id
                file: 'CA/Lec_8.html'
            }
        ]
    }
};