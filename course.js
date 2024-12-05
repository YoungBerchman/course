
// let entry = [
//     {
//         id:1,
//         name:"mije",
//         age:10,
//     },
//     {
//         id:2,
//         name:"gift",
//         age:10,
//     },
//     {
//         id:5,
//         name:"gift",
//         age:15,
//     },
//     {
//         id:4,
//         name: "gift",
//         age:7,
//     },
//     {
//         id:3,
//         name:"john doe",
//         age:30,
//     },
// ];
// let a = ["praise","john","peter","james","savior"];
// console.log(a.sort((a,b)=>{
//     return a-b;
// }).filter((el)=>{
//     return el !=="peter";
// }));

const marketplace = [
    {
        client:{
            id:101,
            name:"Jessica Felix",
            email:"jessicafelix@codelab.com",
            location:"New York,USA",
        },
        products:[
            {
                id:1,
                name:"Laptop",
                price:1200,
                category:"Electronics",
                stock:50,
            },
            {
                id:2,
                name:"Smartphone",
                price:800,
                category:"Electronics",
                stock:30,
            },
            {id:3,name:"Tablet",price:450,category:"Electronics",stock:20},
        ],
    },
    {
        client:{
            id:102,
            name:"Daniel George",
            email:"danielgeorge@codelab.com",
            location:"Los Angeles,USA",
        },
        products:[
            {
                id:4,
                name:"Headphones",
                price:150,
                category:"Accessories",
                stock:150,
            },
            {id:6,name:"Mouse",price:50,category:"Accessories",stock:200},
        ],
    },
    {
        client:{
            id:103,
            name:"Charlie Openda",
            email:"charleopenda@codelab.com",
            location:"Chicago,USA",
        },
        products:[
            {id:7,name:"Chair",price:300,category:"Furniture",stock:10},
            {id:8,name:"Desk",price:500,category:"Furniture",stock:5},
            {id:9,name:"Lamp",price:100,category:"Furniture",stock:25},
        ],
    },
];
// const div = marketplace.map((market)=>{
//     return market.products;
// })
console.log(marketplace);
// const print = marketplace.map(function(movie){
//     return movie.products;
// });
// console.log(print);course.js
