export interface BlogFormDataI {
    title: string;
    text: string;
    "first-pic": File | null;
    "second-pic": File | null;
    "third-pic": File | null;
    "fourth-pic": File | null;
    "fifth-pic": File | null;
}
export interface BlogI {
    title: string;
    text: string;
    pictures: string | null;
    id_user: number;
    id_blog: number;
    date: Date;
}