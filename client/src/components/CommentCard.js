import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'


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
            {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ?
                <button onClick={deleteClick}>X</button> : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ?
                <button onClick={editComment}>Edit</button> : null}
            {edit ?
                <form onSubmit={handleCommentEdit}>
                    <input type="text" name="name" value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div>
                        <Button 
                            size="small" 
                            type="submit">
                            Submit
                        </Button>
                    </div>
                </form> : null}
        </div>
    )
}

export default CommentCard
