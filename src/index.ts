import type { Config } from 'prettier';

export default {
	printWidth: 80,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'all',
	arrowParens: 'always',
	semi: true,
	useTabs: true,
	overrides: [
		{
			files: '.nvmrc',
			options: { parser: 'yaml' },
		},
	],
	plugins: ['prettier-plugin-curly', 'prettier-plugin-packagejson'],
} as Config;
