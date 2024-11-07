// hooks
import { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import blogController from "../../controllers/blog-controller";
import { BlogResponseI } from "../../types/server-responses/blog";
import { BlogsList } from "../../components/BlogsList";
import classNames from "classnames";
import { usePagination } from "../../hooks/usePagination";
import { localStorageMyBlogsPagination } from "../../constants/local-storage";
import { myBlogsPageVocabulary } from "../../vocabulary/pages/MyBlogs";
import { MessageWithBackground } from "../../components/messages/MessageWithBackground";

const MyBlogsPage: React.FC = () => {

    const { language } = useTypedSelector(state => state.language);
    const [ blogs, setBlogs ] = useState<null | BlogResponseI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);
    const { user } = useTypedSelector(state => state.user);
    
    const itemsPerPage = 12;
    const usePaginationProps = { localStorageVariableName: localStorageMyBlogsPagination, itemsPerPage };
    const [ pageNumber, paginationClickHandler, sliceBlogs ] = usePagination(usePaginationProps);

    const wrapperClassname = classNames([
        style.wrapper, 
        blogs?.length && blogs.length > itemsPerPage ? style["wrapper__paginated"] : ""]);

    useEffect(() => {
        throw new Error("helo niga");
        const fetchBlogs = async () => {
            if(user?.id) {
                const fetchedBlogs = await blogController.getBlogs(user.id);
                // COMMENT THIS IF STATEMENT IF TESTING PAGINATION
                if(fetchedBlogs?.data && fetchedBlogs.data.length > 0) {
                    setBlogs([...fetchedBlogs.data].reverse());
                }
                // FOR PAGINATION TESTING
                /* if(fetchedBlogs?.data ) {
                    const gottenBlogs = [...fetchedBlogs.data].reverse();
                    for (let i = 200; i < 988; i++) {
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
                } */
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
            <div className={wrapperClassname}>
                <h1 className={classNames([style.title, "unselectable"])}>
                    MY BLOGS
                </h1>
                {!blogs && (
                    <MessageWithBackground
                        theme="white"
                        text={myBlogsPageVocabulary.noBlogs[language]}
                        position="default-pos"/>
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
                                    itemsPerPage={itemsPerPage}
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


export default MyBlogsPage