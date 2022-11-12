export interface BlogFormI {
    className?: string;
    requestURL: "/blog/add" | "/blog/update";
}

export interface FormPicturesI {
    "first-pic": null | File,
    "second-pic": null | File,
    "third-pic": null | File,
    "fourth-pic": null | File,
    "fifth-pic": null | File,
}

export type PicNames = "first-pic" | "second-pic" | "third-pic" | "fourth-pic" | "fifth-pic";