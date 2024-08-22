
import React from 'react'

export default function Page({ params }: { params: { img_id: string } }) {
    return (
        <div>
            <div>My Post: {params.img_id}</div>
        </div>
    )
}