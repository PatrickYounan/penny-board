import {Button, Grid, Link, makeStyles, Paper, Typography} from "@material-ui/core";
import SkaterVideo from "../assets/video/skater.mp4";
import RockstarVideo from "../assets/video/rockstar.mp4";
import GamerVideo from "../assets/video/gamer.mp4";

import ModalTemplate from "./ModalTemplate";

const useStyles = makeStyles(theme => ({
    modal: {
        padding: theme.spacing(3),
        width: 500,

        [theme.breakpoints.down("xs")]: {
            width: 250
        }
    },
    video: {
        width: 500,

        [theme.breakpoints.down("xs")]: {
            width: 250
        }
    }
}))

const SkaterContainer = () => {
    const classes = useStyles()
    return (
        <Grid item container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography align="center">
                    You’re a carefree spirit that loves the outdoors. You’re a bit of a rebel, but everyone can count on you as a trustworthy friend. Not only does your loyalty make you a lot of friends, but you’re also the one to make everyone laugh. You’ll fit in anywhere you go, but you’re always looking for the next journey.
                </Typography>
            </Grid>
            <Grid item>
                <video className={classes.video} src={SkaterVideo} autoPlay={"autoplay"} loop id='video' preload="auto"/>
            </Grid>
            <Grid item>
                <Link href="https://distrokid.com/hyperfollow/pennybored/conversations?fbclid=IwAR3ceqsiVqF2kQrfuO3DOxMNc6kmfzQGWKS-V8BtBvp2o6-xB0qW3vdiduE" target="_blank">
                    <Button variant="contained" color="primary">Pre-save</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

const RockstarContainer = () => {
    const classes = useStyles()
    return (
        <Grid item container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography align="center">
                    You daydream about touring the world after watching all your favorite bands on MTV. You’re the extrovert of the group and the one who brings the guitar to a campfire. You’ll take any moment to be the star of the show. Everyone adores your confidence, but no one takes the chance to get to know the real rockstar behind the music.
                </Typography>
            </Grid>
            <Grid item>
                <video className={classes.video} src={RockstarVideo} autoPlay={"autoplay"} loop id='video' preload="auto"/>
            </Grid>
            <Grid item>
                <Link href="https://distrokid.com/hyperfollow/pennybored/conversations?fbclid=IwAR3ceqsiVqF2kQrfuO3DOxMNc6kmfzQGWKS-V8BtBvp2o6-xB0qW3vdiduE" target="_blank">
                    <Button variant="contained" color="primary">Pre-save</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

const GamerContainer = () => {
    const classes = useStyles()
    return (
        <Grid item container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography align="center">
                    You’re an introvert, but you’ve created your own world that you’re happy with. From catching Pokémon to completing Super Mario 64, your imagination is exploding with creativity. Your circle is small, but you’re always seen rooting each other on at the local arcade every weekend!
                </Typography>
            </Grid>
            <Grid item>
                <video className={classes.video} src={GamerVideo} autoPlay={"autoplay"} loop id='video' preload="auto"/>
            </Grid>
            <Grid item>
                <Link href="https://distrokid.com/hyperfollow/pennybored/conversations?fbclid=IwAR3ceqsiVqF2kQrfuO3DOxMNc6kmfzQGWKS-V8BtBvp2o6-xB0qW3vdiduE" target="_blank">
                    <Button variant="contained" color="primary">Pre-save</Button>
                </Link>
            </Grid>
        </Grid>
    )
}
const VideoModal = props => {
    const kind = props.kind
    const classes = useStyles()

    console.log(kind)
    return (
        <ModalTemplate open={props.open} toggle={props.toggle}>
            <Paper square className={classes.modal}>
                <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                    {
                        kind === "skater" ?
                            <SkaterContainer/>
                            :
                            kind === "rockstar" ?
                                <RockstarContainer/>
                                :
                                kind === "gamer" && <GamerContainer/>
                    }
                </Grid>
            </Paper>
        </ModalTemplate>
    )
}

export default VideoModal