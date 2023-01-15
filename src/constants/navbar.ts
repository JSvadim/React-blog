import { navbarVocabulary } from "../vocabulary/components/Navbar";

interface navItemTitleI {
    eng: string;
    ru: string;
}

export interface navItemI {
    title: navItemTitleI;
    path: string;
}

export const navItems = [
    {
        title: {
            eng: navbarVocabulary.blogs.eng,
            ru: navbarVocabulary.blogs.ru,
        },
        path: "/"
    },
    {
        title: {
            eng: navbarVocabulary.addBlog.eng,
            ru: navbarVocabulary.addBlog.ru,
        },
        path: "/add-blog"
    },
    {
        title: {
            eng: navbarVocabulary.myBlogs.eng,
            ru: navbarVocabulary.myBlogs.ru,
        },
        path: "/my-blogs"
    }
]