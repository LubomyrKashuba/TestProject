export interface SizeI {
    width: number,
    height: number,
}

export interface ProductI {
    _id: string,
    imgUrl: string,
    name: string,
    count: number,
    size: SizeI,
    weight: string,
    comments: [string],
}