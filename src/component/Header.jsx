import {Grid, makeStyles} from "@material-ui/core";
import Logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
    bandLogo: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down("sm")]: {
            width: 796 / 3,
            height: 145 / 3
        },
        [theme.breakpoints.down("xs")]: {
            width: 796 / 4,
            height: 145 / 4
        }
    },

}))

const Header = () => {
    const classes = useStyles()
    return (
        <header>
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item>
                    <img className={classes.bandLogo} src={Logo} alt="Logo" width={796} height={145}/>
                </Grid>
                <Grid item>
                    <SocialMedia/>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header