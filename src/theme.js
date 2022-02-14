import {createTheme} from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: [
            'KCWeaselFace'
        ].join(','),
    },
    palette: {
        primary: {
            main: `rgba(255, 255, 255, 0.60)`
        }
    }
});

export default theme