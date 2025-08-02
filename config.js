// config.js
const subjectsConfig = {
    // HISTORY SUBJECT
    history: {
        name: '70th BPSC',
        description: 'Explore MCQs',
        color: 'primary',
        icon: '📚',
        topics: {
            ancient: {
                name: 'Current Affairs',
                description: 'Explore questions from Bihar and India CA',
                chapters: [
                    { id: 'chapter1_1', name: 'Lecture 1', file: '/CA/Lec_1.html' },
                    { id: 'chapter1_2', name: 'Lecture 2', file: 'Lec_2.html' },
                    { id: 'chapter1_3', name: 'Lecture 3', file: 'Lec_3.html' },
                    { id: 'chapter1_4', name: 'Lecture 4', file: 'Lec_4.html' },
                    { id: 'chapter2_1', name: 'Lecture 5', file: 'Lec_5.html' },
                    { id: 'chapter2_2', name: 'Lecture 6', file: 'Lec_6.html' },
                    { id: 'chapter2_3', name: 'Lecture 7', file: 'Lec_7.html' },
                    { id: 'chapter2_3', name: 'Lecture 8', file: 'Lec_8.html' }
                ]
            },
            medieval: {
                name: 'Medieval History',
                description: 'Test your knowledge of medieval periods and kingdoms',
                chapters: [
                    { id: 'chapter1', name: 'Chapter 1: Delhi Sultanate', file: 'medieval_1.html' },
                    { id: 'chapter2', name: 'Chapter 2: Mughal Empire', file: 'medieval_2.html' },
                    { id: 'chapter3', name: 'Chapter 3: Regional Kingdoms', file: 'medieval_3.html' }
                ]
            },
            modern: {
                name: 'Modern History',
                description: 'Practice questions from modern era and recent history',
                chapters: [
                    { id: 'chapter1', name: 'Chapter 1: British Colonial Rule', file: 'modern_1.html' },
                    { id: 'chapter2', name: 'Chapter 2: Freedom Struggle', file: 'modern_2.html' },
                    { id: 'chapter3', name: 'Chapter 3: Post Independence', file: 'modern_3.html' }
                ]
            }
        }
    }
    
    // // GEOGRAPHY SUBJECT
    // geography: {
    //     name: 'Geography',
    //     description: 'Explore physical and human geography',
    //     color: 'success',
    //     icon: '🌍',
    //     topics: {
    //         physical: {
    //             name: 'Physical Geography',
    //             description: 'Study of natural features and processes',
    //             chapters: [
    //                 { id: 'geo_ch1', name: 'Chapter 1: Earth Structure', file: 'geography_physical_1.html' },
    //                 { id: 'geo_ch2', name: 'Chapter 2: Climate Systems', file: 'geography_physical_2.html' }
    //             ]
    //         },
    //         human: {
    //             name: 'Human Geography',
    //             description: 'Study of human activities and settlements',
    //             chapters: [
    //                 { id: 'geo_ch3', name: 'Chapter 1: Population Distribution', file: 'geography_human_1.html' },
    //                 { id: 'geo_ch4', name: 'Chapter 2: Urbanization', file: 'geography_human_2.html' }
    //             ]
    //         }
    //     }
    // },
    
    // // SCIENCE SUBJECT
    // science: {
    //     name: 'Science',
    //     description: 'Explore physics, chemistry, and biology',
    //     color: 'info',
    //     icon: '🔬',
    //     topics: {
    //         physics: {
    //             name: 'Physics',
    //             description: 'Fundamental principles of matter and energy',
    //             chapters: [
    //                 { id: 'phy_ch1', name: 'Chapter 1: Motion and Force', file: 'physics_1.html' },
    //                 { id: 'phy_ch2', name: 'Chapter 2: Energy and Work', file: 'physics_2.html' }
    //             ]
    //         },
    //         chemistry: {
    //             name: 'Chemistry',
    //             description: 'Study of matter and chemical reactions',
    //             chapters: [
    //                 { id: 'chem_ch1', name: 'Chapter 1: Atomic Structure', file: 'chemistry_1.html' },
    //                 { id: 'chem_ch2', name: 'Chapter 2: Chemical Bonding', file: 'chemistry_2.html' }
    //             ]
    //         },
    //         biology: {
    //             name: 'Biology',
    //             description: 'Study of living organisms',
    //             chapters: [
    //                 { id: 'bio_ch1', name: 'Chapter 1: Cell Structure', file: 'biology_1.html' },
    //                 { id: 'bio_ch2', name: 'Chapter 2: Genetics', file: 'biology_2.html' }
    //             ]
    //         }
    //     }
    // }
};
