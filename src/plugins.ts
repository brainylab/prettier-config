type GetPlugins = {
  tailwind?: boolean;
};

export function getPlugins(props: GetPlugins) {
  const plugins = ["prettier-plugin-curly", "prettier-plugin-packagejson"];

  if (props.tailwind) {
    plugins.push("prettier-plugin-tailwindcss");
  }

  return plugins;
}
