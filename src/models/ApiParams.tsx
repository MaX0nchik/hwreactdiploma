export interface IApiParams {
    categoryID?:number,
    offset?:number,
    query?:string,
}

export const setApiParamsString = ({categoryID,offset,query}: IApiParams)  => {
    const url = [
        categoryID || offset || query ? "?" : "",
        categoryID ? `&category=${categoryID}` : "",
        offset ? `&offset=${offset}` : "",
        query ? `&q=` + encodeURIComponent(query) : "", 
    ].join("")
    .replace("?&","?");
    return url;
}