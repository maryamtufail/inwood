
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

export interface SpecialProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  thumbnail: string;
}

export interface SpecialProductsResponse {
  products: SpecialProduct[];
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

export interface CategoryItem {
  id: number;
  name: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  items: CategoryItem[];
}

export type CategoriesResponse = Category[];
