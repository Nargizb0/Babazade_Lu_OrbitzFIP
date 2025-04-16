(() => {

console.log("JS is live");

// Variables and Data Arrays //    
const promos = [
    {
        id: "berry-blast",
        name: "Product Launch Special Promotion!",
        description: "Try the brand new Orbitz! Buy one, get one free! Limited time offer ONLY.",
        flavourprofile: "Bursting with the juicy sweetness of ripe berries, this soda packs a fruity punch that’s both refreshing and bold. Each sip delivers a vibrant blend of berry goodness with a fizzy twist that keeps you coming back for more.",
        image: "images/def-mob.png"
    },
    {
        id: "root-beer",
        name: "Root Beer Promotion",
        description: "Duo featured new flavours for our launch!",
        flavourprofile: "Rich, smooth, and delightfully nostalgic, this cream soda delivers a velvety vanilla flavour with every fizzy sip. It’s a sweet throwback that’s as comforting as it is refreshing.",
        image: "images/root-beer-mob.png"
    },
    {
        id: "cream-soda",
        name: "Creamy Dream Promotion",
        description: "Taste the rich and sweet profiles of both!",
        flavourprofile: "This root beer brings a bold, earthy kick with hints of warm spice and creamy sweetness. It's a timeless flavour that fizzes with nostalgia and leaves a satisfying finish.",        
        image: "images/cream-mob.png"
    },
    {
        id: "spiderman",
        name: "Limited Edition",
        description: "Spiderman-themed Orbitz. Collect them all!",
        flavourprofile: "Swing into action with our limited-edition Spiderman soda — a heroic blend of bold flavour and unstoppable fizz. Packed with punch and pop, this collectible drink is made for thrill-seekers and true fans alike.",
        image: "images/spiderman-mob.png"
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
            <h3>${promoObj.name}</h3>
            <img src="${promoObj.image}">
            <p>${promoObj.description}</p>
            <p>${promoObj.flavourprofile}</p>
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