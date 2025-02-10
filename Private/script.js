const messages = [
    "Are you absolutely sure? 💕",
    "Like, really really sure?? 🤔",
    "Are you 100% positive? 💘",
    "Say yes… pretty please? 🥺👉👈",
    "Think about it, just for a sec! 💭",
    "If you say no, I'll be heartbroken… 💔",
    "I’ll be soooo sad… 😢",
    "Like, heartbreakingly sad… 😭",
    "Okay fine, I’ll stop asking… 😞",
    "Just kidding! Say yes, pretty please? ❤️🥰",
    "Do you really want to break my heart? 💔🥺",
    "You’re making my heart cry… 😭",
    "Every ‘No’ steals one of my heartbeats! 💓💀",
    "Fine, but I’ll still love you anyway. 😘",
    "I had a backup plan… keep pressing ‘No’ to find out. 😏",
    "You wouldn't say no if I had a puppy, right? 🐶",
    "Even the universe wants you to say yes! 🌟",
    "I asked the stars, they all said you’d say yes. 💫",
    "What if I promise to bring you food? 🍕🍔",
    "Saying 'No' is illegal in 47 galaxies. 🚀👽",
    "Cupid is literally crying right now. 😭💘",
    "My love for you is greater than your resistance. 💕",
    "The ‘Yes’ button is getting jealous… 😏",
    "You’re not just saying ‘No’ to me… you’re saying ‘No’ to love! 😱",
    "Just say yes before the ‘No’ button self-destructs! 💥",
    "If you say yes now, I'll forgive all the no’s. 😇",
    "I see what's happening… you're just teasing me! 😏",
    "Every ‘No’ is just one step closer to ‘Yes.’ 🏃‍♂️❤️",
    "What if I tell you there’s a surprise for saying yes? 🎁",
    "Do you enjoy watching me suffer? 😭😂",
    "I’m not crying… just… allergies… 😭💔",
    "Even your phone wants you to press ‘Yes’—trust me. 📱",
    "Saying yes comes with free unlimited love. 💖",
    "You can’t win… my love is stronger! 😤❤️",
    "If you say yes, I’ll let you pick the date spot. 🍽️",
    "You’re the only one who can save my heart! 🦸‍♀️",
    "I’ve already told everyone you said yes… no pressure. 🤭",
    "Just one little ‘Yes’ and I’ll be the happiest person alive! 😍",
    "You’re running out of ‘No’s! Use them wisely. 😉",
    "I’ll give you three seconds to change your mind… 3…2…1… 💕"
];


const noColors = [
    "#ffb3c6", "#ff809f", "#ff4d6d", "#d32f2f", "#b71c1c",
    "#ff5252", "#ff4081", "#f50057", "#d50000", "#880e4f"
];

let messageIndex = 0;
let colorIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    noButton.style.backgroundColor = noColors[colorIndex];

    messageIndex = (messageIndex + 1) % messages.length;
    colorIndex = (colorIndex + 1) % noColors.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    gifImage.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG9rNDU4YmJjcmdnMm1pc2cwZ2o5amNtMHBqc3VkMGwwdzV5ODl4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QlQdLBS70XJcZY1fLF/giphy.gif";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
