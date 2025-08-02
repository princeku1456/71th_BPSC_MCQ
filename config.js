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
    },
    ModernHistory: {
        name: 'Modern History',
        description: 'Explore MCQs',
        color: 'success',
        icon: '🔍📜⏳',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'chapter1',
                name: 'Advent of the Europeans in India',
                file: 'Modern/chapter_3.html'
            },
            {
                id: 'chapter2',
                name: 'Expansion and Consolidation of British Power in India',
                file: 'Modern/chapter_4.html'
            },
            {
                id: 'chapter3',
                name: 'People’s Resistance Against British Before 1857',
                file: 'Modern/chapter_5.html'
            }, {
                id: 'chapter4',
                name: 'The Revolt of 1857',
                file: 'Modern/chapter_6.html'
            }, {
                id: 'chapter5',
                name: 'Socio-Cultural Reform Movements',
                file: 'Modern/chapter_7.html'
            }, {
                id: 'chapte6',
                name: 'Indian National Congress Foundation and the Moderate Phase',
                file: 'Modern/chapter_8.html'
            }, {
                id: 'chapter7',
                name: 'Era of Militant Nationalism (1905-1909)',
                file: 'Modern/chapter_9.html'
            }, {
                id: 'chapter8',
                name: 'First Phase of Revolutionary Activities (1907-1917)',
                file: 'Modern/chapter_10.html'
            }
        ]
    },
};