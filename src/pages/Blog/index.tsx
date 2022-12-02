// hooks
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { BlogPageLocationI } from "./type";
import Container from "../../components/Container";
import blogController from "../../controllers/blog-controller";
import { BlogI } from "../../types/blog/blog";
import Loading from "../../components/Loading";
import { User } from "../../components/User";
import { formatDate } from "./helpers";
import PicturesList from "../../components/PicturesList";
import ButtonLike from "../../components/Buttons/ButtonLike";
import Comment from "../../components/Comment";
import ButtonBasic from "../../components/Buttons/ButtonBasic";
import { AddCommentForm } from "../../components/forms/AddCommentForm";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";


const BlogPage: React.FC = () => {

    const location = useLocation()
    const { blogId } = location.state as BlogPageLocationI;

    const [ blog, setBlog ] = useState<BlogI | null>(null);
    const [ loading, setLoading ] = useState<Boolean>(true);
    

    useEffect(() => {
        const fetchBlog = async () => {
            const fetchedBlog = await blogController.getBlog(blogId);
            if(fetchedBlog?.data) {
                setBlog(fetchedBlog.data);
            }
            setLoading(false);
        }
        fetchBlog();
    }, [])

    const fakeComments = [
        {
            userId: 2,
            date: "12.06.2078",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quasi et at soluta sit odit ipsam nobis, optio corporis praesentium consectetur culpa quia, voluptas asperiores, perferendis mollitia deserunt expedita! Iure, eveniet aut necessitatibus deserunt accusantium velit aperiam omnis nobis fugit dicta veritatis distinctio nesciunt nisi error. Aliquam quo quod mollitia?"
        },
        {
            userId: 4,
            date: "02.03.2008",
            text: "Lorem ipsum, dolor sit amet consectetur adipisici."
        },
        {
            userId: 8,
            date: "01.13.2067",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quasi et at soluta sit odit ipsam nobis, optio corporis praesentium consectetur culpa quia, voluptas asperiores, perferendis mollitia deserunt expedita! Iure, eveniet aut necessitatibus deserunt accusantium velit aperiam omnis nobis fugit dicta veritatis distinctio nesciunt nisi error. Aliquam quo quod mollitia?"
        },
        {
            userId: 7,
            date: "12.06.2078",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quasi et at soluta sit odit ipsam nobis, optio corporis praesentium consectetur culpa quia, voluptas asperiores, perferendis mollitia deserunt expedita! Iure, eveniet aut necessitatibus deserunt accusantium velit aperiam omnis nobis fugit dicta veritatis distinctio nesciunt nisi error. Aliquam quo quod mollitia?"
        },
        {
            userId: 45,
            date: "02.03.2008",
            text: "Lorem ipsum, dolor sit amet consectetur adipisici."
        },
        {
            userId: 84,
            date: "01.13.2067",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quasi et at soluta sit odit ipsam nobis, optio corporis praesentium consectetur culpa quia, voluptas asperiores, perferendis mollitia deserunt expedita! Iure, eveniet aut necessitatibus deserunt accusantium velit aperiam omnis nobis fugit dicta veritatis distinctio nesciunt nisi error. Aliquam quo quod mollitia?"
        }
    ]


    if(loading) {
        return (
            <div className={style["loading-wrapper"]}>
                <Loading/>
            </div>
        )
    }
    if(blog) { // this check is for typescript :)
        return (
            <section className={style["main-section"]}>
                <header className={style["main-header"]}>
                    <Container>
                        <div className={style["main-header__inner"]}>
                            <User theme="black" userNickname="Boris breicha"/>
                            <time className={style["main-header__date"]}>
                                {formatDate(blog.date)}
                            </time>
                        </div>
                    </Container>
                </header>
                <div className={style["tablet-desktop-container"]}>
                    <section className={style["blog"]}>
                        <header className={style["blog__header"]}>
                            <h1 className={style["blog__title"]}>
                                {blog.title}
                            </h1>
                            <div className={classNames([style["blog__likes"], style.likes])}>
                                <svg 
                                className={style["likes__svg"]} 
                                width="25" 
                                height="25" 
                                viewBox="0 0 25 25" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <g id="heart 1">
                                    <g id="redheart">
                                    <g id="use10">
                                    <path id="use3" d="M12.5 6.25C12.5 4.5924 11.8415 3.00269 10.6694 1.83058C9.49731 0.65848 7.9076 0 6.25 0C4.5924 0 3.00268 0.65848 1.83058 1.83058C0.658481 3.00269 0 4.5924 0 6.25C0 12.5 11.25 16.25 12.5 23.75"/>
                                    <path id="use5" d="M12.5 6.25C12.5 4.5924 13.1585 3.00269 14.3306 1.83058C15.5027 0.65848 17.0924 0 18.75 0C20.4076 0 21.9973 0.65848 23.1694 1.83058C24.3415 3.00269 25 4.5924 25 6.25C25 12.5 13.75 16.25 12.5 23.75"/>
                                    </g>
                                    </g>
                                    </g>
                                </svg>
                                <p className={style["likes__number"]}>24</p>
                            </div>
                        </header>
                        {blog.pictures && <PicturesList
                            pictures={blog.pictures}
                            listClassName={classNames([style["blog__pics"]])}
                            itemClassName={classNames([style["blog__pics-item"]])}
                            pictureClassName={classNames([style["blog__pics-image"]])}
                            isFake={false}
                            isCompressed={false}
                        />}
                        <p className={style["blog__text"]}>
                            {blog.text}
                        </p>
                        <ButtonLike
                            theme="white"
                            isLiked={false}/>
                    </section>
                    <section className={style["comments"]}>
                        <header className={style["comments__header"]}>
                            <h2 className={style["comments__header-title"]}>Comments</h2>
                            <p className={style["comments__header-count"]}>12</p>
                        </header>
                        <div className={style["comments__list-wrapper"]}>
                            <ul className={style["comments__list"]}>
                                {
                                    fakeComments.map((comment) => {
                                        return (
                                            <li className={style["comments__list-item"]} key={comment.userId}>
                                                <Comment
                                                    userId={comment.userId}
                                                    date={comment.date}
                                                    text={comment.text}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <AddCommentForm
                            blogId={blog.id_blog}
                            className={style["comments__form"]}/>
                    </section>
                </div>
            </section>
        )
    }
    return (
        <p>Error</p>
    )
}


export default BlogPage