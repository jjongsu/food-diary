/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pre: ['Pretendard'],
            },
            colors: {
                color1: '#80bdff',
                color2: '#cfe5fc',
                textColor1: '#495057',
                textColor2: '#adb5bd',
                backColor: '#f1f3f5',
            },
        },
    },
    plugins: [],
};
