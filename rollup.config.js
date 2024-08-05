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
		output: [
			{
				dir: 'dist/esm',
				format: 'es',
				sourcemap: true,
				inlineDynamicImports: true,
			},
			{
				dir: 'dist/cjs',
				format: 'cjs',
				sourcemap: true,
				inlineDynamicImports: true,
			}
		],
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
