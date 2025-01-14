import { Product } from "./types";

export const products: Product[] = [
    {
        id: 1,
        title:"Black Jacket",
        image: ["/best-selling/blackJacket.webp", "/best-selling/blackJacket.webp"],
        slug: "Black Jacket",
        price: 150,
        discount:0,
        category:"shirts",
        description: "Good Quality Shirts",
        size:["S", "M", "L", "XL"],
        color:["#ffffff", "#000000", "#e60000"],
        quantity:1
    }, {
        id: 2,
        title:"redSandles",
        image: ["/best-selling/redSandles.jpg", "/best-selling/redSandles.jpg"],
        slug: "redSandles",
        price: 150,
        discount:0,
        category:"women-shoes",
        description: "Good Quality Shirts",
        size:["S", "M", "L", "XL"],
        color:["#ffffff", "#000000", "#e60000"],
        quantity:1
    }, {
        id: 3,
        title:"womenWhiteShirt",
        image: ["/best-selling/womenWhiteShirt.webp", "/best-selling/womenWhiteShirt.webp"],
        slug: "womenWhiteShirt",
        price: 150,
        discount:0,
        category:"tops",
        description: "Good Quality Shirts",
        size:["S", "M", "L", "XL"],
        color:["#ffffff", "#000000", "#e60000"],
        quantity:1
    }
]