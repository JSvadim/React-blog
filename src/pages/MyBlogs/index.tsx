// hooks
import { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Blog from "../../components/Blog";
import Loading from "../../components/Loading";
import blogController from "../../controllers/blog-controller";
import { BlogResponseI } from "../../types/server-responses/blog";

const MyBlogsPage: React.FC = () => {

    const [ blogs, setBlogs ] = useState<null | BlogResponseI[]>(null);
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
                                            blog={blog}
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