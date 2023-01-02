// hooks
import { useState, useEffect } from "react";

// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import blogController from "../../controllers/blog-controller";
import { BlogResponseI } from "../../types/server-responses/blog";
import { BlogsList } from "../../components/BlogsList";


const BlogsPage: React.FC = () => {
    
    const [ blogs, setBlogs ] = useState<null | BlogResponseI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);
    const [ pageNumber, setPageNumber ] = useState<number>(1);

    useEffect(() => {
        const fetchBlogs = async () => {
            const fetchedBlogs = await blogController.getBlogs();
            if(fetchedBlogs?.data && fetchedBlogs.data.length > 0) {
                setBlogs([...fetchedBlogs.data].reverse());
                /* 
                FOR PAGINATION TESTING
                const gottenBlogs = [...fetchedBlogs.data];
                for (let i = 200; i < 4000; i++) {
                    gottenBlogs.push({
                        title: `blog number ${i}`,
                        text: `My cat John is not a cat but actually  
                            he’s a cato-human, I saw yesterday it and 
                            it was not it but actually was it. I’m not sure, but
                            he’s a cato-human, I saw yesterday it and 
                            it was not it but actually was it. I’m not sure, but...`,
                        pictures: null,
                        id_blog: i,
                        id_user: 32,
                        date: new Date()
                    })
                }
                setBlogs(gottenBlogs); 
                */
            }
            setLoading(false);

        }
        fetchBlogs();
    }, [])

    const paginationClickHandler = (numberOfPage: number) => {
        setPageNumber(numberOfPage);
    }
    const itemsPerPage = 12;
    const sliceBlogs = (blogs: Array<BlogResponseI>) => {
        const firstBlogNumber = pageNumber * itemsPerPage - itemsPerPage;
        const lastBlogNumber = pageNumber * itemsPerPage;
        return blogs.slice(firstBlogNumber, lastBlogNumber);
    }
    

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
                <h1 className={classNames([style.title, "unselectable"])}>
                    <span className={style["title-small"]}>BEST blog</span>
                    <span className={style["title-big"]}>EVER</span>
                </h1>
                {!blogs && (
                    <div className={style["no-blogs"]}>
                        <p className={style["no-blogs__text"]}>
                            We have no blogs..
                        </p>
                    </div>
                )}
                {blogs &&
                    (<>
                        {blogs.length <= itemsPerPage && 
                            <BlogsList 
                                listClassName={style.blogs}
                                itemClassName={style.blog}
                                blogs={blogs}/>
                        }
                        {blogs.length > itemsPerPage && 
                            <>
                                <BlogsList
                                    listClassName={style.blogs}
                                    itemClassName={style.blog}
                                    blogs={sliceBlogs(blogs)}/>
                                <Pagination 
                                    amountOfItems={blogs.length}
                                    itemsPerPage={12}
                                    className={style.pagination}
                                    onClick={paginationClickHandler}
                                    currentPageNumber={pageNumber}/>
                            </>
                        }
                    </>)
                }
            </div>
        </Container>
    )
}


export default BlogsPage