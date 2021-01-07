module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.vue"],
  },
  theme: {
    //extendで追加できる
    extend: {
      colors: {
        'main-color': '#F0A747'
      }
    }
  },
  variants: {},
  plugins: [],
};