import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './KosningaProfResults.scss';
import Link from '../../Link';
import { getAssetUrl } from '../../utils';

class KosningaprofResults extends PureComponent {
  render() {
    const { questions, answers, results, candidates, parties } = this.props;
    return (
      <div className={s.root}>
        <h2>Niðurstöður úr kosningaprófi Kjóstu Rétt</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit
          sunt velit rerum distinctio eius minus quis a nihil repudiandae?
        </p>
        <h3>Stjórnmálaflokkar með svipaðr skoðanir og ég</h3>
        {parties.map((party, index) => {
          const percent = 100 * (1 - index / parties.length);
          return (
            <Link
              href={`/flokkur/${party.url}`}
              className={s.party}
              key={party.url}
            >
              <div
                className={s.partyProgress}
                style={{
                  transform: `scaleX(${Math.max(0.01, percent / 100)})`,
                }}
              />
              <img
                src={getAssetUrl('party-icons', party.url)}
                className={s.partyLogo}
              />
              <div className={s.partyName}>{party.name}</div>
              <div className={s.partyPercentage}>{percent.toFixed(0)}%</div>
            </Link>
          );
        })}
        <h3>Frambjóðendur með svipaðr skoðanir og ég</h3>
        <div className={s.candidates}>
          {candidates.slice(0, 12).map((candidate, index) => {
            const percent = 100 * (1 - index / 23);
            return (
              <div key={candidate.nafn} className={s.candidate}>
                <img className={s.candidateImg} src="/kristjan.jpg" />
                <div className={s.candidateProgressBar}>
                  <div
                    className={s.candidateProgress}
                    style={{
                      transform: `scaleX(${Math.max(0.01, percent / 100)})`,
                    }}
                  />
                </div>
                <div className={s.candidatePercentage}>
                  <span>{percent.toFixed(0)}%</span>
                </div>
                <div className={s.candidateInfo}>
                  <div className={s.candidateName}>{candidate.nafn}</div>
                  <div className={s.candidateParty}>
                    {
                      parties.find(
                        party => party.letter === candidate.bokstafur,
                      ).name
                    }{' '}
                    (x{candidate.bokstafur})
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(KosningaprofResults);
