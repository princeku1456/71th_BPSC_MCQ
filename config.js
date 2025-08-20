// config.js
const subjectsConfig = {
    // HISTORY SUBJECT
    CurrentAffair: {
        name: 'Current Affair',
        description: 'Explore MCQs',
        color: 'primary',
        icon: '📰 📢 🌐',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'CaChapter1',
                name: 'Current Affairs - Set - 1',
                file: 'CA/Lec_1.html'
            },
            {
                id: 'CaChapter2',
                name: 'Current Affairs - Set - 2',
                file: 'CA/Lec_2.html'
            },
            {
                id: 'CaChapter3',
                name: 'Current Affairs - Set - 3',
                file: 'CA/Lec_3.html'
            },
            {
                id: 'CaChapter4',
                name: 'Current Affairs - Set - 4',
                file: 'CA/Lec_4.html'
            },
            {
                id: 'CaChapter5',
                name: 'Current Affairs - Set - 5',
                file: 'CA/Lec_5.html'
            },
            {
                id: 'CaChapter6',
                name: 'Current Affairs - Set - 6',
                file: 'CA/Lec_6.html'
            },
            {
                id: 'CaChapter7',
                name: 'Current Affairs - Set - 7',
                file: 'CA/Lec_7.html'
            },
            {
                id: 'CaChapter8',
                name: 'Current Affairs - Set - 8', // Corrected duplicate id
                file: 'CA/Lec_8.html'
            },
            {
                id: 'CaChapter9',
                name: 'Current Affairs - Set - 9', // Corrected duplicate id
                file: 'CA/Lec_9.html'
            },
            {
                id: 'CaChapter10',
                name: 'Current Affairs - Set - 10', // Corrected duplicate id
                file: 'CA/Lec_10.html'
            },
            {
                id: 'CaChapter11',
                name: 'Current Affairs - Set - 11', // Corrected duplicate id
                file: 'CA/Lec_11.html'
            },
            {
                id: 'CaChapter12',
                name: 'Current Affairs - Set - 12', // Corrected duplicate id
                file: 'CA/Lec_12.html'
            },
            {
                id: 'CaChapter13',
                name: 'Current Affairs - Set - 13', // Corrected duplicate id
                file: 'CA/Lec_13.html'
            },
            {
                id: 'CaChapter14',
                name: 'Current Affairs - Set - 14', // Corrected duplicate id
                file: 'CA/Lec_14.html'
            },
            {
                id: 'CaChapter15',
                name: 'Current Affairs - Set - 15', // Corrected duplicate id
                file: 'CA/Lec_15.html'
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
            }, {
                id: 'chapter9',
                name: 'Emergence of Gandhi',
                file: 'Modern/chapter_11.html'
            }, {
                id: 'chapter10',
                name: 'Non-Cooperation Movement and Khilafat Aandolan',
                file: 'Modern/chapter_12.html'
            }, {
                id: 'chapter11',
                name: 'Emergence of Swarajists, Socialist Ideas, Revolutionary Activities',
                file: 'Modern/chapter_13.html'
            }, {
                id: 'chapter12',
                name: 'Simon Commission and the Nehru Report',
                file: 'Modern/chapter_14.html'
            }, {
                id: 'chapter13',
                name: 'Civil Disobedience Movement and Round Table Conferences',
                file: 'Modern/chapter_15.html'
            }, {
                id: 'chapter14',
                name: 'Debates on the Future Strategy after Civil Disobedience Movement',
                file: 'Modern/chapter_16.html'
            }, {
                id: 'chapter15',
                name: 'Nationalist Response in the Wake of World War II',
                file: 'Modern/chapter_17.html'
            }, {
                id: 'chapter16',
                name: 'Quit India Movement, Demand for Pakistan, and the INA',
                file: 'Modern/chapter_18.html'
            }, {
                id: 'chapter17',
                name: 'Constitutional, Administrative and Judicial Developments',
                file: 'Modern/chapter_19.html'
            }, {
                id: 'chapter18',
                name: 'Development of Indian Press',
                file: 'Modern/chapter_20.html'
            }
        ]
    },
    BiharSpecial: {
        name: 'Bihar Special ',
        description: 'Explore MCQs',
        color: 'danger',
        icon: '🏯🌾🎓',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'BSchapter1',
                name: 'General Introduction about Bihar (Part-1)',
                file: 'BiharSpecial/chapter_1.html'
            },
            {
                id: 'BSchapter2',
                name: 'General Introduction about Bihar (Part-2)',
                file: 'BiharSpecial/chapter_2.html'
            },
            {
                id: 'BSchapter3',
                name: 'Geography of Bihar (Part-1)',
                file: 'BiharSpecial/chapter_3.html'
            },
            {
                id: 'BSchapter4',
                name: 'Geography of Bihar (Part-2)',
                file: 'BiharSpecial/chapter_4.html'
            },
            {
                id: 'BSchapter5',
                name: 'Geography of Bihar (Part-3)',
                file: 'BiharSpecial/chapter_5.html'
            },
            {
                id: 'BSchapter6',
                name: 'Ancient & Medieval History of Bihar (Part-1)',
                file: 'BiharSpecial/chapter_6.html'
            },
            {
                id: 'BSchapter7',
                name: 'Ancient & Medieval History of Bihar (Part-2)',
                file: 'BiharSpecial/chapter_7.html'
            },
            {
                id: 'BSchapter8',
                name: 'Ancient & Medieval History of Bihar (Part-3)',
                file: 'BiharSpecial/chapter_8.html'
            },
            {
                id: 'BSchapter9',
                name: 'Modern History of Bihar (Part-1)',
                file: 'BiharSpecial/chapter_9.html'
            },
            {
                id: 'BSchapter10',
                name: 'Modern History of Bihar (Part-2)',
                file: 'BiharSpecial/chapter_10.html'
            },
            {
                id: 'BSchapter11',
                name: 'Modern History of Bihar (Part-3)',
                file: 'BiharSpecial/chapter_11.html'
            },
            {
                id: 'BSchapter12',
                name: 'Important Personalities of Bihar',
                file: 'BiharSpecial/chapter_12.html'
            },
            {
                id: 'BSchapter13',
                name: 'Art and Culture of Bihar',
                file: 'BiharSpecial/chapter_13.html'
            },
            {
                id: 'BSchapter14',
                name: 'Census of India and Bihar (2011)',
                file: 'BiharSpecial/chapter_14.html'
            }
        ]
    },
    ScienceTechnology: {
        name: ' Science & Technology',
        description: 'Explore MCQs',
        color: 'warning',
        icon: '🔬🤖🧬',
        // Flattening all chapters directly under history, no intermediate topics
        chapters: [
            // Current Affairs
            {
                id: 'Schapter1',
                name: 'Cells',
                file: 'Science/cells.html'
            },
            {
                id: 'Schapter2',
                name: 'Heredity',
                file: 'Science/heredity.html'
            },
            {
                id: 'Schapter3',
                name: 'Vitamins and Nutrition -1',
                file: 'Science/vitamins_1.html'
            },
            {
                id: 'Schapter4',
                name: 'Vitamins and Nutrition -2',
                file: 'Science/vitamins_2.html'
            },
            {
                id: 'Schapter5',
                name: 'Plant Physiology -1 ',
                file: 'Science/Plant-1.html'
            },
            {
                id: 'Schapter6',
                name: 'Plant Physiology -2',
                file: 'Science/Plant-2.html'
            },
            {
                id: 'Schapter7',
                name: 'Diseases and Treatment -1',
                file: 'Science/disease-1.html'
            },
            {
                id: 'Schapter8',
                name: 'Diseases and Treatment -2',
                file: 'Science/disease-2.html'
            },
            {
                id: 'Schapter9',
                name: 'Genetic Engineering and Biotechnology',
                file: 'Science/genetics.html'
            }
        ]
    }
};