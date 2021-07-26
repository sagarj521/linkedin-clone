import * as classes from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return ( 
        <div className={classes.header}>
           <div className={classes.header__left}>
               <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
               <div className={classes.header__search}>
                   {/* search icons */}
                   <SearchIcon />
                   <input type="text" />
               </div>
           </div>
           <div className={classes.header__right}>
               <HeaderOption title="Home" Icon={HomeIcon}/>
               <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
               <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
               <HeaderOption title="Messaging" Icon={TextsmsIcon}/>
               <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
               <HeaderOption title="me" avatar="https://media-exp1.licdn.com/dms/image/C5103AQFbc7BMEtjiKA/profile-displayphoto-shrink_100_100/0/1580667050002?e=1632960000&v=beta&t=L3WibgbUBLFHrPhR62e5NhOQo2_AnZm8w07L5SdO7-A"/>
           </div>
        </div>
     );
}
 
export default Header;