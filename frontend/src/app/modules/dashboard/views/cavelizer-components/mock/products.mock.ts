import { ProductInterface } from '../../../../../shared/components/product-item/product.interface';

export const PRODUCTS_MOCK: ProductInterface[] = [
  {
    title: 'Soseta neagra',
    shortDescription: 'O pereche de sosete frumoase din bumbac',
    price: 30,
    priceDiscounted: 25,
    rating: 4.4,
    currency: 'RON',
    mainImageBlobUrl:
      'https://gomagcdn.ro/domains/funkysocks.ro/files/product/large/set-10-perechi-sosete-invizibile-talpici-cu-silicon-175-9808.jpeg'
  },
  {
    title: 'Geaca rosie',
    shortDescription: 'Geaca rosie cu gauri mai putine',
    price: 37,
    rating: 3.8,
    currency: 'RON',
    mainImageBlobUrl:
      'https://img1.theiconic.com.au/gcJXTbnMQsOAv3i5WaX-A86XwC4=/fit-in/406x512/filters:fill(ffffff):quality(90)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftommy-hilfiger-3530-4223951-1.jpg'
  }
];
