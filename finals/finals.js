document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderHandle = document.getElementById('slider-handle');
    const sliderText = document.getElementById('slider-text');
    const mainContent = document.getElementById('main-content');
    const unlockContainer = document.getElementById('unlock-container');

    let isDragging = false;
    let startX;
    let sliderWidth;

    sliderHandle.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent default behavior of mouse down (e.g., text selection)

        isDragging = true;
        startX = e.pageX;
        sliderWidth = slider.offsetWidth - sliderHandle.offsetWidth;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    const onMouseMove = (e) => {
        if (isDragging) {
            let offsetX = e.pageX - startX;

            if (offsetX > 0 && offsetX <= sliderWidth) {
                sliderHandle.style.left = offsetX + 'px';
                sliderText.style.opacity = 1 - offsetX / sliderWidth;
            } else if (offsetX > sliderWidth) {
                unlockSlider();
            }
        }
    };

    const onMouseUp = () => {
        if (isDragging) {
            isDragging = false;
            resetSlider();
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    };

    const unlockSlider = () => {
        sliderHandle.style.left = sliderWidth + 'px';
        sliderText.style.opacity = 0;
        setTimeout(() => {
            unlockContainer.style.display = 'none';
            mainContent.style.display = 'flex'; // Show main content after unlocking
        }, 500); // Adjust the delay time as needed
    };

    const resetSlider = () => {
        sliderHandle.style.left = '0';
        sliderText.style.opacity = '1';
    };
});

// Selecting buttons for personal details
const fullNameBtn = document.getElementById('fullNameBtn');
const primaryBtn = document.getElementById('primaryBtn');
const secondaryBtn = document.getElementById('secondaryBtn');
const tertiaryBtn = document.getElementById('tertiaryBtn');
const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const jsBtn = document.getElementById('jsBtn');
const baBtn = document.getElementById('baBtn');
const pythonBtn = document.getElementById('pythonBtn');

// Selecting display area
const detailsDisplay = document.getElementById('detailsDisplay');

// Adding event listeners to buttons
fullNameBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Personal Details</h3>
        <p>Full Name: John Patrick P. San Roque</p>
        <p>Date of Birth: December 26, 2002</p>
        <p>Address: San Miguel, Bulacan</p>
    `;
});

primaryBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Primary Education</h3>
        <p>School: School of Mount St. Mary, Inc.</p>
        <p>Year: 2000 - 2006</p>
    `;
});

secondaryBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Secondary Education</h3>
        <p>School: School of Mount St. Mary, Inc.</p>
        <p>Year: 2006 - 2012</p>
    `;
});

tertiaryBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Tertiary Education</h3>
        <p>Far Eastern University</p>
        <p>Institute of Technology</p>
        <p>BS Information Technology</p>
        <p>2023 - 2027</p>
    `;
});

htmlBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>HTML Proficiency</h3>
        <p>Level: Advanced</p>
        <p>Experience: 5+ years</p>
    `;
});

cssBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>CSS Proficiency</h3>
        <p>Level: Intermediate</p>
        <p>Experience: 3+ years</p>
    `;
});

jsBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>JavaScript Proficiency</h3>
        <p>Level: Intermediate</p>
        <p>Experience: 3+ years</p>
    `;
});

baBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Business Analytics Proficiency</h3>
        <p>Level: Intermediate</p>
        <p>Experience: 3+ years</p>
    `;
});

pythonBtn.addEventListener('click', () => {
    detailsDisplay.innerHTML = `
        <h3>Python Proficiency</h3>
        <p>Level: Intermediate</p>
        <p>Experience: 3+ years</p>
    `;
});
