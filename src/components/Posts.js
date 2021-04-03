
import React from 'react';


export function PostList ({posts}) {


    return (
        <>
            {posts.map (post =>  (
                <>
                    <div key={post.id}></div>
                    <h3> {post.title} </h3>
                    <p> {post.body}</p>
                </>
            ))}

        </>
    )
}