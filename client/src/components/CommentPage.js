import { useState, useEffect } from 'react'
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

function CommentPage() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('/comments')
            .then(res => res.json())
            .then((data) => setComments(data))
    }, [])
    console.log(comments)

    //add comment
    function addComment(comment) {
        const newComment = {...comment}
        setComments([...comments, newComment])
    }

    return (
        <div>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
            <NewCommentForm onAdd={addComment} />
        </div>
    )
}

export default CommentPage
