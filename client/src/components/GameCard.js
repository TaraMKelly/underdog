import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
// import { Link } from 'react-router-dom'
import CommentPage from "./CommentPage"
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'



function GameCard({ nflGame, user, comments, setComments, handleDeleteComment }) {
    const awayTeam = nflGame.away_team
    const awayMl = parseInt(nflGame.away_ml, 10)
    const awaySpr = parseInt(nflGame.away_spread, 10)
    const awayPrice = parseInt(nflGame.away_price, 10)
    const homeTeam = nflGame.home_team
    const homeMl = parseInt(nflGame.home_ml, 10)
    const homeSpr = parseInt(nflGame.home_spread, 10)
    const homePrice = parseInt(nflGame.home_price, 10)

    return (
        <Card>
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
            <Divider />
            <CardContent>
                <CommentPage nflGame={nflGame} user={user} handleDeleteComment={handleDeleteComment} comments={comments} setComments={setComments} />
            </CardContent>
        </Card>
    )
}

export default GameCard
