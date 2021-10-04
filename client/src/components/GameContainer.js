import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
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

    const allGames = nflGames.map(nflGame =>
        <GameCard key={nflGame.id}
            handleDeleteComment={handleDeleteComment}
            user={user}
            nflGame={nflGame}
            comments={comments}
            setComments={setComments} />)

    return (
        <Container fixed>
            <Typography variant="h4" align="center">NFL</Typography>

            {allGames}

        </Container>
    )
}

export default GameContainer
