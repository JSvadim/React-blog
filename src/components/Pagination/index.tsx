// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { PaginationItem } from "./PaginationItem";
import { PaginationComponentI } from "./type";
import { generatePaginationItems } from "./helpers";


const Pagination: React.FC<PaginationComponentI> = (props) => {

    const navClassName = classNames([style.nav || '', props.className || '']);
    const paginationItemsNumbers = generatePaginationItems({
        amountOfItems: props.amountOfItems,
        itemsPerPage: props.itemsPerPage,
        currentPageNumber: props.currentPageNumber});


    return (
        <nav className={navClassName}>
            <ul className={style["list"]}>
               {paginationItemsNumbers.map((item, index) => {
                    const isActive = 
                        typeof(item) === "number" &&
                        item === props.currentPageNumber ?
                        true : false;
                    
                    return <PaginationItem
                                key={index}
                                isActive={isActive}
                                isEllipsis={typeof(item) === "number" ? false : true}
                                pageNumber={typeof(item) === "number" ? item : 0}
                                onClick={props.onClick}/>
               })} 
            </ul>
        </nav>
    )
}

export default Pagination
