import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div>
        <div className={css.avatar}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{`@${tag}`}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list}>
          <p className={css.title}>Followers</p>
          <p className={css.numbers}>{followers}</p>
        </li>
        <li className={css.list}>
          <p className={css.title}>Views</p>
          <p className={css.numbers}>{views}</p>
        </li>
        <li className={css.list}>
          <p className={css.title}>Likes</p>
          <p className={css.numbers}>{likes}</p>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
