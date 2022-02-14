import {Grid, makeStyles} from "@material-ui/core";
import FacebookLogo from "../assets/social/facebook_logo.png";
import InstagramLogo from "../assets/social/instagram_logo.png";
import TiktokLogo from "../assets/social/tiktok_logo.png";
import TwitterLogo from "../assets/social/twitter_logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    logo: {
        width: 677 / 12,
        height: 677 / 12,
        [theme.breakpoints.down("sm")]: {
            width: (677 / 12) / 2,
            height: (677 / 12) / 2,
        },
        [theme.breakpoints.down("xs")]: {
            width: (677 / 12) / 2,
            height: (677 / 12) / 2,
        },
    },
}))

const logos = [
    {link: "https://www.facebook.com/pennybored", image: FacebookLogo},
    {link: "https://www.instagram.com/pennyboredband/", image: InstagramLogo},
    {link: "https://www.tiktok.com/@pennyboredband", image: TiktokLogo},
    {link: "https://twitter.com/pennyboredband", image: TwitterLogo}
]

const Tab = props => {
    const classes = useStyles()
    return (
        <a href={props.link} target="_blank">
            <img className={classes.logo} src={props.logo} alt={`Logo-${props.index}`}/>
        </a>
    )
}

const SocialMedia = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" className={classes.root}>
            {
                logos.map((logo, index) => (
                    <Grid item key={index}>
                        <Tab index={index} link={logo.link} logo={logo.image}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default SocialMedia