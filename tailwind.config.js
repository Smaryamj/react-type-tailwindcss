module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: "#FFBA1B",
        mainBlue: "#003B5B",
        secBlue:'#003B5B59',
        textBlue: '#003841',
        mainGray: '#F4FAFD',
        iconBG: '#C0E9FF',
        aquaBlue: '#A8DFFC',
        aquaBlueLight: '#C0E9FF',
        mainBlueTint: '#809DAD',
        mainBlueTint2: '#B2C4CE',
      },
      fontFamily: {
        'sf-pro-rounded': ['SF Pro Rounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Enable RTL support
  rtl: true,
}
