// local imports 
import Blog from "../Blog";
import { BlogsListComponentI } from "./type";


export const BlogsList: React.FC<BlogsListComponentI> = (props) => {
    return (
        <ul className={props.listClassName}>
            {props.blogs.map(blog => {
                return (
                    <li className={props.itemClassName} key={blog.id_blog}>
                        <Blog
                            blog={blog}
                            isFake={blog?.fake ? true : false}/>
                    </li>
                )
            })}
        </ul>
    )
}