export interface ISvgsDb {
  [key: string]: string[];
}

const svgsDb: ISvgsDb = {
  eggs: ['eggs', 'egg'],
  milk: ['milk', 'milks'],
  cheese: ['cheese', 'cheeses'],
  meat: ['meat', 'pork', 'porks', 'meats', 'ribs'],
  chicken: ['chicken', 'chickens'],
  pizza: ['pizza', 'pizzas'],
  burger: ['burger', 'burgers'],
  vegetables: [
    'vegetables',
    'vegetable',
    'spinach',
    'garlic',
    'carriot',
    'carrots',
    'broccoli',
    'kale',
    'Peas',
    'ginger',
    'potatoes',
    'potatoe',
  ],
  fruits: [
    'apples',
    'apple',
    'Blueberries',
    'banana',
    'bananas',
    'oranges',
    'orange',
    'mango',
    'mangos',
    'avocado',
    'lychee',
    'pineapple',
    'strawberries',
    'strawberrie',
    'cherrie',
    'Cherries',
    'watermelon',
    'kiwi',
  ],
  drink: ['coke', 'water', 'bottle', 'soda', 'drink', 'drinks'],
};

export default svgsDb;
