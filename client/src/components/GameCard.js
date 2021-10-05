import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
import { useState } from "react";
// import { Link } from 'react-router-dom'
import CommentPage from "./CommentPage"
import Button from "@mui/material/Button"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

function GameCard({ nflGame, user, comments, setComments, handleDeleteComment }) {
    const [expanded, setExpanded] = useState(false)

    const awayTeam = nflGame.away_team
    const awayMl = parseInt(nflGame.away_ml, 10)
    const awaySpr = parseInt(nflGame.away_spread, 10)
    const awayPrice = parseInt(nflGame.away_price, 10)
    const homeTeam = nflGame.home_team
    const homeMl = parseInt(nflGame.home_ml, 10)
    const homeSpr = parseInt(nflGame.home_spread, 10)
    const homePrice = parseInt(nflGame.home_price, 10)

    function handleCommentExpand() {
        setExpanded(!expanded)
    }

    return (
        <Card elevation={1}>
            <Grid container>
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
            </Grid>
            <Button 
                onClick={handleCommentExpand} 
                sx={{fontSize: 10}}
                startIcon={<ExpandMoreIcon sx={{transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'}}/>}
            >
                {expanded ? "Hide Comments" : "Show Comments"}
            </Button>
            {expanded ?
                <>
                    <Divider />
                    <CardContent>
                        <CommentPage nflGame={nflGame} user={user} handleDeleteComment={handleDeleteComment} comments={comments} setComments={setComments} />
                    </CardContent> 
                </> : null
            }
        </Card>
    )
}

export default GameCard
