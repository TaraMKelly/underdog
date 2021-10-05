import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles ({
    btn: {
        fontSize: 10,
        '&:hover': {
            background: 'gray'
        }
    }
})

function NewCommentForm({ nflGame, comments, setComments, user }) {
    const [text, setText] = useState("")
    const classes = useStyles()

    async function onCommentSubmit(e) {
        e.preventDefault()
        setText("")
        const res = await fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: text,
                game_id: nflGame.id,
                user_id: user.id
            })
        })
        const parsedBody = await res.json()
        setComments([...comments, parsedBody])
        setText("")
    }

    return (
        <form onSubmit={onCommentSubmit}>
            <input type="text" name="name" placeholder="What's your play..." value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Typography>
                <Button
                    className={classes.btn}
                    variant="outlined" 
                    color="primary" 
                    size="small" 
                    type="submit">
                    Submit
                </Button>
            </Typography>
        </form>
    )
}

export default NewCommentForm
