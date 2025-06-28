import antfu from '@antfu/eslint-config';
import pluginOxlint from 'eslint-plugin-oxlint';

export default antfu({
  stylistic: {
    semi: true,
  },
  ...pluginOxlint.configs['flat/recommended'],
},
);
