export type BrandConfig = {
  name: string;
  productName: string;
  userDataName: string;
};

type BrandName = 'kosmos' | 'pm-studio';

const brands = {
  kosmos: {
    name: 'kosmos',
    productName: 'KOSMOS Scaffold',
    userDataName: 'kosmos-scaffold',
  },
  'pm-studio': {
    name: 'pm-studio',
    productName: 'PM Studio Scaffold',
    userDataName: 'pm-studio-scaffold',
  },
} satisfies Record<string, BrandConfig>;

export function getBrandConfig(brandName = 'kosmos'): BrandConfig {
  if (brandName === 'pm-studio') {
    return brands[brandName];
  }

  return brands.kosmos;
}