import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline === true ? css.on : css.off;
  return (
    <li className={css.item}>
      <span className={[css.status, status].join(' ')}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
