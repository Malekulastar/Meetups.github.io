import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
import {useContext} from 'react';

function MainNavigation(){
    const factx=useContext(FavoritesContext);
 return  <header className={classes.header}>
     <div className={classes.logo}> Meet up </div>
     <nav>

         <ul>
             <li>
                 <Link to='/'>All Meet Ups</Link>
             </li>
             <li>
                 <Link to='/newmeet'>New Meet Ups</Link>
             </li>
             <li>
                 <Link to='/favorites'>Favorites<span className={classes.badge}>{factx.totalFavorites}</span></Link>
             </li>
         </ul>
     </nav>

 </header>



}
export default MainNavigation;