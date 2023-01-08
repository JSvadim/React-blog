export interface PaginationComponentI {
    className?: string;
    amountOfItems: number;
    itemsPerPage: number;
    onClick: Function;
    currentPageNumber: number;
}

export interface GeneratePaginationItemsFuncI {
    amountOfItems: number;
    itemsPerPage: number;
    currentPageNumber: number;
}

export interface GetFirstPageNumberFuncI {
    currentPageNumber: number;
    maxCountOfItems: number;
    pagesAmount: number;
}

export interface AssignTwoFirstItemsFuncI {
    currentPageNumber: number;
    firstPageNumber: number;
    pagesAmount: number;
    items: Array<"ellipsis" | number>;
}

export interface AssignTwoLastItemsFuncI {
    currentPageNumber: number;
    maxCountOfItems: number;
    firstPageNumber: number;
    pagesAmount: number;
    items: Array<"ellipsis" | number>;
}