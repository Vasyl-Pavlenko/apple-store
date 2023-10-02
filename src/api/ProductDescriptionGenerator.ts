/* eslint-disable global-require */

/* eslint-disable max-len */

import {
  Category,
  Model,
  ProductDescription as Product,
  Ram,
  Capacity,
  ColorAvailable,
  Description,
  Color,
  Random
} from '../types';

import { saveToFile } from './saveToFile';

const random: Random = require('../../node_modules/lodash/random');

type ClassParams = {
  model: string;
  screen: string;
  resolution: string;
  processor: number;
  ram: Ram;
  colors: Color[];
  camera: string;
  basePrice: number;
  year: number;
  category: Category.Phones | Category.Tablets;
};

const tabletDescription: Description[] = [
  {
    title: 'Immersive Visual Experience',
    text: [
      'Experience the beauty all around with iPad\'s Liquid Retina display, featuring advanced technologies like True Tone, P3 wide color, and an anti-reflective coating. Whether you\'re reading, watching, or creating, the stunning display brings content to life.',
      'Touch ID is seamlessly integrated into the button, providing secure and convenient fingerprint authentication for unlocking your iPad, signing in to apps, and making secure payments with Apple Pay. iPad is available in a range of gorgeous colors to suit your style.',
    ],
  },
  {
    title: 'Powerful Performance',
    text: [
      'With the latest breakthrough chip, iPad offers up to 60 percent faster performance than its predecessor, making it a creative and mobile gaming powerhouse. You can smoothly multitask between powerful apps and enjoy graphics-intensive games, taking your creativity to new heights.',
      'Apps like SketchUp run effortlessly, letting you explore your creative potential like never before.',
    ],
  },
  {
    title: 'Enhanced Camera Capabilities',
    text: [
      'The 12MP Ultra Wide front camera introduces Center Stage, making video calls more engaging and content creation more enjoyable. It automatically adjusts the frame to keep you centered, even as you move around. When others join or leave the frame, the view dynamically adapts, ensuring you stay focused on the conversation.',
      'Capture stunning photos and shoot 4K videos with the 12MP Wide back camera. With the powerful Image Signal Processor (ISP), iPad now supports Smart HDR, enhancing the beauty of your photos.',
    ],
  },
];

const phoneDescription: Description[] = [
  {
    title: 'Revolutionary Innovation',
    text: [
      'Experience a groundbreaking way to interact with iPhone, featuring innovative safety features designed to save lives. Explore the possibilities of an advanced camera system that captures mind-blowing detail, all powered by the ultimate smartphone chip.',
      'iPhone is meticulously designed to prioritize your privacy, empowering you with control over what you share and with whom.',
    ],
  },
  {
    title: 'Cutting-Edge Camera System',
    text: [
      'Introducing the first camera system that combines cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene, even in drastically lower light conditions. Shoot the highest-quality video in a smartphone and edit it with the same familiar tools you love for photos.',
      'Enhance your photography with Photographic Styles. Choose from various looks like Warm or Cool, and let iPhone apply adjustments selectively to keep skies and skin tones natural, automatically achieving the look you desire.',
    ],
  },
  {
    title: 'Extended Battery Life',
    text: [
      'Experience extended battery life thanks to a highly efficient chip, an enhanced battery, and the power of iOS 16 working in harmony. When it"s time to recharge, simply place your iPhone on a wireless charger or use a 20W or higher adapter for lightning - fast charging, going from zero to up to 50 percent charge in just 30 minutes.'
    ],
  },
{
  title: '5G-Powered Performance',
    text: [
      'From lightning-fast downloads to seamless streaming, gaming with minimal lag, and high-definition FaceTime and SharePlay on the go, 5G technology transforms your iPhone experience. Enjoy faster connections and more fun across all your mobile activities.',
    ],
  },
];

export class ProductDescription implements Product {
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
  static idS: number[] = [];

  constructor({
    model,
    screen,
    resolution,
    processor,
    ram,
    camera,
    colors,
    basePrice,
    year,
    category,
  }: ClassParams) {
    this.id = this.getID();
    this.category = category;
    this.year = year;
    this.namespaceId = `apple-${category === 'phones' ? 'iphone' : 'ipad'}-${model.toLocaleLowerCase().split(' ').join('-')}`;
    this.name = `Apple ${category === 'phones' ? 'iPhone' : 'iPad'} ${model}`;
    this.screen = screen;
    this.resolution = resolution;
    this.processor = `Apple A${processor} Bionic`;
    this.ram = ram;
    this.camera = camera;
    this.colors = colors;
    this.capacities = this.getCapacity();
    this.models = this.getModels(basePrice);
    this.description = category === 'phones'
      ? phoneDescription
      : tabletDescription;
  }

  getCapacity(): Capacity[] {
    return this.namespaceId.includes('pro')
      ? ['128GB', '256GB', '512GB', '1TB', '2TB']
      : ['64GB', '128GB', '256GB'];
  }

  getID(): number {
    const id = random(1, 999999);

    if (!ProductDescription.idS.includes(id)) {
      ProductDescription.idS.push(id);

      return id;
    }

    return this.getID();
  }

