import { useState, useEffect } from 'react'
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

function CommentPage({user, nflGame}) {
    const [comments, setComments] = useState([])
    const [userName, setUserName] = useState("")

    useEffect(() => {
        fetch('/comments')
            .then(res => res.json())
            .then((data) => setComments(data))
    }, [])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then((data) => setUserName(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} user={user} userName={userName}/>)}
            <NewCommentForm comments={comments} setComments={setComments} nflGame={nflGame} user={user}/>
        </div>
    )
}

export default CommentPage
