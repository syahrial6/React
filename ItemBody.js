import React from 'react';
import DeleteButton from './Delete';

function ItemBody({judul,isi,id,onDelete}){
    return (
        <div className="item_body">
            <h3 className="item_judul">{judul}</h3>
            <p className="item_isi">{isi}</p>
            <p className='item_waktu'>{id}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
          

        </div>
    );
};
export default ItemBody;