// local imports
import { GeneratePaginationItemsFuncI } from "./type";


export const generatePaginationItems = (amountOfItems: number, itemsPerPage: number, currentPageNumber: number): Array<"ellipsis" | number> => {
    
    const items: Array<"ellipsis" | number> = [];
    const pagesAmount = Math.ceil(amountOfItems / itemsPerPage);
    const maxCountOfItems = 7;
    const stopNumber = 
        pagesAmount > maxCountOfItems ?
        maxCountOfItems : pagesAmount; // index on which for loop stops

    // finding out number of first pagination item
    let firstPageNumber: number;
    if(currentPageNumber - 2 > 0 && currentPageNumber + 2 < pagesAmount) {
        firstPageNumber = currentPageNumber - 2;
    }else if(currentPageNumber - 2 <= 0) {
        firstPageNumber = 1;
    }else if(currentPageNumber + 2 >= pagesAmount) {
        firstPageNumber = pagesAmount - maxCountOfItems + 1;
    }else {
        firstPageNumber = 1;
        // this "else" is for typescript
        // I think I thought about all possible variants, so everything have to work well.
    }

    // assigning ellipsis or pagination item to 5th arrays element if it exists
    if(pagesAmount > 10) {
        items[5] = "ellipsis";
    }else if(pagesAmount < 10 && pagesAmount >= 5) {
        items[5] = firstPageNumber + 5
    }

    // assigning numbers of pages
    for (let i = 0; i < stopNumber; i++) {
        if(i === 5) continue
        items[i] = i === 6 ? pagesAmount : firstPageNumber + i;
    }
    return items
}


            // if currentPageNumber - 2 > 0 && currentPageNumber + 2 < pagesAmount
            // first page = currentPageNumber - 2

            // else if currentPageNumber - 2 <= 0 
            // first page = 1

            // else if currentPageNumber + 2 >= pagesAmount
            // firstPage = pagesAmount - maxCountOfItems + 1

            /*  console.table({
                "pageNumber": pageNumber,
                "currentPageNumber": props.currentPageNumber,
            }) */
            // I can show pagination with ellipsis if pagesAmount is > 10
            // And without ellipsis if pagesAmount is <= 7

            // Active item should be in the middle, so user can go to prev and to next pages
            // but if we on last page active item is last item
            // if we on first page active item is first item


            // if pagesAmount is > 10 assign to 5 item ellipsis
            // if pagesAmount is < 10 && >= 5 assign to 5 item item 
            // two above actions are done before cycle

            
            // also before cycle I need to find out a number of first page