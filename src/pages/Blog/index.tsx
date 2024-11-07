// hooks
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// third party
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

// local imports
import style from "./style.module.scss";
import { BlogPageLocationI } from "./type";
import Container from "../../components/Container";
import { User } from "../../components/User";
import { formatDate, SlickArrowsMobileAnimation } from "./helpers";
import ButtonLike from "../../components/Buttons/ButtonLike";
import Comment from "../../components/Comment";
import { AddCommentForm } from "../../components/forms/AddCommentForm";
import ServerImage from "../../components/ServerImage";
import { blogPageVocabulary } from "../../vocabulary/pages/Blog";
import { fakeComments } from "../../constants/fake-comments";
import { MessageBasic } from "../../components/messages/MessageBasic";


const BlogPage: React.FC = () => {

    const { language } = useTypedSelector( state => state.language);
    const location = useLocation()
    const passedData = location.state as BlogPageLocationI;
    const blog = passedData?.blog ? passedData.blog : null;   

    useEffect(() => {
        const animatedMobileArrows = new SlickArrowsMobileAnimation(style["blog__pics"], 600);
        return () => animatedMobileArrows.removeListenersAndTimers()
    }, []);

    if(!blog) {
        return (
            <MessageBasic 
                text={blogPageVocabulary.error[language]}
                position="centered-fixed"
                />
        )
    }

    
    const containerClass = classNames([
        style["tablet-desktop-container"],
        blog.pictures ? style.pictured : ''
    ])
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section className={style["main-section"]}>
            <header className={style["main-header"]}>
                <Container>
                    <div className={style["main-header__inner"]}>
                        <User 
                            isFake={false}
                            databaseSelector="id_user"
                            dbSelectorValue={blog.id_user}
                            className={style["main-header__user"]} 
                            theme="black"/>
                        <time className={style["main-header__date"]}>
                            {formatDate(blog.date)}
                        </time>
                    </div>
                </Container>
            </header>
            <div className={containerClass}>
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
                    {blog.pictures && 
                        <Slider {...sliderSettings} lazyLoad="progressive" className={style["blog__pics"]}>
                            {blog.pictures.split(" ").map((image) => {
                                return (
                                    <div className={classNames([style["blog__pics-item"]])} key={image}>
                                        <ServerImage 
                                            className={classNames([style["blog__pics-image"]])}
                                            imageName={image}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    }
                    <div className={style["blog__text-and-like-btn"]}>
                        <p className={style["blog__text"]}>
                            {blog.text}
                        </p>
                        <ButtonLike
                            theme="white"
                            isLiked={false}/>
                    </div>
                </section>
                <section className={style["comments"]}>
                    <header className={style["comments__header"]}>
                        <h2 className={style["comments__header-title"]}>
                            {blogPageVocabulary.commentsTitle[language]}
                        </h2>
                        <p className={style["comments__header-count"]}>12</p>
                    </header>
                    <div className={style["comments__list-wrapper"]}>
                        <ul className={style["comments__list"]}>
                            {fakeComments.length > 0 && 
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
                            })}
                            {fakeComments.length === 0 &&
                                <p className={style["comments__no-comments"]}>
                                    {blogPageVocabulary.noComments[language]}
                                </p>
                            }
                        </ul>
                    </div>
                    <AddCommentForm
                        theme="white"
                        blogId={blog.id_blog}
                        className={style["comments__form"]}
                        textAreaClassName={style["comments__form-textarea"]}/>
                </section>
            </div>
        </section>
    )
}


export default BlogPage