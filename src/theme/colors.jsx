const colors = {
    grey: (opacity = 1) => `rgba(61, 61, 61, ${opacity})`, //  #3D3D3D
    yellow: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`, //  #FF9800
    blue: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, //  "blue"
    black: (opacity = 1) => `rgba(18, 18, 18, ${opacity})`, //  #121212
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
}

export default colors;