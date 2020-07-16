# MARVEL Heroes App

## General Info

Hi everyone!
This is Marvel Heroes App! A personal project that I'm building with React, Redux, Hooks, Jest, and more!

## Technologies

Project is created with:

- [Create React App](https://create-react-app.dev/)
- React: ^16.13.1
- Redux ^4.0.5
- node-sass: ^4.14.1
- animate.css: ^4.1.0
- axios: ^0.19.2
- md5: ^2.2.1
- Jest: ^4.2.4
- enzyme: ^3.11.0
- enzyme-to-json: ^3.5.0
- testing-library/react-hooks: ^3.3.0

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
