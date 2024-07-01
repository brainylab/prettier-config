import { getPlugins } from './plugins';
import type { Config } from 'prettier';

type CreateConfig = {
	plugins?: string[];
	configs?: Omit<Config, 'plugins'> & { plugins?: string[] };
	presets?: {
		tailwind?: boolean;
	};
};

export function createConfig({ configs, presets }: CreateConfig) {
	const plugins = getPlugins({ tailwind: presets?.tailwind });

	/**
	 * verify exist plugins on config parameter
	 */
	if (configs?.plugins) {
		plugins.push(...configs.plugins);
	}

	return {
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
		...configs,
		plugins,
	};
}
