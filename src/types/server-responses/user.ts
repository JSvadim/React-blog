export interface UserResponseI {
    id: number;
    email: string;
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