import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const list = friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={css.card}>
      <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
    </li>
  ));

  return <ul className={css.list}>{list}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
