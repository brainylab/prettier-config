## BrainyLab prettier-config

this is the base configuration of Prettier is used in the Projects made by BrainyLab Development.

## Install Config

### usage npm

```bash
# npm
npm i --save-dev @brainylab/prettier-config

#yarn
yarn add -D @brainylab/prettier-config

#pnpm
pnpm add -D @brainylab/prettier-config

#bun
bun add -d @brainylab/prettier-config
```

## Usage Config

create file .eslintrc.json in main project folder, add the lines below in the file.

1. Remove existing config file, example `.prettierrc`.

2. Add code to:
```json
// package.json
  "prettier": "@brainylab/prettier-config",
```
```js
// .prettierrc.js
module.exports = {
 ...require("@brainylab/prettier-config"),
};
```

```js
// prettier.config.js
import prettierConfig from "@brainylab/prettier-config";

export default {
  ...prettierConfig,
};
```

and configure VS Code add:
```json
{
   "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
 

```

Install
[Prettier Plugin on VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
</br> 
</br> 
![Prettier Logo](https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.4.0/1711025051911/Microsoft.VisualStudio.Services.Icons.Default)



## License

MIT
