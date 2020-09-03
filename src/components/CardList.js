import React from 'react';
import Card from './Card';
import {robots} from '../robots';



const CardList = ({robots}) => {
    // var cardComponent= 
    
    return (
        <div>
         {robots.map((user,i)=>{
        return <Card 
        key={i }
        id={robots[i].id}
         name={robots[i].name} 
         email={robots[i].email} />
    })}
         </div>
        // <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    );
 

}

export default CardList;