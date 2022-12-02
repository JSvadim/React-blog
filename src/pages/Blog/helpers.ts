export const formatDate = (date: Date): string => {
    const dateFromServer = new Date(date);
    const year = dateFromServer.getUTCFullYear();
    const month = dateFromServer.getUTCMonth() + 1;
    const day = dateFromServer.getUTCDate();
    return [day, month, year].join('.');
}
