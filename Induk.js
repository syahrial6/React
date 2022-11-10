import React from 'react';
import Card from './Card';
import Input from './Input';
// import { getInitialData, showFormattedDate } from '../utils'
 
 
 
class Catatan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes : [{
              id:Number | String,
              judul:String,
              isi:String
            }],
        }
 
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    console.log(this.state.notes)
      }
 
 
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
 
    onAddContactHandler({judul,isi}){
        this.setState((prevState)=>{
          return {
            notes : [
              ...prevState.notes,
              {
                id : +new Date(),
                judul,
                isi,
              }
            ]
          }
        })
      }
    render(){
 
      if (this.state.notes[0].id===0){
        return(
          <div className='induk'>
            <Input addNote={this.onAddContactHandler}/>
            <Card notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            <p>Catatan Kosong</p>
            </div>
 
        )
      }
      else{
        return (
            <div className='induk'>
            <Input addNote={this.onAddContactHandler}/>
            <Card notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
      }
 
 
 
 
 
    };
}
export default Catatan;