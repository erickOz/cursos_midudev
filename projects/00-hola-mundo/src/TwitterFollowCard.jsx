/* eslint-disable no-undef */
import PropTypes from "prop-types";

export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <br />
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        {isFollowing ? (
          <button className="tw-followCard-button">Seguir</button>
        ) : (
          <button className="tw-followCard-button">Siguiendo</button>
        )}
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  formatUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
