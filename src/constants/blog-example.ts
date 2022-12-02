// local imports
import firstCat from "../assets/images/blog-example/cat-1.png";
import secondCat from "../assets/images/blog-example/cat-2.png";
import thirdCat from "../assets/images/blog-example/cat-3.png";
import { BlogResponseI } from "../types/server-responses/blog";


export const firstBlogExample: BlogResponseI = {
    title: "About my cat john",
    text: `My cat John is not a cat but actually  
        he’s a cato-human, I saw yesterday it and 
        it was not it but actually was it. I’m not sure, but
        he’s a cato-human, I saw yesterday it and 
        it was not it but actually was it. I’m not sure, but...`,
    pictures: `${firstCat} ${secondCat} ${thirdCat}`,
    id_blog: 45,
    id_user: 32,
    date: new Date()
}

export const secondBlogExample: BlogResponseI = {
    title: "About my banana Nikolas",
    text: `My Banana Nikolas is not a banana but actually  
        he’s a banano-human, I saw yesterday it and 
        it was not it but actually was it. I’m not sure, but
        he’s a banano-human, I saw yesterday it and 
        it was not it but actually was it. I’m not sure, but...`,
    pictures: `${firstCat} ${secondCat} ${thirdCat}`,
    id_blog: 5,
    id_user: 38,
    date: new Date()
}