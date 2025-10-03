// script.js

// =======================================================================
// LAB 03 REQUIREMENT 1: DATE & TIME DISPLAY
// =======================================================================

/**
 * Updates the current date and time displayed in the header every second.
 */
function updateDateTime() {
    const now = new Date();
    
    // Format the date (Example: Friday, October 3, 2025)
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    // Format the time (Example: 11:42:30 AM)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    const datetimeDisplay = document.getElementById('datetime-display');
    if (datetimeDisplay) {
        datetimeDisplay.textContent = `${dateString} | ${timeString}`;
    }
}

// Update time immediately on load and then every second
updateDateTime();
setInterval(updateDateTime, 1000);


// =======================================================================
// LAB 03 REQUIREMENT 2: NIGHT/DAY MODE TOGGLE (DOM MANIPULATION & EVENT HANDLING)
// =======================================================================

const body = document.body;
const modeToggle = document.getElementById('mode-toggle');
const NIGHT_MODE_KEY = 'portfolioNightMode';

/**
 * Applies the stored theme preference from localStorage on page load.
 */
function loadTheme() {
    const isNightMode = localStorage.getItem(NIGHT_MODE_KEY) === 'enabled';
    
    if (isNightMode) {
        body.classList.add('night-mode');
        if (modeToggle) {
            modeToggle.textContent = '☀️ Day Mode'; // Text for when night mode is active
        }
    } else {
        body.classList.remove('night-mode');
        if (modeToggle) {
            modeToggle.textContent = '🌙 Night Mode'; // Text for when day mode is active
        }
    }
}

/**
 * Toggles the Night/Day mode, applies the class, and saves the preference.
 */
function toggleMode() {
    // Check if night-mode is currently enabled
    const isNightMode = body.classList.contains('night-mode');

    if (isNightMode) {
        // Switch to Day Mode
        body.classList.remove('night-mode');
        localStorage.setItem(NIGHT_MODE_KEY, 'disabled');
        modeToggle.textContent = '🌙 Night Mode';
    } else {
        // Switch to Night Mode
        body.classList.add('night-mode');
        localStorage.setItem(NIGHT_MODE_KEY, 'enabled');
        modeToggle.textContent = '☀️ Day Mode';
    }
}

// Load theme preference when the script runs
loadTheme();

// Attach event listener to the toggle button
if (modeToggle) {
    modeToggle.addEventListener('click', toggleMode);
}


// =======================================================================
// LAB 03 REQUIREMENT 3: REFACTOR EDUCATION PAGE INLINE ALERTS
// (DOM MANIPULATION & EVENT HANDLING)
// =======================================================================

// Array containing the original alert texts from education.html (Lab 02)
const eduDescriptions = [
    "I began my education journey at Samdrup Jongkhar Primary School, where I studied from PP to class 5. This school laid the foundation of my learning and helped me build strong values of discipline and teamwork. It was here that I learned to read, write, and explore creativity through play and simple classroom activities. SJPS created a nurturing environment that motivated me to be curious, hardworking, and respectful toward teachers and friends. The vibrant school atmosphere encouraged me to participate in different activities, shaping the early stage of my academic life.",
    "From class 6 to 8, I studied at Samdrup Jongkhar Middle Secondary School. This phase of my education was where I started exploring subjects in more depth, including science, mathematics, and social studies. The school gave me opportunities to participate in cultural programs, sports, and leadership activities. It helped me grow more confident and responsible as a student. My teachers at SJMSS encouraged me to set higher goals, and my classmates inspired me through collaboration and teamwork. These three years were crucial in strengthening both my academic skills and personal growth.",
    "My secondary journey continued at Jigme Sherubling Central School, where I studied from class 9 till 12. JSCS was an inspiring place that offered not only strong academic programs but also extracurricular activities that shaped my character. Here, I learned the importance of discipline, perseverance, and leadership. The school environment was filled with inspiration from dedicated teachers and talented peers. I grew both academically and socially, preparing myself for future challenges. Though I later repeated class 12 in another school, JSCS will always remain a special part of my educational foundation.",
    "After completing class 12 at Jigme Sherubling, I repeated my class 12 at Kelki Higher Secondary School. This experience taught me resilience and determination, reminding me that success requires hard work and persistence. Kelki gave me the chance to refine my knowledge, especially in core subjects that prepared me for higher education. The school encouraged independent learning and personal responsibility, helping me strengthen not just my academics but also my confidence. The supportive environment and guidance from teachers allowed me to overcome challenges and continue pursuing my goals.",
    "Currently, I am pursuing my higher studies at Samtse College of Education. This institution is helping me grow into a future teacher, equipping me with the skills and values necessary to inspire and educate the next generation. At SCE, I am learning not only about teaching methodologies but also about empathy, leadership, and innovation in education. The college provides opportunities for research, collaboration, and professional growth, ensuring that I am ready to contribute meaningfully to society. My journey at SCE represents the continuation of my dreams and my commitment to shaping the future."
];

// Select all education cards
const eduCards = document.querySelectorAll('.edu-card');

// Check if we are on the education page (or if any cards exist)
if (eduCards.length > 0 && document.title.includes('Education')) {
    // Loop through each card to add an event listener
    eduCards.forEach((card, index) => {
        // Attach the 'click' event handler
        card.addEventListener('click', () => {
            // Display the corresponding description using alert()
            if (eduDescriptions[index]) {
                alert(eduDescriptions[index]);
            }
        });
    });
}
