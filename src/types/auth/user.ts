export interface UserI {
    id: number;
    email: string;
    password: string;
    nickname: string;
    role: string;
    gender: string;
    birth_date: string | null;
    about: string | null;
    link_insta: string | null;
    link_vk: string | null;
    link_facebook: string | null;
    link_youtube: string | null;
}