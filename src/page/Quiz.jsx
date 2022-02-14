import {Button, FormControl, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography} from "@material-ui/core";
import AnswerStarEmpty from "../assets/quiz/star_empty.png";
import AnswerStar from "../assets/quiz/star.png";
import {useState} from "react";
import VideoModal from "../component/VideoModal";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },

    whatTitle: {
        textShadow: `5px 0px 10px lightblue, -5px 0px 10px lightblue`,
        marginBottom: theme.spacing(2)
    },

    questionContainer: {
        paddingTop: theme.spacing(1),
        background: `rgba(255, 255, 255, 0.60)`,
        maxWidth: 600,
        marginBottom: theme.spacing(2),
        borderRadius: theme.spacing(1)
    },

    submitButton: {
        marginBottom: theme.spacing(4)
    }

}))

const Quiz = () => {
    const classes = useStyles()
    const [questions, setQuestions] = useState([])
    const [kind, setKind] = useState("")
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let skater = 0
        let gamer = 0
        let rockstar = 0

        if (questions[0] === "counting") rockstar++
        else if (questions[0] === "beating") gamer++
        else if (questions[0] === "kickflip") skater++

        if (questions[1] === "khakis") gamer++
        else if (questions[1] === "baggy") skater++
        else if (questions[1] === "leather") rockstar++

        if (questions[2] === "karaoke") rockstar++
        else if (questions[2] === "tech") skater++
        else if (questions[2] === "n64") gamer++

        if (questions[3] === "arcades") gamer++
        else if (questions[3] === "concert") rockstar++
        else if (questions[3] === "tonyhawk") skater++

        if (questions[4] === "skateboard") skater++
        else if (questions[4] === "tamagotchi") gamer++
        else if (questions[4] === "guitar") rockstar++

        const best = Math.max(skater, gamer, rockstar)

        if (best === 0)
            return

        if (best === skater) {
            setKind("skater")
        } else if (best === gamer) {
            setKind("gamer")
        } else if (best === rockstar) {
            setKind("rockstar")
        }
        toggle()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let newArray = [...questions]
        newArray[parseInt(name)] = value
        setQuestions(newArray)
    }

    return (

        <main>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" className={classes.root}>
                <Grid item>
                    <Typography gutterBottom align="center" variant="h4" className={classes.whatTitle}>What 90's Character are you?</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <Grid item container className={classes.questionContainer} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography gutterBottom>What are you most likely to do in your free time?</Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup name="0">
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="counting" control={<Radio icon={<img width="25px" src={AnswerStarEmpty} alt="Music"/>} checkedIcon={<img width="25px" src={AnswerStar} alt="AnswerStar"/>}/>} label="Counting down for a music video"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="kickflip" control={<Radio icon={<img width="25px" src={AnswerStarEmpty} alt="Kickflip"/>} checkedIcon={<img width="25px" src={AnswerStar} alt="AnswerStar"/>}/>} label="Kickflip in the mall parking lot"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="beating" control={<Radio icon={<img width="25px" src={AnswerStarEmpty} alt="Beating"/>} checkedIcon={<img width="25px" src={AnswerStar} alt="StarSelected"/>}/>} label="Beating the high score on pinball"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.questionContainer} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography align="center" gutterBottom>What does the perfect outfit consist of?</Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup name="1">
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="khakis" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Khakis and a funky graphic tee"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="baggy" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Baggy pants and sneakers"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="leather" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="A leather jacket and ripped jeans"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.questionContainer} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography align="center" gutterBottom>What is a must have on your wish list?</Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup name="2">
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="karaoke" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="A karaoke machine for partying"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="tech" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Tech Decks to do tricks with"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="n64" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="N64 to play with friends"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.questionContainer} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography align="center" gutterBottom>What would be the perfect day?</Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup name="3">
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="arcades" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Hitting up all the local arcades"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="concert" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Sneaking backstage at a concert"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="tonyhawk" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="Skateboarding with Tony Hawk"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.questionContainer} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography align="center" gutterBottom>What is something you always have to carry with you?</Typography>
                            </Grid>
                            <Grid item>
                                <RadioGroup name="4">
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="skateboard" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="A skateboard and hacky sack"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="tamagotchi" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="A tamagotchi and slap bracelet"/>
                                    <FormControlLabel onChange={handleChange} style={{marginLeft: "0px"}} value="guitar" control={<Radio icon={<img width="25px" src={AnswerStarEmpty}/>} checkedIcon={<img width="25px" src={AnswerStar}/>}/>} label="A guitar pick and a chatterbox"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.submitButton} justifyContent="center">
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </FormControl>
                </form>
            </Grid>
            <VideoModal kind={kind} open={open} toggle={toggle}/>
        </main>
    )
}

export default Quiz