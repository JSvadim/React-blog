export interface AddBlogFormComponentI {
    className?: string;
}

export interface AddBlogFormDataI extends AddBlogFormPicturesI {
    title: string;
    text: string;
}

export interface AddBlogFormPicturesI {
    "first-pic": null | File,
    "second-pic": null | File,
    "third-pic": null | File,
    "fourth-pic": null | File,
    "fifth-pic": null | File,
}

export type PicNames = "first-pic" | "second-pic" | "third-pic" | "fourth-pic" | "fifth-pic";