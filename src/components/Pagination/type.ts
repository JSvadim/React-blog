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