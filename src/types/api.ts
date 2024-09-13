
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


export interface Testimonial {
   
    id: number;
    name: string;
    qoute: string;
    date: string;
    rating: number;
    email: string;
    location: string;
    avatar: string;
  }
  

  export interface TestimonialsResponse {
    testimonials: Testimonial[];
  }