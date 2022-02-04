import Classes from './MeetupItem.module.css';
import Card from '../../ui/Card';

import {useContext} from 'react';
import FavoritesContext from '../../../store/favorites-context';




function MeetupItem(props) {
   const factx = useContext(FavoritesContext);
   const itemIsFavorite=factx.itemisFavorite(props.id);
    
   function toggleHandler(){
      if(itemIsFavorite){
          factx.removeFavorite(props.id);
      }else{
          alert(JSON.stringify(factx.addFavorite));
          factx.addFavorite({
              id:props.id,
              title:props.title,
              description:props.description,
              image:props.image,
              address:props.address
          });
          alert(JSON.stringify(factx.addFavorite));

      }

    }


    return  <li className={Classes.item}>
        <Card>
        <div className={Classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={Classes.content}>
             <h3>{props.title}</h3>
             <address> {props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={Classes.actions}>
            <button onClick={toggleHandler}>{itemIsFavorite ?'Remove from Favorite':'Add To Favorites'}</button>
        </div>
         </Card>
     </li>
}

export default MeetupItem;