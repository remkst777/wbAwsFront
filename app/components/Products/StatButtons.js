import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TEXT_SUCCESS } from 'style-constants';

import daysIcon from 'images/days.svg?external';
import weeksIcon from 'images/weeks.svg?external';

import Dropdown from 'components/Dropdown';
import TranslatedMessage from 'containers/TranslatedMessage';
import { Ul } from 'components/Dropdown/Menu';

import productsMessages from 'containers/Products/messages';

const Box = styled.div`
  padding-left: 20px;

  button {
    background: none;
    margin-right: 20px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;

    &[data-fill] {
      color: ${TEXT_SUCCESS};
    }

    .img {
      width: 25px;
      padding-bottom: 3px;
    }
  }
`;

const StatButtons = ({ daymass, chooseDay, choosePeriod, day, period }) => (
  <Box day={day} period={period}>
    <Dropdown
      Button={({ onToggle }) => (
        <button onClick={onToggle} type="button" data-fill={day}>
          <div dangerouslySetInnerHTML={{ __html: daysIcon }} className="img" />
          {day || <TranslatedMessage {...productsMessages.dayStat} />}
        </button>
      )}
      Menu={({ onToggle }) => (
        <Ul>
          {daymass.reverse().map(x => (
            <li
              onClick={() => {
                chooseDay(x);
                onToggle();
              }}
            >
              {x}
            </li>
          ))}
        </Ul>
      )}
    />

    <Dropdown
      Button={({ onToggle }) => (
        <button onClick={onToggle} type="button" data-fill={period}>
          <div dangerouslySetInnerHTML={{ __html: weeksIcon }} className="img" />
          <TranslatedMessage
            {...productsMessages.periodStat}
            values={{ period: period || 'n' }}
          />
        </button>
      )}
      Menu={({ onToggle }) => (
        <Ul>
          {[3, 7, 14, 28]
            .filter(x => x < daymass.length)
            .concat(daymass.length)
            .map(x => (
              <li
                onClick={() => {
                  choosePeriod(x);
                  onToggle();
                }}
              >
                {x}
              </li>
            ))}
        </Ul>
      )}
    />
  </Box>
);

StatButtons.propTypes = {
  daymass: PropTypes.array,
  chooseDay: PropTypes.func.isRequired,
  choosePeriod: PropTypes.func.isRequired,
  day: PropTypes.string,
  period: PropTypes.number,
};

export default React.memo(StatButtons);
