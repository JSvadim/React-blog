export const formatDate = (date: Date): string => {
    const dateFromServer = new Date(date);
    const year = dateFromServer.getUTCFullYear();
    const month = dateFromServer.getUTCMonth() + 1;
    const day = dateFromServer.getUTCDate();
    return [day, month, year].join('.');
}


export class SlickArrowsMobileAnimation {

    /* This class adds listeners to slider arrows and every time arrow is
    clicked "clicked" class is added. It's required for clicking animation on 
    mobile devices. "clicked" class is removed after animationTime passed to 
    constructor is over. */

    // *** call removeListenersAndTimers when component will unmount ***

    prevArrow: Element | null;
    nextArrow: Element | null;
    prevArrowTimer: null | ReturnType<typeof setTimeout> = null;
    nextArrowTimer: null | ReturnType<typeof setTimeout> = null;
    animationTime: number;
    addingClass: "clicked";

    constructor(sliderClassName: string, animationTime: number) {
        this.prevArrow = document.querySelector(`.${sliderClassName} .slick-prev`);
        this.nextArrow = document.querySelector(`.${sliderClassName} .slick-next`);
        this.animationTime = animationTime;
        this.addingClass = "clicked";
        this.setListeners = this.setListeners.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.removeListenersAndTimers = this.removeListenersAndTimers.bind(this);

        this.setListeners();
    }

    clickHandler(arrowType: "prev" | "next") {

        const arrow = this[`${arrowType}Arrow`];
        arrow?.classList.add(this.addingClass);

        this[`${arrowType}ArrowTimer`] = setTimeout(() => {
            arrow?.classList.remove(this.addingClass);
        }, this.animationTime);

    }

    setListeners() {
        if(this.prevArrow) {
            this.prevArrow.addEventListener("click", e => {this.clickHandler("prev")});
        }
        if(this.nextArrow) {
            this.nextArrow.addEventListener("click", e => {this.clickHandler("next")});
        }
    }

    removeListenersAndTimers() {
        if(this.prevArrow) {
            this.prevArrow.removeEventListener("click", e => {this.clickHandler("prev")});
        }
        if(this.nextArrow) {
            this.nextArrow.removeEventListener("click", e => {this.clickHandler("next")});
        }
        if(this.prevArrowTimer) {
            clearTimeout(this.prevArrowTimer);
        }
        if(this.nextArrowTimer) {
            clearTimeout(this.nextArrowTimer);
        }
    }
}
