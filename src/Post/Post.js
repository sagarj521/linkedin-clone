import * as classes from './Post.module.css';
import Avatar from '@material-ui/core/Avatar';
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const Post = ({ name, description, message, photoUrl }) => {
    return ( 
        <div className={classes.post}>
            <div className={classes.post__header}>
                <Avatar />
                <div className={classes.post__info}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={classes.post__body}>
                <p>{message}</p>
            </div>
            <div className={classes.post__buttons}>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
            </div>

        </div>
     );
}
 
export default Post;