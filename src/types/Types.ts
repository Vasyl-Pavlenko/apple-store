export type Capacity = '64GB' | '128GB' | '256GB' | '512GB' | '1TB' | '2TB';

export enum Category {
  'Phones' = 'phones',
  'Tablets' = 'tablets',
  'Accessories' = 'accessories',
}

export type Color = (
  'black' |
  'white' |
  'green' |
  'yellow' |
  'purple' |
  'red' |
  'blue' |
  'gold' |
  'silver' |
  'coral' |
  'gray' |
  'pink' |
  'white titanium' |
  'black titanium' |
  'blue titanium' |
  'beige');

export type ColorAvailable = {
  [index in Color]: number;
};

export type Description = {
  title: string;
  text: string[];
};

export enum ErrorText {
  Unexpected = 'Oops! Something went wrong. Please try again later.',
  SearchError = 'We couldn\'t find any products matching your search.',
  PageLoad = 'Sorry, we couldn\'t load the page at the moment.',
  EmptyPage = 'There are no products available on this page.',
  EmptyCart = 'Your cart is empty. Start shopping now!',
  EmptyFavorites = 'Your favorites list is empty. Save your favorite products.',
  ProductNotFound = 'Sorry, the product you are looking for does not exist.'
}

export type ImgUrlParams = {
  namespaceId: string;
  category: Category.Phones | Category.Tablets;
  color: Color;
  number: number;
};

export enum ItemsOnPage {
  four = '4',
  eight = '8',
  sixteen = '16',
  thirtyTwo = '32',
  all = 'All',
}

export type Model = {
  capacity: Capacity;
  fullPrice: number;
  discountPrice: number;
  colorsAvailable: ColorAvailable;
};

export enum NavBarLink {
  Home = '/',
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export interface Product {
  namespaceId: string;
  productId: string;
  category: Category.Phones | Category.Tablets;
  name: string;
  fullPrice: number;
  discountPrice: number;
  screen: string;
  capacity: Capacity;
  color: Color;
  ram: Ram;
  year: number;
  count: number;
}

export interface ProductDescription {
  id: number;
  namespaceId: string;
  name: string;
  screen: string;
  resolution: string;
  processor: string;
  ram: Ram;
  camera: string;
  colors: Color[];
  capacities: Capacity[];
  models: Model[];
  description: Description[];
  year: number;
  category: Category.Phones | Category.Tablets;
}

export type Ram = '3GB' | '4GB' | '6GB' | '8GB' | '12GB' | '16GB';

export type Random = (min: number, max: number) => number;

export enum SortMethod {
  age = 'Newest',
  name = 'Name',
  price = 'Cheapest',
}

export type SortKeys = keyof typeof SortMethod;

export type Specs = {
  [i: string]: string | Capacity | Ram;
};

export type Styles = {
  default: {
    [key: string]: string;
  };
};

export type UpperFirst = (string: string) => string;

