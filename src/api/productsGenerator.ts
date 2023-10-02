/* eslint-disable max-len */

import {
  Category,
  Product,
  ProductDescription,
  Ram,
  Capacity,
  Color,
  UpperFirst
} from '../types';

import { saveToFile } from './saveToFile';

const upperFirst: UpperFirst = require(
  '../../node_modules/lodash/upperFirst',
);

type ClassParams = {
  namespaceId: string;
  name: string;
  fullPrice: number;
  discountPrice: number;
  screen: string;
  capacity: Capacity;
  color: Color;
  ram: Ram;
  year: number;
  count: number;
  category: Category.Phones | Category.Tablets;
};

export class ProductModel implements Product {
  productId: string;
  name: string;
  fullPrice: number;
  discountPrice: number;
  screen: string;
  capacity: Capacity;
  color: Color;
  ram: Ram;
  year: number;
  count: number;
  namespaceId: string;
  category: Category.Phones | Category.Tablets;

  constructor({
    name,
    fullPrice,
    discountPrice,
    screen,
    capacity,
    color,
    ram,
    year,
    count,
    namespaceId,
    category,
  }: ClassParams) {
    this.category = category;
    this.namespaceId = namespaceId;
    this.capacity = capacity;
    this.color = color;
    this.name = this.getName(name);
    this.productId = this.getId();
    this.fullPrice = fullPrice;
    this.discountPrice = discountPrice;
    this.screen = screen;
    this.ram = ram;
    this.year = year;
    this.count = count;
  }

  getName(name: string) {
    return `${name} ${this.capacity} ${upperFirst(this.color)}`;
  }

  getId() {
    return this.name.toLowerCase().split(' ').join('-');
  }
}

export function getProducts(device: ProductDescription) {
  const devices: ProductModel[] = [];

  device.models.forEach((model) => {
    Object.keys(model.colorsAvailable).forEach((color) => {
      devices.push(
        new ProductModel({
          namespaceId: device.namespaceId,
          name: device.name,
          fullPrice: model.fullPrice,
          discountPrice: model.discountPrice,
          screen: device.screen,
          capacity: model.capacity,
          color: color as Color,
          ram: device.ram,
          year: device.year,
          count: model.colorsAvailable[color as Color],
          category: device.category,
        }),
      );
    });
  });

  return devices;
}

const iphone11: ProductDescription = require('./products/apple-iphone-11.json');
const iphone12: ProductDescription = require('./products/apple-iphone-12.json');
const iphone13Mini: ProductDescription = require('./products/apple-iphone-13-mini.json');
const iphone14Pro: ProductDescription = require('./products/apple-iphone-14-pro.json');
const iphone14ProMax: ProductDescription = require('./products/apple-iphone-14-pro-max.json');
const iphone15: ProductDescription = require('./products/apple-iphone-15.json');
const iphone15Pro: ProductDescription = require('./products/apple-iphone-15-pro.json');
const iphoneSe2: ProductDescription = require('./products/apple-iphone-se-2.json');
const iphoneXr: ProductDescription = require('./products/apple-iphone-xr.json');

const ipadAir4: ProductDescription = require('./products/apple-ipad-air-4.json');
const ipadMini6: ProductDescription = require('./products/apple-ipad-mini-6.json');

const products = [
  iphone11,
  iphone12,
  iphone13Mini,
  iphone14Pro,
  iphone14ProMax,
  iphone15,
  iphone15Pro,
  iphoneSe2,
  iphoneXr,
  ipadAir4,
  ipadMini6,
];

const devices: ProductModel[] = [];

products.forEach((product) => {
  devices.push(...getProducts(product));
});

saveToFile({
  fileName: 'products.json',
  data: devices,
});
