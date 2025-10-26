export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Asegura que Tailwind escanee los archivos correctos
    ],
    darkMode: 'class', // Habilita el modo oscuro con clase
    theme: {
        extend: {
            colors: {
                primary: '#0e6fff',
                secondary: '#7752eb',
                background: {
                    light: '#ffffff',
                    dark: '#0a0a0a',
                },
                surface: {
                    light: '#f8fafc',
                    dark: '#171717',
                },
                card: {
                    light: '#ffffff',
                    dark: '#262626',
                },
                border: {
                    light: '#e2e8f0',
                    dark: '#404040',
                },
                text: {
                    primary: {
                        light: '#1e293b',
                        dark: '#f1f5f9',
                    },
                    secondary: {
                        light: '#64748b',
                        dark: '#94a3b8',
                    },
                    muted: {
                        light: '#94a3b8',
                        dark: '#64748b',
                    },
                },
            },
        }, // Aquí puedes personalizar los estilos
    },
    plugins: [],
};