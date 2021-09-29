import { useState, useEffect } from 'react'
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

function CommentPage({user, nflGame, comments, setComments, handleDeleteComment}) {

    return (
        <div>

            {comments.map(comment => <CommentCard key={comment.id} comments={comments} setComments={setComments} user={user} handleDeleteComment={handleDeleteComment} comment={comment} nflGame={nflGame} />)}
            <NewCommentForm comments={comments} setComments={setComments} nflGame={nflGame} user={user}/>
        </div>
    )
}

export default CommentPage
