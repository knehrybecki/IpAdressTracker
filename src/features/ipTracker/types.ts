
export type NetworkInformationResponse = {
  ip: string
  continent_code: string
  continent_name: string
  country_code2: string
  country_code3: string
  country_name: string
  country_capital: string
  state_prov: string
  district: string
  city: string
  zipcode: string
  latitude: string
  longitude: string
  is_eu: boolean
  calling_code: string
  country_tld: string
  languages: string
  geoname_id: string
  isp: string
  connection_type: string
  organization: string
  currency: {
    code: string
    name: string
    symbol: string
  }
  time_zone: {
    name: string
    offset: number
    current_time: string
    current_time_unix: number
    is_dst: boolean
    dst_savings: number
  }
}
export type location = {
  country: string
  region: string
  city: string
  lat: string
  lng: string
  postalCode: string
  timezone: string
}

// {
//   "ip": "31.182.144.40",
//   "continent_code": "EU",
//   "continent_name": "Europe",
//   "country_code2": "PL",
//   "country_code3": "POL",
//   "country_name": "Poland",
//   "country_capital": "Warsaw",
//   "state_prov": "Woj. Łódzkie",
//   "district": "Lodz",
//   "city": "Lodz",
//   "zipcode": "90-554",
//   "latitude": "51.75788",
//   "longitude": "19.44370",
//   "is_eu": true,
//   "calling_code": "+48",
//   "country_tld": ".pl",
//   "languages": "pl",
//   "country_flag": "https://ipgeolocation.io/static/flags/pl_64.png",
//   "geoname_id": "10113298",
//   "isp": "Toya sp.z.o.o",
//   "connection_type": "",
//   "organization": "Toya sp.z.o.o",
//   "currency": {
//       "code": "PLN",
//       "name": "Zloty",
//       "symbol": "zł"
//   },
//   "time_zone": {
//       "name": "Europe/Warsaw",
//       "offset": 1,
//       "current_time": "2022-08-10 00:58:34.591+0200",
//       "current_time_unix": 1660085914.591,
//       "is_dst": true,
//       "dst_savings": 1
//   }
// }
