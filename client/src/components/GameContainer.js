import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
// import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


function GameContainer({ user }) {
    const [nflGames, setGames] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('/games')
            .then(res => res.json())
            .then((data) => setGames(data))
    }, [])

    useEffect(() => {
        fetch('/comments')
            .then(res => res.json())
            .then((data) => setComments(data))
    }, [])

    function handleDeleteComment(id) {
        const removeComment = comments.filter((c) => c.id !== id)
        setComments(removeComment)
    }


    return (
        <Container fixed>
            <Typography variant="h4" align="center">NFL</Typography>
            <Grid container>
                {nflGames.map(nflGame =>
                    <Grid item xs={12} s={6} md={3}>
                        <Paper>
                            <GameCard key={nflGame.id}
                                handleDeleteComment={handleDeleteComment}
                                user={user}
                                nflGame={nflGame}
                                comments={comments}
                                setComments={setComments} />
                        </Paper>
                    </Grid>)}


            </Grid >
        </Container >
    )
}

export default GameContainer
