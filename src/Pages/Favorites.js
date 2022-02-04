import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/Layout/meetup/Meetuplist';

function Favorite(){
    const factx = useContext(FavoritesContext);
    let content;
    if(factx.totalFavorites == 0){
        content=<p> You Got No Favorites yet</p>;
    }else{
        content=<MeetupList meetup={factx.favorites} />;
    }

    return <section>
         <h1>My Favorites</h1>
         {content}
    </section>
    












}


export default Favorite;