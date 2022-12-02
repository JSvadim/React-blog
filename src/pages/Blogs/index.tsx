// hooks
import { useState, useEffect } from "react";

// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import Blog from "../../components/Blog";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import blogController from "../../controllers/blog-controller";
import { BlogResponseI } from "../../types/server-responses/blog";

const BlogsPage: React.FC = () => {
    
    const [ blogs, setBlogs ] = useState<null | BlogResponseI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            const fetchedBlogs = await blogController.getBlogs();
            if(fetchedBlogs?.data) {
                setBlogs(fetchedBlogs.data);
            }
            setLoading(false);

        }
        fetchBlogs();
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
                    <span className={style["title-small"]}>BEST blog</span>
                    <span className={style["title-big"]}>EVER</span>
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
                                    <li className={style.blog} key={blog.text}>
                                        <Blog
                                            id={blog["id_blog"]}
                                            title={blog.title}
                                            text={blog.text}
                                            pictures={blog.pictures}
                                            isFake={false}/>
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


export default BlogsPage