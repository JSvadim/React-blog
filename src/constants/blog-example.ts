// local imports
import firstCat from "../assets/images/blog-example/cat-1.png";
import secondCat from "../assets/images/blog-example/cat-2.png";
import thirdCat from "../assets/images/blog-example/cat-3.png";
import { BlogResponseI } from "../types/server-responses/blog";
import { firstFakeBlogVocabulary, secondFakeBlogVocabulary } from "../vocabulary/components/Blog";

interface FakeBlogI {
    ru: BlogResponseI,
    eng: BlogResponseI
}

export const firstBlogExample: FakeBlogI = {
    ru: {
        title: firstFakeBlogVocabulary.title.ru,
        text: firstFakeBlogVocabulary.text.ru,
        pictures: `${firstCat} ${secondCat} ${thirdCat}`,
        id_blog: 45,
        id_user: 32,
        date: new Date()
    },
    eng: {
        title: firstFakeBlogVocabulary.title.eng,
        text: firstFakeBlogVocabulary.text.eng,
        pictures: `${firstCat} ${secondCat} ${thirdCat}`,
        id_blog: 45,
        id_user: 32,
        date: new Date()
    }
}

export const secondBlogExample: FakeBlogI = {
    ru: {
        title: secondFakeBlogVocabulary.title.ru,
        text: secondFakeBlogVocabulary.text.ru,
        pictures: `${firstCat} ${secondCat} ${thirdCat}`,
        id_blog: 5,
        id_user: 38,
        date: new Date()
    },
    eng: {
        title: secondFakeBlogVocabulary.title.eng,
        text: secondFakeBlogVocabulary.text.eng,
        pictures: `${firstCat} ${secondCat} ${thirdCat}`,
        id_blog: 5,
        id_user: 38,
        date: new Date()
    }
}