import * as classes from "./Sidebar.module.css";
import Avatar from '@material-ui/core/Avatar';

const Sidebar = () => {

    const recentItems = (topic)=>{
        return <div className={classes.sidebar__recentItem}>
            <span className={classes.sidebar__hash}>#</span>
            <p>{topic}</p>
        </div>
    };

    return ( 
        <div className={classes.sidebar}>
            <div className={classes.sidebar__top}>
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQE1PyK7AbosBQ/profile-displaybackgroundimage-shrink_200_800/0/1615295459746?e=1632960000&v=beta&t=8hXdqIfJEnqsfJQDSKEP4oOpwUY236Zu32b8-5Z98YI" alt="" />
                <Avatar className={classes.sidebar__avatar} />
                <h2>Sagar Jadhav</h2>
                <h4>sagarj521@gmail.com</h4>
            </div>
            <div className={classes.sidebar__stats}>
                <div className={classes.sidebar__stat}>
                    <p>Who viewed your profile</p>
                    <p className={classes.sidebar__stat_number}>2,111</p>
                </div>
                <div className={classes.sidebar__stat}>
                    <p>Views of your post</p>
                    <p className={classes.sidebar__stat_number}>153</p>
                </div>
            </div>
            <div className={classes.sidebar__bottom}>
                <p>Recent</p>
                {recentItems('react')}
                {recentItems('careers')}
                {recentItems('programming')}
                {recentItems('engineering')}
                {recentItems('design')}
                {recentItems('developer')}
            </div>
        </div>
     );
}
 
export default Sidebar;