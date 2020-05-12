export default function request(url, options) {
  return fetch(url, options).then(async x => {
    const resJson = await x.json();

    if (x.status !== 200) {
      throw resJson;
    }

    return resJson;
  });
}
