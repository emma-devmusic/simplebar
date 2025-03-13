export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Asegura que Tailwind escanee los archivos correctos
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0e6fff',
                secondary: '#7752eb',
                background: '#e8e2e2',
            },
        }, // Aquí puedes personalizar los estilos
    },
    plugins: [],
};