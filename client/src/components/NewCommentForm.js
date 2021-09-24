import { useState, useEffect } from 'react'

function NewCommentForm({onAdd}) {
    const [text, setText] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        onAdd({text})
        setText("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Add a comment...' value={text} onChange={(e) => 
            setText(e.target.value)} />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewCommentForm
