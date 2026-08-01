const homeProducts = {

    bestSeller: [
        {
            id: 1,
            category: "Brownie",
            bestSeller: true,
            name: "Chocolate Dream",
            price: 299,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
            description: "Rich chocolate piece with creamy frosting."

        },
        {
            id: 2,
            category: "Bliss",
            bestSeller: true,
            name: "Strawberry Bliss",
            price: 249,
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
            description: "Fresh strawberry delight topped with sweetness."

        },
        {
            id: 3,
            category: "Cupcake",
            bestSeller: true,
            name: "Vanilla Heaven",
            price: 99,
            image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1200&auto=format&fit=crop",
            description: "Classic vanilla flavor with soft fluffy texture."

        },
    ],

    specialCakes: [
        {
            id: 4,
            category: "Wedding Cake",
            SpecialCake: true,
            name: "Royal Wedding Cake",
            price: 2999,
            image: "https://images.pexels.com/photos/11712500/pexels-photo-11712500.jpeg"
        },
        {
            id: 5,
            category: "Birthday Cake",
            SpecialCake: true,
            name: "Birthday Magic",
            price: 1499,
            image: "https://images.pexels.com/photos/35224347/pexels-photo-35224347.jpeg"
        }
    ]
}


const productsCollection = {
    bestSeller: {
        Brownie: [
            {
                id: 1,
                bestSeller: true,
                category: "Brownie",
                name: "Chocolate Dream",
                price: 299,
                image:
                    "https://images.pexels.com/photos/5386677/pexels-photo-5386677.jpeg",
            },
            {
                id: 2,
                bestSeller: true,
                category: "Brownie",
                name: "Fudge Fantasy",
                price: 349,
                image:
                    "https://images.pexels.com/photos/887850/pexels-photo-887850.jpeg",
            },
            {
                id: 3,
                bestSeller: true,
                category: "Brownie",

                name: "Carmel Crunch",
                price: 329,
                image:
                    "https://images.pexels.com/photos/29625645/pexels-photo-29625645.jpeg",
            },
            {
                id: 4,
                bestSeller: true,
                category: "Brownie",

                name: "Dark Cocao Delight",
                price: 399,
                image:
                    "https://images.pexels.com/photos/23826283/pexels-photo-23826283.jpeg",
            },
            {
                id: 5,
                bestSeller: true,
                category: "Brownie",

                name: "Nutty Delight",
                price: 379,
                image:
                    "https://images.pexels.com/photos/6390686/pexels-photo-6390686.jpeg",
            },
            {
                id: 6,
                bestSeller: true,
                category: "Brownie",

                name: "Hazelnut Brownie",
                price: 429,
                image:
                    "https://images.pexels.com/photos/29727285/pexels-photo-29727285.jpeg",
            },
            {
                id: 7,
                bestSeller: true,
                category: "Brownie",

                name: "Mocha Melt",
                price: 389,
                image:
                    "https://images.pexels.com/photos/17192194/pexels-photo-17192194.jpeg",
            },
        ],

        Bliss: [
            {
                id: 1,
                bestSeller: true,
                category: "Bliss",
                name: "Blueberry Bliss",
                price: 249,
                image:
                    "https://images.pexels.com/photos/26341202/pexels-photo-26341202.jpeg",
            },
            {
                id: 2,
                bestSeller: true,
                category: "Bliss",

                name: "Raspberry Bliss",
                price: 289,
                image:
                    "https://images.pexels.com/photos/26341203/pexels-photo-26341203.jpeg",
            },
            {
                id: 3,
                bestSeller: true,
                category: "Bliss",

                name: "Velvate Bliss",
                price: 349,
                image:
                    "https://images.pexels.com/photos/38020719/pexels-photo-38020719.jpeg",
            },
            {
                id: 4,
                bestSeller: true,
                category: "Bliss",

                name: "Citrus Burst",
                price: 399,
                image:
                    "https://images.pexels.com/photos/6544212/pexels-photo-6544212.jpeg",
            },
            {
                id: 5,
                bestSeller: true,
                category: "Bliss",

                name: "Coca Bliss",
                price: 299,
                image:
                    "https://images.pexels.com/photos/7819053/pexels-photo-7819053.jpeg",
            },
            {
                id: 6,
                bestSeller: true,
                category: "Bliss",

                name: "Pistachio Bliss",
                price: 419,
                image:
                    "https://images.pexels.com/photos/15174733/pexels-photo-15174733.png",
            },
            {
                id: 7,
                bestSeller: true,
                category: "Bliss",

                name: "Coffee Bliss",
                price: 379,
                image:
                    "https://images.pexels.com/photos/1190165/pexels-photo-1190165.jpeg",
            },
        ],

        Cupcake: [
            {
                id: 1,
                category: "Cupcake",
                name: "Vanilla Velvet Cupcake",
                price: 149,
                image:
                    "https://images.pexels.com/photos/28122543/pexels-photo-28122543.jpeg",
            },
            {
                id: 2,
                category: "Cupcake",

                name: "Lotus Biscoff Cupcake",
                price: 169,
                image:
                    "https://images.pexels.com/photos/28841107/pexels-photo-28841107.jpeg",
            },
            {
                id: 3,
                category: "Cupcake",

                name: "Cookie and Cream Cupcake",
                price: 189,
                image:
                    "https://images.pexels.com/photos/10509252/pexels-photo-10509252.jpeg",
            },
            {
                id: 4,
                category: "Cupcake",

                name: "Strawberry Swirl Cupcake",
                price: 179,
                image:
                    "https://images.pexels.com/photos/4109787/pexels-photo-4109787.jpeg",
            },
            {
                id: 5,
                category: "Cupcake",

                name: "Blueberry Bliss Cupcake",
                price: 199,
                image:
                    "https://images.pexels.com/photos/18955551/pexels-photo-18955551.jpeg",
            },
            {
                id: 6,
                category: "Cupcake",

                name: "Caramel Crunch Cupcake",
                price: 209,
                image:
                    "https://i.pinimg.com/736x/43/31/0c/43310cd053cc2e4baf646dd0cbcd88d2.jpg",
            },
            {
                id: 7,
                category: "Cupcake",

                name: "Oreo Delight Cupcake",
                price: 229,
                image:
                    "https://i.pinimg.com/736x/33/da/34/33da34a1b75eaf381da246da5f605b7e.jpg",
            },
        ],
    },

    specialCakes: {
        weddingCake: [
            {
                id: 1,
                name: "Royal Ivory Wedding Cake",
                price: 3499,
                image:
                    "https://images.pexels.com/photos/30232984/pexels-photo-30232984.jpeg",
                specialCakes: true,
            },
            {
                id: 2,
                name: "Elegant Pearl Wedding Cake",
                price: 3799,
                image:
                    "https://images.pexels.com/photos/29388920/pexels-photo-29388920.jpeg",
                specialCakes: true,
            },
            {
                id: 3,
                name: "Blush Blossom Wedding Cake",
                price: 3999,
                image:
                    "https://images.pexels.com/photos/37459897/pexels-photo-37459897.jpeg",
                specialCakes: true,
            },
            {
                id: 4,
                name: "Golden Romance Wedding Cake",
                price: 4299,
                image:
                    "https://images.pexels.com/photos/16231024/pexels-photo-16231024.jpeg",
                specialCakes: true,
            },
            {
                id: 5,
                name: "White Velvet Wedding Cake",
                price: 4599,
                image:
                    "https://images.pexels.com/photos/38583496/pexels-photo-38583496.jpeg",
                specialCakes: true,
            },
            {
                id: 6,
                name: "Floral Elegance Wedding Cake",
                price: 4899,
                image:
                    "https://images.pexels.com/photos/30321890/pexels-photo-30321890.jpeg",
                specialCakes: true,
            },
            {
                id: 7,
                name: "Majestic Love Wedding Cake",
                price: 5499,
                image:
                    "https://images.pexels.com/photos/11645552/pexels-photo-11645552.jpeg",
                specialCakes: true,
            },
        ],

        birthdayCake: [
            {
                id: 1,
                name: "Chocolate Celebration Cake",
                price: 799,
                image: "https://images.pexels.com/photos/18131293/pexels-photo-18131293.jpeg",
                specialCakes: true,
            },
            {
                id: 2,
                name: "Rainbow Delight Cake",
                price: 899,
                image: "https://images.pexels.com/photos/11753321/pexels-photo-11753321.jpeg",
                specialCakes: true,
            },
            {
                id: 3,
                name: "Strawberry Fantasy Cake",
                price: 849,
                image: "https://images.pexels.com/photos/30079766/pexels-photo-30079766.jpeg",
                specialCakes: true,
            },
            {
                id: 4,
                name: "Blueberry Dream Cake",
                price: 949,
                image: "https://images.pexels.com/photos/32290116/pexels-photo-32290116.jpeg",
                specialCakes: true,
            },
            {
                id: 5,
                name: "Red Velvet Celebration Cake",
                price: 999,
                image: "https://images.pexels.com/photos/6133311/pexels-photo-6133311.jpeg",
                specialCakes: true,
            },
            {
                id: 6,
                name: "Belgian Truffle Birthday Cake",
                price: 1099,
                image: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg",
                specialCakes: true,
            },
            {
                id: 7,
                name: "Golden Sprinkle Birthday Cake",
                price: 1199,
                image: "https://images.pexels.com/photos/26824725/pexels-photo-26824725.jpeg",
                specialCakes: true,
            },
        ],
    },
};


