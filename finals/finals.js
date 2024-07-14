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


// const fullNameBtn = document.getElementById('fullNameBtn');
// const primaryBtn = document.getElementById('primaryBtn');
// const secondaryBtn = document.getElementById('secondaryBtn');
// const tertiaryBtn = document.getElementById('tertiaryBtn');
// const htmlBtn = document.getElementById('htmlBtn');
// const cssBtn = document.getElementById('cssBtn');
// const jsBtn = document.getElementById('jsBtn');
// const baBtn = document.getElementById('baBtn');
// const pythonBtn = document.getElementById('pythonBtn');


// const detailsDisplay = document.getElementById('detailsDisplay');


// fullNameBtn.addEventListener('click', () => {
//     detailsDisplay.innerHTML = `
//         <h3>Personal Details</h3>
//         <p>Full Name: John Patrick P. San Roque</p>
//         <p>Date of Birth: December 26, 2002</p>
//         <p>Address: San Miguel, Bulacan</p>
//     `;
// });

// educBtn.addEventListener('click', () => {
//     detailsDisplay.innerHTML = `
//         <h3>Primary Education</h3>
//         <p>School: School of Mount St. Mary, Inc.</p>
//         <p>Year: 2000 - 2006</p>
//     `;

//     detailsDisplay.innerHTML = `
//         <h3>Secondary Education</h3>
//         <p>School: School of Mount St. Mary, Inc.</p>
//         <p>Year: 2006 - 2012</p>
//     `;

//     detailsDisplay.innerHTML = `
//     <h3>Tertiary Education</h3>
//     <p>Far Eastern University</p>
//     <p>Institute of Technology</p>
//     <p>BS Information Technology</p>
//     <p>2023 - 2027</p>
// `;
// });


// htmlBtn.addEventListener('click', () => {
//     detailsDisplay.innerHTML = `
//         <h3>HTML Proficiency</h3>
//         <p>Level: Beginner</p>
//         <p>Experience: 1 semester</p>
//     `;
// });

// cssBtn.addEventListener('click', () => {
//     detailsDisplay.innerHTML = `
//         <h3>CSS Proficiency</h3>
//        <p>Level: Beginner</p>
//         <p>Experience: 1 semester</p>
//     `;
// });

// jsBtn.addEventListener('click', () => {
//     detailsDisplay.innerHTML = `
//         <h3>JavaScript Proficiency</h3>
//         <p>Level: Beginner</p>
//         <p>Experience: 1 semester</p>
//     `;
// });

document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll(".cell");
    const message = document.querySelector(".message");
    const resetButton = document.querySelector(".reset-button");
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute("data-index");

        if (board[index] !== "" || !gameActive) {
            return;
        }

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            message.textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (board.every(cell => cell !== "")) {
            message.textContent = "Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `It's ${currentPlayer}'s turn`;
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        cells.forEach(cell => (cell.textContent = ""));
        message.textContent = `It's ${currentPlayer}'s turn`;
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
    message.textContent = `It's ${currentPlayer}'s turn`;
});





  const educationData = [
    { type: "Elementary", logo: "finals/smsm.jpg", name: "School of Mount St. Mary, Inc.", duration: "6 years" },
    { type: "High-School", logo: "finals/smsm.jpg", name: "School of Mount St. Mary, Inc.", duration: "6 years" },
    { type: "College", logo: "https://upload.wikimedia.org/wikipedia/en/6/62/FEU_Tech_official_seal.png", name: "Far Eastern University Institute of Technology", duration: "Ongoing" }
];

const skillsData = [
    { language: "HTML", logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png", level: 15 },
    { language: "CSS", logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png", level: 15 },
    { language: "JavaScript", logo: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png", level: 5 },
    { language: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png", level: 20 }
];

const hobbiesData = [
    "finals/sleep.png",
    "finals/gamer.png",
    "finals/eating.png",
    "finals/movie.png"
];

const workData = [
    { logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png", name : "Canva PH", years: "2018-2022" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/800px-Procter_%26_Gamble_logo.svg.png", name: "P&G Philippines", years: "2023-present" }
];

const imagesData = [
    "finals/img1.jpg",
    "finals/img2.jpg",
    "/finals/img3.PNG",
    "/finals/img4.JPG",
    "finals/img5.jpg"
];

function displayEducation() {
    let html = "<h4>Education</h4>";
    educationData.forEach(edu => {
        html += `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="${edu.logo}" alt="${edu.name} Logo" style="max-width: 50px; margin-right: 10px;">
                <div>
                    <p>${edu.type}: ${edu.name}</p>
                    <p>${edu.duration}</p>
                </div>
            </div>
        `;
    });
    document.getElementById('detailsDisplay').innerHTML = html;
}

function displaySkills() {
    let html = "<h4>Skills</h4>";
    skillsData.forEach(skill => {
        html += `
            <div class="skill-item">
                <div class="skill-details">
                    <img src="${skill.logo}" alt="${skill.language} Logo">
                    <p>${skill.language}</p>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${skill.level}%;"></div>
                </div>
            </div>
        `;
    });
    document.getElementById('detailsDisplay').innerHTML = html;
}

function displayHobbies() {
    let html = "<h4>Hobbies</h4><div style='display: flex; justify-content: center; flex-wrap: wrap;'>";
    hobbiesData.forEach(icon => {
        html += `
            <img src="${icon}" alt="Hobby Icon" style="max-width: 100px; margin: 10px;">
        `;
    });
    html += "</div>";
    document.getElementById('detailsDisplay').innerHTML = html;
}

function displayWorkExperience() {
    let html = "<h4>Work Experience</h4>";
    workData.forEach(job => {
        html += `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="${job.logo}" alt="${job.name} Logo" style="max-width: 50px; margin-right: 10px;">
                <div>
                    <p>${job.name}</p>
                    <p>${job.years}</p>
                </div>
            </div>
        `;
    });
    document.getElementById('detailsDisplay').innerHTML = html;
}

function displayImages() {
    let html = "<h4>My Images</h4><div style='display: flex; justify-content: center; flex-wrap: wrap;'>";
    imagesData.forEach(image => {
        html += `
            <img src="${image}" alt="Developer Image" style="max-width: 150px; margin: 10px;">
        `;
    });
    html += "</div>";
    document.getElementById('detailsDisplay').innerHTML = html;
}

document.getElementById('fullNameBtn').addEventListener('click', () => {
    document.getElementById('detailsDisplay').innerHTML = "<h4>Personal Details</h4><p>Full Name: John Patrick P. San Roque<br>Age : 21 yrs old<br>Birthday: December 26, 2002<br>Address: San Miguel, Bulacan</p>";
});

document.getElementById('educBtn').addEventListener('click', displayEducation);
document.getElementById('skillsBtn').addEventListener('click', displaySkills);
document.getElementById('hobbiesBtn').addEventListener('click', displayHobbies);
document.getElementById('workBtn').addEventListener('click', displayWorkExperience);
document.getElementById('imgbtn').addEventListener('click', displayImages);

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
  
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          this.querySelector('.toggle-icon').textContent = '+';
        } else {
          answer.style.display = 'block';
          this.querySelector('.toggle-icon').textContent = '-';
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
  
        if (faqItem.classList.contains('open')) {
          faqItem.classList.remove('open');
          answer.style.maxHeight = null;
        } else {
          faqItem.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
  
