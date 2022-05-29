const size = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

const theme = {
  size: {
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.tablet})`,
    desktop: `(max-width:${size.desktop})`,
  },
  color: {
    mainColor: '#242BB3',
    backgroundColor: '#f5f5f5',
    white1000: '#fff',
    geekBlue1000: '#100E66',
    geekBlue800: '#242BB3',
    red400: '#FF7875',
    blue400: '#69C0FF',
  },

  padding: {
    contentBox: '2.4rem',
  },

  zIndex: {
    contentBg: 0,
    content: 100,
  },

  flexMixin: (direction = 'row', align = 'center', justify = 'center') =>
    `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
  `,
};

export default theme;
