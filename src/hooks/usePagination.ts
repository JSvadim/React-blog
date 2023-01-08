// hooks
import { useState } from "react";
import { UsePaginationHookI } from "../types/hooks/usePaginationType";
import { BlogResponseI } from "../types/server-responses/blog";


function getInitialPageNumber(localStorageVariableName: string): number {
    const localStorageValue = localStorage.getItem(localStorageVariableName);
    return localStorageValue ? Number(localStorageValue) : 1
}


export function usePagination(props: UsePaginationHookI) {
    const { localStorageVariableName, itemsPerPage } = props;
    const [ pageNumber, setPageNumber ] = useState<number>(() => getInitialPageNumber(localStorageVariableName));


    function paginationClickHandler(numberOfPage: number) {
        setPageNumber(numberOfPage);
        localStorage.setItem(localStorageVariableName, String(numberOfPage));
    }

    
    function sliceBlogs(blogs: Array<BlogResponseI>) {
        const firstBlogNumber = pageNumber * itemsPerPage - itemsPerPage;
        const lastBlogNumber = pageNumber * itemsPerPage;
        return blogs.slice(firstBlogNumber, lastBlogNumber);
    }

    return [ pageNumber, paginationClickHandler, sliceBlogs ] as const
}