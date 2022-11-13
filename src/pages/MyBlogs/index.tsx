// hooks
import { useState, useEffect } from "react";

// local imports
import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import { blogI } from "../../components/Blog/type";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Blog from "../../components/Blog";
import Loading from "../../components/Loading";

const MyBlogsPage: React.FC = () => {

    const [ blogs, setBlogs ] = useState<null | blogI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);

    useEffect(() => {
        const fakeBlogs = [
            {
                title: blogData.title,
                text: blogData.text,
                pics: blogData.pics,
                isFake: true,
            },
            {
                title: blogData.title,
                text: blogData.text,
                isFake: true,
            },
            {
                title: blogData.title,
                text: blogData.text,
                isFake: true,
            },
            {
                title: blogData.title,
                text: blogData.text,
                pics: blogData.pics,
                isFake: true,
            },
            {
                title: blogData.title,
                text: blogData.text,
                isFake: true,
            },
            {
                title: blogData.title,
                text: blogData.text,
                isFake: true,
            },
        ]
        setTimeout(() => {
            setBlogs(fakeBlogs);
            setLoading(false);
        }, 1000);
    }, [])
    if(loading) {
        return (
            <div className={style["loading-wrapper"]}>
                <Loading/>
            </div>
        )
    }
    return (
        <Container>
            <div className={style.wrapper}>
                <h1 className={style.title}>
                    MY BLOGS
                </h1>
                {!blogs && (
                    <div className={style["no-blogs"]}>
                        <p className={style["no-blogs__text"]}>
                            You have no blogs..
                        </p>
                    </div>
                )}
                {blogs && (
                    <>
                        <ul className={style.blogs}>
                            {blogs.map(blog => {
                                return (
                                    <li className={style.blog} key={Math.random()}>
                                        <Blog
                                            title={blog.title}
                                            text={blog.text}
                                            pics={blog.pics || undefined}
                                            isFake={true}/>
                                    </li>
                                )
                            })}
                        </ul>
                        <Pagination className={style.pagination}/>
                    </>
                )}
            </div>
        </Container>
    )
}


export default MyBlogsPage