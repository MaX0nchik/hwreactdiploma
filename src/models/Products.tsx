export interface IProducts {
    id: number,
    category?: number,
    title: string,
    images: string[],
    sku?:number,
    manufacturer?:string;
    color?: string,
    material?: string;
    reason?: string,
    season?: string,
    heelSize?: string,
    price?: number,
    oldPrice?: number,
    sizes?: ISizes[],

}

export interface ISizes {
    size?:string,
    available:boolean,
}