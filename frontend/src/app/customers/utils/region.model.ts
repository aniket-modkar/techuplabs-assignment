export interface RegionFetch {
  status: string;
  'status-code': number;
  version: string;
  access: string;
  total: number;
  offset: number;
  limit: number;
  data: {
    [key: string]: DZ;
  };
}

interface Data {
  DZ: DZ;
  AO: DZ;
  BJ: DZ;
  BW: DZ;
  BF: DZ;
  BI: DZ;
  CV: DZ;
  CM: DZ;
  CF: DZ;
  TD: DZ;
  KM: DZ;
  CD: DZ;
  CG: DZ;
  CI: DZ;
  DJ: DZ;
  EG: DZ;
  GQ: DZ;
  ER: DZ;
  SZ: DZ;
  ET: DZ;
  GA: DZ;
  GM: DZ;
  GH: DZ;
  GN: DZ;
  GW: DZ;
  KE: DZ;
  LS: DZ;
  LR: DZ;
  LY: DZ;
  MG: DZ;
  MW: DZ;
  ML: DZ;
  MR: DZ;
  MU: DZ;
  YT: DZ;
  MA: DZ;
  MZ: DZ;
  NA: DZ;
  NE: DZ;
  NG: DZ;
  RE: DZ;
  RW: DZ;
  SH: DZ;
  ST: DZ;
  SN: DZ;
  SC: DZ;
  SL: DZ;
  SO: DZ;
  ZA: DZ;
  SS: DZ;
  SD: DZ;
  TZ: DZ;
  TG: DZ;
  TN: DZ;
  UG: DZ;
  EH: DZ;
  ZM: DZ;
  ZW: DZ;
  AQ: DZ;
  BV: DZ;
  TF: DZ;
  HM: DZ;
  GS: DZ;
  AF: DZ;
  AM: DZ;
  AZ: DZ;
  BD: DZ;
  BT: DZ;
  IO: DZ;
  BN: DZ;
  KH: DZ;
  CN: DZ;
  GE: DZ;
  HK: DZ;
  IN: DZ;
  ID: DZ;
  JP: DZ;
  KZ: DZ;
  KP: DZ;
  KR: DZ;
  KG: DZ;
  LA: DZ;
  MO: DZ;
  MY: DZ;
  MV: DZ;
  MN: DZ;
  MM: DZ;
  NP: DZ;
  PK: DZ;
  PH: DZ;
  SG: DZ;
  LK: DZ;
  TW: DZ;
  TJ: DZ;
  TH: DZ;
  TL: DZ;
  TM: DZ;
  UZ: DZ;
  VN: DZ;
  BZ: DZ;
}

interface DZ {
  country: string;
  region: string;
}
