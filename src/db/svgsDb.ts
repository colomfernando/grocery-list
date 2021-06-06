export interface ISvgsDb {
  [key: string]: string[];
}

const svgsDb: ISvgsDb = {
  eggs: ['eggs', 'egg'],
  milk: ['milk', 'milks'],
  cheese: ['cheese'],
};

export default svgsDb;