  getPrice(basePrice: number): [number, number][] {
    let price = basePrice;
    const discount = 10;
    const coefficient = 1.2;
    const prices: [number, number][] = [];

    this.capacities.forEach(() => {
      const discountPrice = this.year === 2023
        ? price
        : Math.trunc(price - (price * discount) / 100);

      prices.push([price, discountPrice]);

      price = Math.trunc(price * coefficient);
    });

    return prices;
  }

  getModels(basePrice: number): Model[] {
    const getRemain = () => (random(0, 100) >= 80 ? 0 : random(1, 100));
    const models: Model[] = [];
    const colorsAvailable = () => (this.colors.reduce(
      (acc, color) => (
        { ...acc, [color]: getRemain() }
      ),
      {} as ColorAvailable,
    ));

    this.capacities.forEach((capacity, index) => {
      const model = {
        capacity,
        fullPrice: this.getPrice(basePrice)[index][0],
        discountPrice: this.getPrice(basePrice)[index][1],
        colorsAvailable: colorsAvailable(),
      };

      models.push(model);
    });

    return models;
  }
}

const phoneModels: ClassParams[] = [
  {
    model: '11',
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 13,
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    colors: [
      'black',
      'white',
      'green',
      'yellow',
      'purple',
      'red',
    ],
    basePrice: 500,
    year: 2019,
    category: Category.Phones,
  },
  {
    model: '12',
    screen: "6.1' IPS",
    resolution: '2532x1170',
    processor: 14,
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    colors: [
      'black',
      'blue',
      'green',
      'red',
      'white',
      'purple',
    ],
    basePrice: 582,
    year: 2020,
    category: Category.Phones,
  },
  {
    model: '13 Mini',
    screen: "5,4' IPS",
    resolution: '2340 x 1080',
    processor: 15,
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    colors: [
      'black',
      'blue',
      'green',
      'pink',
      'red',
      'white',
    ],
    basePrice: 650,
    year: 2021,
    category: Category.Phones,
  },
  {
    model: '14 Pro',
    screen: "6,1' IPS",
    resolution: '2556 x 1179',
    processor: 16,
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP',
    colors: [
      'black',
      'gold',
      'purple',
      'silver',
    ],
    basePrice: 1255,
    year: 2022,
    category: Category.Phones,
  },
  {
    model: '14 Pro Max',
    screen: "6,7' IPS",
    resolution: '2796x1290',
    processor: 16,
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12MP',
    colors: [
      'black',
      'gold',
      'purple',
      'silver',
    ],
    basePrice: 1951,
    year: 2022,
    category: Category.Phones,
  },
  {
    model: '15',
    screen: "6,1' IPS",
    resolution: '	2556x1179',
    processor: 16,
    ram: '6GB',
    camera: '48 Mp + 12 Mp',
    colors: [
      'black',
      'blue',
      'green',
      'pink',
      'yellow',
    ],
    basePrice: 1800,
    year: 2023,
    category: Category.Phones,
  },
  {
    model: '15 Pro',
    screen: "6,1' IPS",
    resolution: '	2556x1179',
    processor: 16,
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12MP',
    colors: [
      'black titanium',
      'blue titanium',
      'white titanium',
      'beige'
    ],
    basePrice: 2200,
    year: 2023,
    category: Category.Phones,
  },
  {
    model: 'SE 2',
    screen: "4,7' IPS",
    resolution: '1334 x 750',
    processor: 13,
    ram: '3GB',
    camera: '12 Mp',
    colors: [
      'black',
      'red',
      'white',
    ],
    basePrice: 325,
    year: 2020,
    category: Category.Phones,
  },
  {
    model: 'XR',
    screen: "6,1' IPS",
    resolution: '1792 x 828',
    processor: 12,
    ram: '4GB',
    camera: '12 Mp',
    colors: [
      'black',
      'blue',
      'coral',
      'red',
      'white',
    ],
    basePrice: 280,
    year: 2018,
    category: Category.Phones,
  },
];

const tabletModels: ClassParams[] = [
  {
    model: 'Mini 6',
    screen: "8,3' IPS",
    resolution: '2266 x 1488',
    processor: 15,
    ram: '4GB',
    camera: '12 Mp',
    colors: [
      'gold',
      'gray',
      'pink',
      'purple',
    ],
    basePrice: 575,
    year: 2021,
    category: Category.Tablets,
  },
  {
    model: 'Air 4',
    screen: "10,9' IPS",
    resolution: '2360 x 1640',
    processor: 14,
    ram: '4GB',
    camera: '12 Mp',
    colors: [
      'gold',
      'gray',
      'blue',
      'green',
      'silver',
    ],
    basePrice: 520,
    year: 2020,
    category: Category.Tablets,
  },
];

export const phones = phoneModels.map((phone) => new ProductDescription(phone));

export const tablets = tabletModels.map((tablet) => new ProductDescription(tablet));

phones.forEach((product) => {
  saveToFile({
    fileName: `${product.namespaceId}.json`,
    data: product,
  });
});

tablets.forEach((product) => {
  saveToFile({
    fileName: `${product.namespaceId}.json`,
    data: product,
  });
});
