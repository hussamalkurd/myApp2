const colors = {
  // Green
  primary: {
    pale: 'rgba(82, 127, 228, .08)', // Primary.main @ 8% opacity
    main: '#2E8CF0', // Also used in headings and 'active' states
    light: '#94b0ee', // Also used in headings and 'active' states
  },

  // Slate Blue?
  secondary: {
    pale: '#F9FAFC', // Input Background
    lighter: '#E5E9F2', // Borders
    light: '#97A1AD', // Icons (specifically in tab navigation)
    dark: '#526276', // Buttons
    darker: '#1B2D41', // Text
  },

  // Shades of gray
  gray: {
    main: '#5C6876', // A 'grayer' version of secondary.dark
  },

  // Other
  white: '#ffffff',
  black: '#000000',
  yellow: '#F7B500', // For alerts
  lightyellow: '#FFF7DB', // For hints
  red: '#FF6666', // For alerts
};

export default colors;
