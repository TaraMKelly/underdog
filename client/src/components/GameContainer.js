import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography"


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
            <Typography variant="h4">NFL</Typography>
            <Grid>
                {nflGames.map(nflGame =>
                    <GameCard key={nflGame.id}
                        handleDeleteComment={handleDeleteComment}
                        user={user}
                        nflGame={nflGame}
                        comments={comments}
                        setComments={setComments} />)}
            </Grid>
        </Container>
    )
}

export default GameContainer
