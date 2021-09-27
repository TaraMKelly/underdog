
function CommentCard({comment, userName, user}) {
    return (
        <div>
            {user.username}: {comment.comment}
        </div>
    )
}

export default CommentCard
