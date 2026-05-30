// let cupckaePrice = 299;
// let flavor = "Chocalate Dream";
// let isAvailable = true;

// console.log(flavor);

// if(cupckaePrice <= 199){
//     console.log("it isnt that costly");
// }else{
//     console.log("it is pretty choice to eat expansive sweets");
// }

// for(let i =0;i<=5;i++){
//     console.log("offer!!!");
// }

// let bakeryName = "Sweet Crumbs";

// let items = [
//     "Chocalate Dream",
//     "pink velvet",
//     "Strawberry Bliss"
// ];

// for(let i=0;i<items.length;i++){
// console.log(items[i]);
// }


const menu = {
    Cake: [
    {
    name: "Pink Velvet",
    price: 349,
    flavor: "Vanilla & RoseCream "
    },

    {
    name: "Caramel Cloud",
    price: 329,
    flavor: "Salted Caramel"
    },

    {
    name: "Mango Sunshine",
    price: 279,
    flavor: "Alphonso Mango"
    }   
    ],

    Brownie:[
    {
    name: "Chocolate Dream",
    price: 299,
    flavor: "Rich Chocolate",

    [productId]:"SC001"
    },

    {
    name: "Fudge Brownie",
    price: 149,
    flavor: "Dark Chocolate"
    },

    {
    name: "Walnut Brownie",
    price: 169,
    flavor: "Chocolate Walnut"
    }
    ],
    Bliss:[
    {
    name: "Strawberry Bliss",
    price: 249,
    flavor: "Fresh Strawberry"
    },

    {
    name: "Coconuts Bliss",
    price: 269,
    flavor: "Rich Chocolate with coconuts"
    },

    {
    name: "Cookie Bliss",
    price: 259,
    flavor: "cookie and cream"
    },
    ],
    Cupake:[ 
    {
    name:"Vanilla Heaven",
    price:59,
    flavor : "vanilla cream"
    },
    {
    name: "Honey Blossom",
    price: 99,
    flavor: "Honey Vanilla"
    },
    {
    name: "Rainbow Cupcake",
    price: 119,
    flavor: "Vanilla"
    },
    ],
    SpecialCake:[
   {
    name: "Royal Wedding Cake",
    price: 2999,
    flavor: "Vanilla Almond"
    },

    {  
    name: "Birthday Blast",
    price: 1499,
    flavor: "Chocolate Truffle"

    },
    ]
};



const productId = Symbol("productId");


// console.log(chocolateDream[productId]);

royalWeddingCake.price=3050;

// console.log(royalWeddingCake);

birthdayBlastCake.option=function(){
    console.log("chosse an option")
}

birthdayBlastCake.option2=function(){
    console.log(`Hello customer,${this.}`)
}

console.log(birthdayBlastCake.option());