import React from 'react';
import PropTypes from 'prop-types';

class RankingPlayer extends React.Component {
  render() {
    const { info, index } = this.props;
    // console.log(index);
    // console.log(info.ranking[0].score);
    return (
      <div className="player-ranking">
        <div className="item">
          <li>
            <img
              alt={ info.ranking[0].picture }
              src={ info.ranking[0].picture }
            />
            <h3
              key={ index }
              data-testid={ `player-name-${index}` }
            >
              { info.ranking[0].name }

            </h3>
            <h4 data-testid={ `player-score-${index}` }>{ info.ranking[0].score }</h4>
          </li>
        </div>
      </div>
    );
  }
}

RankingPlayer.propTypes = {
  info: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RankingPlayer;
