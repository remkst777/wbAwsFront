import by from 'images/by.svg?inline';
import ru from 'images/ru.svg?inline';
import ua from 'images/ua.svg?inline';
import kz from 'images/kz.svg?inline';
import en from 'images/en.svg?inline';

import wildberries from 'images/wb.png';
import lamoda from 'images/lamoda.png';

const countries = {
  by: ['lamoda', 'wildberries'],
  ru: ['lamoda', 'wildberries'],
  ua: ['lamoda'],
  kz: ['lamoda', 'wildberries'],
};

const flags = {
  by,
  ru,
  ua,
  kz,
  en,
};

const logos = {
  wildberries,
  lamoda,
};

const countriesWithShops = Object.keys(countries);

const shops = ['lamoda', 'wildberries'];

export { countries, countriesWithShops, shops, flags, logos };