function displayCategory(selectedCategory) {

    detailsSection.innerHTML = "";

    selectedCategory.forEach((product) => {

        const card = document.createElement("div");
        card.classList.add("cake-card");

        card.innerHTML = `
            <p>${product.category}</p>
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <p>₹${product.price}</p>
        `;

        detailsSection.appendChild(card);

    });

}

const container = document.querySelector(".cake-container");
// console.log(document.querySelector(".cake-container"));

const besrSellerSection = document.querySelector(".best-seller");

const detailsSection = document.createElement('div');
detailsSection.id = "product-details";

homeProducts.bestSeller.forEach((product) => {
    const card = document.createElement('div');
    card.innerHTML = `
    <p>${product.category}</p>
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    `;
    card.addEventListener("click", () => {

        const leftDiv = document.createElement("div");
        const rightDiv = document.createElement("div");

        leftDiv.classList.add("details-left");
        rightDiv.classList.add("details-right");


        detailsSection.innerHTML = "";
        detailsSection.style.display="flex";

        const title = document.createElement("h2");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `Price: ${product.price}`;

        const image = document.createElement("img");
        image.src = product.image;

        const description = document.createElement("p");
        description.textContent = product.description;

        const exploreBtn = document.createElement("button");
        exploreBtn.textContent = "Explore";

        exploreBtn.addEventListener("click", () => {
            // console.log(product.category);
            const selectedCategory = productsCollection.bestSeller[product.category];
            // console.log(selectedCategory);
            displayCategory(selectedCategory);

        })
        leftDiv.appendChild(image);
       
        rightDiv.appendChild(title);
        rightDiv.appendChild(price);
        rightDiv.appendChild(description);
        rightDiv.appendChild(exploreBtn);

         detailsSection.appendChild(leftDiv);
        detailsSection.appendChild(rightDiv);



    });
    card.classList.add("cake-card");


    // console.log(container);
    // console.log(card);
    container.appendChild(card);

})
besrSellerSection.appendChild(detailsSection);





// console.log("prodcuts", productsCollection.bestSeller.Brownie);

// console.log(document.querySelector(".cake-container"));

// productsCollection.bestSeller.Brownie.forEach((product) => {
//     const card = document.createElement("div");

//     card.classList.add("cake-card");
//     card.innerHTML = `
// <img src="${product.image}">
// <h2>${product.name}</h2>
// <p>${product.price}</p>
// `;
//     const container = document.querySelector(".cake-container");
//     // console.log(container);
//     // console.log(card);
//     container.appendChild(card);
// });
