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

```js
// prettier.config.js
import { createConfig } from "@brainylab/prettier-config";

export default createConfig({
  configs: {}, // add custom config
  presets: {
    tailwind: true, // usage tailwind preset
  },
});
```

and configure VS Code add:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Install as configure
[Prettier Plugin on VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## License

MIT
