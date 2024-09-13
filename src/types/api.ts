
export interface Product {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
}

export interface ProductsResponse {
    products: Product[];
}
