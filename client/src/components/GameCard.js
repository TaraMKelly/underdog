import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
import { useState } from "react";
import CommentPage from "./CommentPage"
import Button from "@mui/material/Button"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardHeader from "@mui/material/CardHeader";
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel, FormLabel, FormControl } from "@mui/material";
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
    btn: {
        maxWidth: "30px",
        fontSize: 8,
        '&:hover': {
            background: 'black'
        }
    }
})

function GameCard({ nflGame, user, comments, setComments, handleDeleteComment, userPicks, setUserPicks }) {
    const [expanded, setExpanded] = useState(false)
    const [teamPick, setTeamPick] = useState(null)
    const [overUnder, setOverUnder] = useState(null)
    const classes = useStyles()

    const gameTime = nflGame.formatted_date
    const awayTeam = nflGame.away_team
    const awayMl = parseInt(nflGame.away_ml, 10)
    const awaySpr = parseInt(nflGame.away_spread, 10)
    const awayPrice = parseInt(nflGame.away_price, 10)
    const homeTeam = nflGame.home_team
    const homeMl = parseInt(nflGame.home_ml, 10)
    const homeSpr = parseInt(nflGame.home_spread, 10)
    const homePrice = parseInt(nflGame.home_price, 10)
    const pointTotal = nflGame.over_under


    function handleCommentExpand() {
        setExpanded(!expanded)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch('/user_picks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                game_date: gameTime,
                over_under: overUnder,
                team_picked: teamPick,
                user_id: user.id
            })
        })
        const parsedBody = await res.json()
        console.log(parsedBody)
        // setUserPicks([...userPicks, parsedBody])
        setTeamPick(null)
        setOverUnder(null)
    }

    return (
        <Card elevation={4}>
            <Grid container>
                <CardHeader title={gameTime} />
                <CardContent>
                    <Grid item >
                        <AwayInfo awayTeam={awayTeam} awayMl={awayMl} awaySpr={awaySpr} awayPrice={awayPrice} />
                    </Grid>
                </CardContent>
                <CardContent>
                    <Grid item>
                        <HomeInfo homeTeam={homeTeam} homeMl={homeMl} homeSpr={homeSpr} homePrice={homePrice} />
                    </Grid>
                </CardContent>
                <CardContent>
                    <Grid item>
                        <Typography variant="body2"><b>Over/Under:</b> {pointTotal}</Typography>
                    </Grid>
                </CardContent>
            </Grid>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <FormControl >
                        <FormLabel>Your pick:</FormLabel>
                        <RadioGroup value={teamPick} onChange={(e) => setTeamPick(e.target.value)}>
                            <FormControlLabel value={awayTeam} control={<Radio />} label={awayTeam} />
                            <FormControlLabel value={homeTeam} control={<Radio />} label={homeTeam} />
                        </RadioGroup>
                        <RadioGroup value={overUnder} onChange={(e) => setOverUnder(e.target.value)}>
                            <FormControlLabel value="over" control={<Radio />} label="Over" />
                            <FormControlLabel value="under" control={<Radio />} label="Under" />
                        </RadioGroup>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </CardContent>
            <Button
                onClick={handleCommentExpand}
                sx={{ fontSize: 10 }}
                startIcon={
                    <ExpandMoreIcon 
                        sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                    />}
            >
                {expanded ? "Hide Discussion" : "Show Discussion"}
            </Button>
            {expanded ?
                <>
                    <Divider />
                    <CardContent>
                        <CommentPage 
                            nflGame={nflGame} 
                            user={user} 
                            handleDeleteComment={handleDeleteComment} 
                            comments={comments} 
                            setComments={setComments} />
                    </CardContent>
                </> : null
            }
        </Card>
    )
}

export default GameCard
