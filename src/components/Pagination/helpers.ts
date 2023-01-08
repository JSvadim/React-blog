// local imports
import { AssignTwoFirstItemsFuncI, AssignTwoLastItemsFuncI, GeneratePaginationItemsFuncI, GetFirstPageNumberFuncI } from "./type";


export const generatePaginationItems = (args: GeneratePaginationItemsFuncI): Array<"ellipsis" | number> => {
    const { amountOfItems, itemsPerPage, currentPageNumber } = args;

    const items: Array<"ellipsis" | number> = [];
    const pagesAmount = Math.ceil(amountOfItems / itemsPerPage);
    const maxCountOfItems = 9;
    
    const stopNumber = 
        pagesAmount >= maxCountOfItems ?
        maxCountOfItems : pagesAmount; // index on which for loop stops

    const firstPageNumber: number = getFirstPageNumber({
        pagesAmount, maxCountOfItems, currentPageNumber
    });
    
    assignTwoFirstItems({
        pagesAmount, currentPageNumber, firstPageNumber, items
    });

    assignTwoLastItems({
        pagesAmount, currentPageNumber, firstPageNumber, items, maxCountOfItems
    });

    // assigning numbers of pages
    for (let i = 0; i < stopNumber; i++) {
        if(i === 0 || i === 1 || i === 7 || i === 8) continue
        items[i] = firstPageNumber + i;
    }
    /* console.table({
        amountOfItems,
        pagesAmount,
        firstPageNumber,
        currentPageNumber,
        items
    }) */
    return items
}


function getFirstPageNumber(args: GetFirstPageNumberFuncI): number {
    const { maxCountOfItems, pagesAmount, currentPageNumber} = args;

    // if all pagination items are already visible
    if(pagesAmount < maxCountOfItems) {
        return 1;
    }
    // if we can't move pagination items backwards
    else if(currentPageNumber - 5 <= 0) {
        return 1;
    }
    // moving items forwards
    else if(currentPageNumber + 4 < pagesAmount) {
        return currentPageNumber - 4;
    }
    // if pagination items can't move forward
    else if(currentPageNumber + 5 > pagesAmount) {
        return pagesAmount - (maxCountOfItems - 1);
    }
    // default
    else {
        return 1
    }
}

function assignTwoFirstItems(args: AssignTwoFirstItemsFuncI): void {
    // if certain conditions are true function adds ellipsis and link to the
    // first page to two first pagination items
    const { pagesAmount, firstPageNumber, currentPageNumber, items } = args;

    if(pagesAmount <= 30) {
        items[0] = firstPageNumber;
        items[1] = firstPageNumber + 1;
    } 
    else if(currentPageNumber >= 20) {
        items[0] = 1;
        items[1] = "ellipsis";
    }
    else {
        items[0] = firstPageNumber;
        items[1] = firstPageNumber + 1;
    } 
}

function assignTwoLastItems(args: AssignTwoLastItemsFuncI): void {
    // if certain conditions are true function adds ellipsis and link to the
    // last page to two last pagination items
    const { pagesAmount, firstPageNumber, currentPageNumber, items, maxCountOfItems } = args;
    
    if(pagesAmount <= 30 && pagesAmount >= maxCountOfItems) {
        const lastNumber = firstPageNumber + (maxCountOfItems - 1);
        // last page
        items[lastNumber] = lastNumber;
        // page before last one
        items[lastNumber - 1] = lastNumber - 1;
    } 
    else if(pagesAmount <= 30 && pagesAmount < maxCountOfItems) {
        // last page
        items[pagesAmount - 1] = pagesAmount
        // page before last one
        items[pagesAmount - 2] = pagesAmount - 1;
    } 
    else if(pagesAmount > 30 && currentPageNumber < pagesAmount - maxCountOfItems * 2) {
        // last page
        items[pagesAmount] = pagesAmount;
        // page before last one
        items[pagesAmount - 1] = "ellipsis";
    }
    else {
        const lastNumber = firstPageNumber + (maxCountOfItems - 1);
        // last page
        items[lastNumber] = lastNumber;
        // page before last one
        items[lastNumber - 1] = lastNumber - 1;
    }
}