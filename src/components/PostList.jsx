import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

import Modal from "./Modal";

var PostList = (props) => {

    return (
        <>
            {props.ModalVisible && (
            <Modal onClose={props.onModalClose}>
                <NewPost onCancel={props.onModalClose} />
            </Modal>)
            }

            <ul className={classes.posts}>
                <Post author="Lakira" body="First Post" />
            </ul>
        </>);
}

export default PostList;