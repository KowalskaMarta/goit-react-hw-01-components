import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={css['friend-list']}>{friendList}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
