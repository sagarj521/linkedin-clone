import * as classes from './Feed.module.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';

const Feed = () => {
    return ( 
        <div className={classes.feed}>
            <div className={classes.feed__inputContainer}>
                <div className={classes.feed__input}>
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className={classes.inputOptions}>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#fc9295"/>
                </div>
            </div>
            <div>
                <Post name="sagar" description="This is the test" message="waaoo" />
            </div>
        </div>
     );
}
 
export default Feed;