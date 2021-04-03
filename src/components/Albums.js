import React from 'react';


export function AlbumList ({albums}) {


    return (
        <>
            {albums.map(album => (
                <>
                    <div key={album.id}></div>
                    <h3>{album.title}</h3>
                </>

            ))}
        </>
    )
}