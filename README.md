# USEDATAFETCH HOOK

> The hook simplifies api calls, that prevents repeattive code for api calls

<p align="center">
    <a href="https://www.javascript.com/" alt="JS">
        <img src="https://img.shields.io/badge/javaScript-ES6-yellow" /></a>
    <a href="https://webpack.js.org//" alt="Webpack">
        <img src="https://img.shields.io/badge/Webpack.js-5.21.2-blue" /></a>
    <a href="[https://eslint.org/](https://www.typescriptlang.org/)" alt="typescript">
        <img src="https://img.shields.io/badge/ts-typescript-blue" /></a>
  
</p>

<br/>

### Prerequisites

- React
- Node.JS

### Usage

Run

- `yarn add use-data-fetch`

### OR

- `npm i use-data-fetch`

### Usage in React

- import useDataFetch from "use-data-fetch"
- const data = useDataFetch(url)
  - `url` is the api's endpoint

### Optional Headers

- The fetch() method can optionally accept a other parameters, an init object that allows you to control a number of different settings:
all what you need to do just indicate the option you wish to use.
  - Example: `const data = useDataFetch(url, "GET", "cors", "same-origin")`

- method?: "GET" | "POST" | "PUT" | "DELETE";
- mode?: "no-cors" | "cors" | "same-origin";
- catch?:
  | "default"
  | "no-cache"
  | "reload"
  | "force-cache"
  | "only-if-cached"
  | undefined;
- credentials?: "same-origin" | "include" | "omit";
- contentType?: "text/plain";
  -- The ddefault for contype is "application/json"
- redirect?: "manual" | "follow" | "error";
- referrerPolicy?:
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

Feel free to check the [issues page](https://github.com/Rashad-Muntar/useDataHook/issues).

## Author

👤 **Rashad Muntar**

- GitHub: - [@Rashad-Muntar](https://github.com/Rashad-Muntar)
- Twitter - [@RashadToure](https://twitter.com/RashadToure)
- LinkedIn: - [Rashad Muntar](https://www.linkedin.com/in/rashad-muntar/)

### Show your support

Give a ⭐️ if you like this project!

## License

This project is licensed under the MIT License
