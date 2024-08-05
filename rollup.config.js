import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import babel from '@rollup/plugin-babel';

const devMode = process.env.NODE_ENV === 'development';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'es',
			sourcemap: true,
			inlineDynamicImports: true,
			plugins: [
				terser({
					ecma: 2020,
					mangle: { toplevel: true },
					compress: {
						module: true,
						toplevel: true,
						unsafe_arrows: true,
						drop_console: !devMode,
						drop_debugger: !devMode,
					},
					output: {
						quote_style: 1
					}
				})
			]
		},
		plugins: [
			vue({
				css: false,
				compileTemplate: true,
			}),
			resolve({
				extensions: ['.js', '.vue'],
			}),
			commonjs(),
			babel({
				exclude: 'node_modules/**',
				babelHelpers: 'bundled',
				presets: ['@babel/preset-env'],
			}),
			css({ output: 'bundle.css' })
		],
	},
];
