import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from "@mui/material/Typography"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


function CommentCard({ comments, setComments, comment, nflGame, user, handleDeleteComment }) {
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(comment.comment)
    const id = comment.id

    function deleteClick(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
        handleDeleteComment(id)
    }

    function editComment() {
        setEdit(!edit)
    }
    //move up to game container to clean up
    function handleUpdatecomment(updatedComment) {
        setComments((comments) =>
            comments.map((comment) => {
                return comment.id === updatedComment.id ? updatedComment : comment;
            })
        );
    }

    function handleCommentEdit(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment: content })
        })
            .then((r) => r.json())
            .then(handleUpdatecomment)
        setEdit(!edit)
    }

    return (
        <div>
            <Typography variant="subtitle2" >
                {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}

                {nflGame.id === comment.game_id && user.id === comment.user_id ?
                    <ButtonGroup size="small" variant="text" >
                        <Button onClick={deleteClick}> <DeleteIcon color="action" fontSize="small" /> </Button>
                        <Button onClick={editComment}> <EditIcon color="action" fontSize="small" /> </Button>
                    </ButtonGroup>
                    : null}

                {edit ?
                    <form onSubmit={handleCommentEdit}>
                        <input type="text" name="name" value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <div>
                            <Button
                                size="small"
                                type="submit">
                                <CheckIcon color="action" fontSize="small" />
                            </Button>
                        </div>
                    </form> : null}
            </Typography>
        </div>
    )
}

export default CommentCard
