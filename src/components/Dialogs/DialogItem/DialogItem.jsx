import { NavLink } from "react-router-dom";
import { setDialogActionCreator } from "../../../redux/messagesReducer";
import styles from "./DialogItem.module.css";

const DialogItem = ({ store, name, id, profileImg }) => {
  const setDialog = () => {
    let user = {
      id,
      name,
    };
    store.dispatch(setDialogActionCreator(user));
  };

  return (
    <div className={styles.dialog}>
      <NavLink
        className={(user) => (user.isActive ? styles.active : styles.item)}
        to={`/dialogs/${id}`}
        onClick={setDialog}
      >
        <img src={profileImg} alt="avatar" className={styles.userAvatar}></img>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
