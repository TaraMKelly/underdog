import { useState, useEffect } from 'react'
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

function CommentPage({nflGames, user}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('/comments')
            .then(res => res.json())
            .then((data) => setComments(data))
    }, [])
    console.log(comments)

    //add comment
    // function addComment(comment) {
    //     const newComment = {...comment}
    //     setComments([...comments, newComment])
    // }

    return (
        <div>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} user={user}/>)}
            <NewCommentForm nflGames={nflGames} comments={comments} setComments={setComments} user={user}/>
        </div>
    )
}

export default CommentPage
