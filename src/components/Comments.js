import React from 'react';


export function CommentList ({comments}) {

    return (
        <>
            {comments.map(comment => (
                <>
                    <div key={comment.id}></div>
                    <h3> {comment.name}  </h3>
                    <p>  {comment.body} </p>

                </>
            ))}

        </>
    )
}