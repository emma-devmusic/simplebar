import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            // El parser ya lo define tseslint.config, pero si fuera necesario podrías indicarlo aquí:
            // parser: require.resolve('@typescript-eslint/parser'),
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            react: react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Se extienden las reglas recomendadas para React y React Hooks
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            // Variables sin uso: se muestran como advertencia y no bloquean la compilación
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                },
            ],
            // Configuración para el uso de 'any': se marca como advertencia
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/react-in-jsx-scope': 'off'
        },
    }
);
