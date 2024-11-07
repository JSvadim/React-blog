// hooks
import { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
import { localStorageBlogsPagination } from "../../constants/local-storage";
import { usePagination } from "../../hooks/usePagination";
import { blogsPageVocabulary } from "../../vocabulary/pages/Blogs";
import { MessageWithBackground } from "../../components/messages/MessageWithBackground";


const BlogsPage: React.FC = () => {
    
    const { language } = useTypedSelector(state => state.language);
    const [ blogs, setBlogs ] = useState<null | BlogResponseI[]>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);
    
    const itemsPerPage = 12;
    const usePaginationProps = { localStorageVariableName: localStorageBlogsPagination, itemsPerPage };
    const [ pageNumber, paginationClickHandler, sliceBlogs ] = usePagination(usePaginationProps);
    
    const wrapperClassname = classNames([
        style.wrapper, 
        blogs?.length && blogs.length > itemsPerPage ? style["wrapper__paginated"] : ""]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const fetchedBlogs = await blogController.getBlogs();
            let gottenBlogs: BlogResponseI[] = [];

            if(fetchedBlogs?.data && fetchedBlogs.data.length > 0) {
                gottenBlogs = [...fetchedBlogs.data].reverse();
            }
            // FOR PAGINATION TESTING
            for (let i = 200; i < 800; i++) {
                gottenBlogs.push({
                    title: `blog number ${i + 300000}`,
                    text: `This blog is used for testing pagination. 
                            Or to just show how pagination works...`,
                    pictures: null,
                    id_blog: i,
                    id_user: 320000,
                    date: new Date(),
                    fake: true,
                })
            }
            setBlogs(gottenBlogs); 
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
                    <span className={style["title-small"]}>BEST blog</span>
                    <span className={style["title-big"]}>EVER</span>
                </h1>
                {!blogs && (
                    <MessageWithBackground
                        theme="white"
                        text={blogsPageVocabulary.noBlogs[language]}
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