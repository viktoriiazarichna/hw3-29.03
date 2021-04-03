import React from 'react';



export function PhotoList ({photos}) {



    return (
        <>
            {photos.map(photo => (

                <>
                    <div key={photo.id}></div>
                    <h3> {photo.title}  </h3>


                </>
            ))}

        </>
    )
}