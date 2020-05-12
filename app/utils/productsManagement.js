import awsconfig from 'awsconfig.json';
import request from 'utils/request';

async function getUserProducts(authKey) {
  const url = `${awsconfig.api.url}/products`;
  const options = {
    method: 'post',
    headers: {
      Authorization: authKey,
    },
  };

  const products = await request(url, options);

  return products;
}

async function startTracking({ authKey, shop, articul, locale }) {
  const url = `${awsconfig.api.url}/products/start-tracking`;
  const options = {
    method: 'post',
    headers: {
      Authorization: authKey,
    },
    body: JSON.stringify({ shop, articul, locale }),
  };

  const item = await request(url, options);

  return item;
}

async function finishTracking({ authKey, id }) {
  const url = `${awsconfig.api.url}/products/finish-tracking`;
  const options = {
    method: 'post',
    headers: {
      Authorization: authKey,
    },
    body: JSON.stringify({ id }),
  };

  await request(url, options);
}

async function getProductInfo({ shop, articul, locale }) {
  const url = `${awsconfig.api.url}/products/get-product-info`;
  const options = {
    method: 'post',
    body: JSON.stringify({ shop, articul, locale }),
  };

  const item = await request(url, options);

  return item;
}

async function getStat({ id, authKey }) {
  const url = `${awsconfig.api.url}/products/get-stat-for-day`;
  const options = {
    method: 'post',
    headers: {
      Authorization: authKey,
    },
    body: JSON.stringify({ id }),
  };

  const response = await request(url, options);

  return response;
}

export { getUserProducts, startTracking, getProductInfo, finishTracking, getStat };
