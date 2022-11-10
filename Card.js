import React from 'react';
import ItemBody from './ItemBody';


function Card_list({notes,onDelete}){
    return (
        <div className='contact-list'>
            {
                notes.map((note)=>(
                    <ItemBody key={note.id} id={note.id} onDelete={onDelete} {...note}/>
                ))
            }
        </div>
    )
}
export default Card_list