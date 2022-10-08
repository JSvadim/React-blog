// local imports
import { BlogI } from "../../types/blog/blog";
import style from "./style.module.scss";
import { BlogPageProps } from "./type";
import BlogImage from "./BlogImage";
import Container from "../../components/Container";

const BlogPage: React.FC<BlogPageProps> = (props) => {
    if(props.blog !== null) {
        const { title, text, date, id_blog, 
            pic_1, pic_2, pic_3, pic_4, pic_5 } = props.blog;
        const pictures = [pic_1, pic_2, pic_3, pic_4, pic_5];
        return (
            <Container>
                <h1>Blog title: {title}</h1>
                <p>Blog text: {text}</p>
                <p>Publication date: {date}</p>
                <p>Blog id: {id_blog}</p>
                {pictures.map((pic, i) => {
                    if(pic === "NULL") return
                    return (
                        <div>
                            <p>Blog pic {i}:</p>
                            <BlogImage pictureName={pic}/>
                        </div>
                    )
                })}
            </Container>
        )
    }
    return <p>Error</p>
}


export default BlogPage