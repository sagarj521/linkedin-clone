import * as classes from './HeaderOption.module.css';
import Avatar from '@material-ui/core/Avatar';

const HeaderOption = ({avatar, Icon, title}) => {
    return ( 
        <div className={classes.headerOption}>
             {Icon && <Icon className={classes.headerOption__icon} />} 
             {avatar && <Avatar className={classes.headerOption__icon} src={avatar} /> }
             <h3 className={classes.headerOption__title}>{title}</h3>
        </div>
     );
}
 
export default HeaderOption;