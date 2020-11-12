let product =[
    {
        name: "Aplle",
        type : "fruit"
    },
    {
        name: "monitor",
        type : "computer"
    },
    {
        name: "manggo",
        type : "fruit"
    },
    {
        name: "table",
        type : "furniture"
    },
    
];

console.log(product.every(products=> products.type=="fruit"));