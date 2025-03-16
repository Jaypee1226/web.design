document.addEventListener("DOMContentLoaded", function () {
    // Hide food description initially
    document.getElementById("food-description").style.display = "none";

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let name = card.getAttribute("data-name");
            let desc = card.getAttribute("data-desc");
            let img = card.getAttribute("data-image");
            let cuisine = card.getAttribute("data-cuisine");
            let cooking = card.getAttribute("data-cooking");
            let ingredients = card.getAttribute("data-ingredients");

            openFoodCard(name, desc, img, cuisine, cooking, ingredients);
        });
    });

    // Main Menu button closes the food description
    document.getElementById("main-menu").addEventListener("click", function () {
        closeFoodCard();
    });
});

function openFoodCard(name, desc, img, cuisine, cooking, ingredients) {
    let foodCard = document.getElementById("food-description");

    document.getElementById("food-image").src = img;
    document.getElementById("food-title").innerText = name;
    document.getElementById("food-text").innerText = desc;
    document.getElementById("food-cuisine").innerText = cuisine;
    document.getElementById("food-cooking").innerText = cooking;
    document.getElementById("food-ingredients").innerText = ingredients;

    foodCard.style.display = "block"; 
    setTimeout(() => {
        foodCard.classList.add("show");
    }, 10);
}

function closeFoodCard() {
    let foodCard = document.getElementById("food-description");

    foodCard.classList.remove("show");

    setTimeout(() => {
        foodCard.style.display = "none"; 
    }, 300);
}
