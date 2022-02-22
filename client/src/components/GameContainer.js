import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function GameContainer({ user, userPicks, setUserPicks }) {
    const [nflGames, setGames] = useState([])
    const [comments, setComments] = useState(null)
    // const [userPicks, setUserPicks] = useState(null)

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

    // useEffect(() => {
    //     fetch('/user_picks')
    //       .then(res => res.json())
    //       .then((data) => setUserPicks(data))
    //   }, [])

    function handleDeleteComment(id) {
        const removeComment = comments.filter((c) => c.id !== id)
        setComments(removeComment)
    }


    return (
        <Container fixed sx={{p: 3}}>
            <Grid container spacing={4}>
                {nflGames.map(nflGame =>
                    <Grid key={nflGame.id} item xs={12} s={6} md={3}>
                        <GameCard 
                            handleDeleteComment={handleDeleteComment}
                            user={user}
                            nflGame={nflGame}
                            comments={comments}
                            setComments={setComments}
                            userPicks={userPicks}
                            setUserPicks={setUserPicks} />
                    </Grid>)}
            </Grid >
        </Container >
    )
}

export default GameContainer
