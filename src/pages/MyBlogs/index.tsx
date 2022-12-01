// hooks
import { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Blog from "../../components/Blog";
import Loading from "../../components/Loading";
import blogController from "../../controllers/blog-controller";
import { BlogI } from "../../types/blog/blog";

const MyBlogsPage: React.FC = () => {

    const [ blogs, setBlogs ] = useState<null | BlogI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);
    const { user } = useTypedSelector(state => state.user);

    useEffect(() => {

        const fetchBlogs = async () => {
            if(user?.id) {
                const fetchedBlogs = await blogController.getBlogs(user.id);
                if(fetchedBlogs?.data) {
                    setBlogs(fetchedBlogs.data);
                }
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


export default MyBlogsPage