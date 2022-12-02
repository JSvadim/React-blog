export interface BlogResponseI {
    title: string;
    text: string;
    pictures: string | null;
    id_user: number;
    id_blog: number;
    date: Date;
}