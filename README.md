# MARVEL Heroes App

Hi everyone, I'm mading this application using react!

Installation

```bash
 yarn install
```

```
 yarn start
```

## Information

### API

I'm consuming data from the [Marvel's Official API](https://developer.marvel.com/)
You must register first and use the API key provided

### Axios

I'm using [axios](https://www.npmjs.com/package/axios) that provides me the promise based client and with this I created the asynchronous functions that made the GET requests to the API.

```javascript
export const getSuperHeroById = async () => {
  const url = `${API_URL}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
  const apiInstance = await axios.get(url);
  const { data } = apiInstance.data;
  return data;
};
```

### AnimateCSS

[A practical library](https://animate.style/) that provides a set of very efficient CSS animations.😎
