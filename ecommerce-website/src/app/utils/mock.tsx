import { Product } from "./types";

export const products: Product[] = [
    {
        id: 1,
        title:"Black Jacket",
        image: ["/best-selling/blackJacket.webp", "/best-selling/blackJacket.webp"],
        slug: "black-jacket",
        price: 150,
        discount:0,
        category:"shirts",
        description: "Good Quality Shirts",
        size:["S", "M", "L", "XL"],
        color:["#ffffff", "#000000", "#e60000"],
        quantity:1
    }, {
        id: 2,
        title:"Red Sandles",
        image: ["/best-selling/redSandles.jpg", "/best-selling/redSandles.jpg"],
        slug: "red-Sandles",
        price: 150,
        discount:10,
        category:"women-shoes",
        description: "Good Quality Shirts",
        size:["M", "L",],
        color:[ "#000000",  "#e60000"],
        quantity:1
    }, {
        id: 3,
        title:"Women White Top",
        image: ["/best-selling/womenWhiteShirt.webp", "/best-selling/womenWhiteShirt.webp", "/best-selling/womenWhiteShirt.webp"],
        slug: "women-white-shirt",
        price: 150,
        discount:20,
        category:"tops",
        description: "Good Quality Shirts",
        size:["S", "M", "L", "XL"],
        color:["#ffffff", "#000000", "#e60000"],
        quantity:1
    }
]