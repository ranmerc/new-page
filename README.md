# New Page

For Home or New Tab. Made with NextJS. Used to be deployed on Vercel once, but due to recent changes in Reddit's API pricing model, it's not really feasible anymore.

## Screenshots

![Desktop Screenshot](./screenshots/screenshot.png)

## Local Setup

Follow the steps below to run locally -

```console
npm install
```

then

```console
npm run dev
```

`nodemon` or similar tool can be used to run the service indefinitely. Or `node-auto-launch` to start it at boot.

## Environment Variables

- `OWP_API` - OpenWeatherMap API Key

- `SUBREDDITS` - Space separated list of subreddit names

- `NEXT_PUBLIC_CITY` - City name for weather (Public)

## References

- Design On [Figma](https://www.figma.com/file/p2PtZwZPG1GHZ8VtGl66Tr/New-Page?node-id=0%3A1)

- Icons from [Iconify](https://iconify.design/)

- Weather data from [OpenWeatherMap](https://openweathermap.org/api)

- [HackerNews API](https://github.com/HackerNews/API)

- [Reddit API](https://old.reddit.com/dev/api/)

- [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/) by Sara Soueidan

- Fonts downloaded with [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts)

- Filter object properties by key in ES6 on [Stack Overflow](https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6)
