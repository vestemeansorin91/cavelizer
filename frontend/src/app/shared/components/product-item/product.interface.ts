export interface ProductInterface {
  title: string;
  shortDescription: string;
  rating: number;
  price: number;
  priceDiscounted?: number;
  currency?: string;
  mainImageBlobUrl?: string;

  /* WIP */
  imagesBlobUrls?: string[];
  longDescription?: string;
  isFreeShipping?: boolean;
  deliveryInDays?: number;
  metadata?: {
    [key: string]: any;
  };
  stock?: number;
  category?: Category;
  brand?: Brand;
  internalCode?: string;
  locationOrigin?: string;
  reviews?: Review[];
  questions?: Question[];
  relatedProducts?: string[]; // _id []
  tags?: Tag[];
  isArchived?: boolean;
  isPublished?: boolean;
  views?: number;
}

export interface Tag {
  tag: string;
}
export interface Category {}
export interface Brand {}
export interface Review {}
export interface Question {}

export enum FreshnessMetadata {
  new = 'new',
  expired = 'expired',
  used = 'used'
}
