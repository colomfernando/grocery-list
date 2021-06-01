export interface ISvgs {
  [key: string]: {
    viewBox: string;
    w: number;
    h: number;
    paths: string[];
  };
}

const svgs: ISvgs = {
  eggs: {
    viewBox: '0 0 460.007 460.007',
    w: 50,
    h: 50,
    paths: [
      'M330.4 61.203c-38.4 0-76.8 43.2-100 89.6-25.6-51.2-64.8-89.6-100-89.6-60 0-130.4 110.4-130.4 203.2 0 67.2 44.8 134.4 129.6 134.4 44.8 0 78.4-18.4 100-46.4 28 33.6 69.6 46.4 100.8 46.4 84.8 0 129.6-68 129.6-134.4.8-92.8-69.6-203.2-129.6-203.2zm-200 321.6c-54.4 0-113.6-36.8-113.6-118.4 0-84 62.4-187.2 113.6-187.2 32.8 0 70.4 42.4 92.8 95.2v.8c12.8 29.6 20.8 61.6 20.8 92 0 80.8-59.2 117.6-113.6 117.6zm200 0c-28.8 0-67.2-12-91.2-44 13.6-22.4 20-48.8 20-74.4 0-31.2-8-64.8-20.8-95.2 24.8-54.4 61.6-92.8 92-92.8 51.2 0 113.6 103.2 113.6 187.2.8 82.4-58.4 119.2-113.6 119.2z',
      'M60 193.203c-4-1.6-8.8.8-10.4 4.8-.8 2.4-23.2 60.8-4.8 101.6 1.6 2.4 4 4 7.2 4 .8 0 2.4 0 3.2-.8 4-1.6 5.6-6.4 4-10.4-16-34.4 4.8-88 5.6-88.8 1.6-4-.8-8.8-4.8-10.4zM319.2 106.003c-3.2-4-8-4-11.2-.8-1.6 1.6-46.4 46.4-45.6 91.2 0 4 4 8 8 8 4.8 0 8-4 8-8-.8-37.6 40-79.2 40.8-79.2 3.2-3.2 3.2-8 0-11.2z',
    ],
  },
  search: {
    viewBox: '0 0 512.005 512.005',
    w: 50,
    h: 50,
    paths: [
      'M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z',
    ],
  },
};

export default svgs;
