import { useState, useEffect } from 'react'
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

function CommentPage({user, nflGame, comments, setComments}) {
    console.log(nflGame)
    console.log(comments)

    return (
        <div>

            {comments.map(comment => <CommentCard key={comment.id} user={user} comment={comment} nflGame={nflGame} setComments={setComments} comments={comments} />)}
            <NewCommentForm comments={comments} setComments={setComments} nflGame={nflGame} user={user}/>
        </div>
    )
}

export default CommentPage
