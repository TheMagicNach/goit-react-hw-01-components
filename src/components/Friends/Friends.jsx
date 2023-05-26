import PropTypes from 'prop-types';
import css from './Friends.module.css';

export function Friends(friend) {
  return (
  <ul className={css.friend }>
    {friend.friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.statusOnline : css.statusOffline} />
        <img className={css.avatar} src={avatar} alt="User avatar"  />
        <p className={css.name}>{name}</p>
      </li>
    ))}
    </ul>
  )
}


Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};