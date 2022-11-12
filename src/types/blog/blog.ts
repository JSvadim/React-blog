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
    pic_1: string;
    pic_2: string;
    pic_3: string;
    pic_4: string;
    pic_5: string;
    id_user: number;
    id_blog: number;
    date: Date;
}