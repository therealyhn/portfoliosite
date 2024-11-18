tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
                'proj': 'repeat(auto-fit, minmax(300px, 1fr))',
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'sans-serif'],
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
            },
            colors: {
                darkTheme: '#11001f',
                darkTheme2: '#11003f',
                darkTheme3: '#11007f'
            }
        }
    },
    darkMode: 'selector'
}

