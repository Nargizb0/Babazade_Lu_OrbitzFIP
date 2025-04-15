(() => {

console.log("JS is live");

// Variables and Data Arrays //    
const promos = [
    {
        id: "berry-blast",
        name: "Product Launch Special Promotion!",
        description: "Try the brand new Orbitz! Buy one, get one free! Limited time offer ONLY.1",
        image: "images/promo_berry.png"
    },
    {
        id: "root-beer",
        name: "Root Beer Promotion",
        description: "Duo featured new flavours for our launch!",
        image: "images/promo_rootbeer.png"
    },
    {
        id: "cream-soda",
        name: "Creamy Dream Promotion",
        description: "Taste the rich and sweet profiles of both!",
        image: "images/promo_cream.png"
    },
    {
        id: "spiderman",
        name: "Limited Edition",
        description: "Spiderman-themed Orbitz. Collect them all!",
        image: "images/promo_spiderman.png"
    }
];
const productCards = document.querySelectorAll(".product-card");

// Functions //

function showPromo(promoObj) {
    const existingBox = document.querySelector(".promo-box");
        if (existingBox) existingBox.remove();

    const promoBox = document.createElement("div");
    promoBox.classList.add("promo-box");

    promoBox.innerHTML = 
        `
        <div class="promo-content">
            <img src="${promoObj.image}">
            <p>${promoObj.name}</p>
            <button class="close-btn">X</button>
        </div>
        `;
    
    document.body.appendChild(promoBox);

    promoBox.querySelector(".close-btn").addEventListener("click", () => {
        promoBox.remove();
    });
}

// Event Listeners //

productCards.forEach(card => {
    const cardId = card.dataset.promo;

    console.log("Clicked on product box");

    card.addEventListener("click", () => {

        console.log("Card clicked:", cardId);
        
        const promoObj = promos.find(promo => promo.id === cardId);
            if (promoObj) showPromo(promoObj);
    });
});
})();