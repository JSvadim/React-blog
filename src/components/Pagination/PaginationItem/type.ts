export interface PaginationItemComponentI {
    pageNumber?: number;
    onClick: Function;
    isActive?: boolean;
    isEllipsis?: boolean;
}