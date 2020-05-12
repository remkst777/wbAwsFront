import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { translationMessages } from 'i18n';
import { Line } from 'react-chartjs-2';

import {
  BORDER_TRANSPARENT,
  BG_SUCCESS,
  BORDER_LIGHT,
  BORDER_SUCCESS,
  BG_LIGHT,
  BORDER_PRIMARY,
  BG_PRIMARY_LIGHT,
} from 'style-constants';

import { getStatForDay, getDayListFromHistory, getStatForPeriod } from 'utils/stat';

import productsMessages from 'containers/Products/messages';

import StatButtons from './StatButtons';

const props = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: BORDER_LIGHT,
  pointBackgroundColor: BG_LIGHT,
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 1,
  pointRadius: 1,
  pointHitRadius: 10,
};

const StatSection = ({ history, locale }) => {
  const [
    { day, period, times, days, values, averageValues, minValues },
    choose,
  ] = useState({ days: [], times: [] });

  const daymass = getDayListFromHistory(history);

  useEffect(() => {
    if (days || times) {
      chooseDay(daymass[daymass.length - 1]);
    }
  }, [history]);

  function chooseDay(x) {
    choose({ ...getStatForDay(history, x), day: x });
  }

  function choosePeriod(x) {
    choose({ ...getStatForPeriod(history, x), period: x });
  }

  const data = {
    labels: times || days,
    datasets: [
      {
        ...props,
        borderColor: BORDER_SUCCESS,
        backgroundColor: `${BG_SUCCESS}75`,
        pointHoverBackgroundColor: BG_SUCCESS,
        pointHoverBorderColor: BORDER_LIGHT,
        data: values || averageValues,
        label:
          translationMessages[locale][
            productsMessages[values ? 'valuesForDay' : 'averageValuesOfDays'].id
          ],
      },
      {
        ...props,
        borderColor: minValues ? BORDER_PRIMARY : BORDER_TRANSPARENT,
        backgroundColor: minValues ? BG_PRIMARY_LIGHT : BORDER_TRANSPARENT,
        pointHoverBackgroundColor: BORDER_PRIMARY,
        pointHoverBorderColor: BG_PRIMARY_LIGHT,
        label: minValues
          ? translationMessages[locale][productsMessages.minValuesOfDays.id]
          : '',
        data: minValues,
      },
    ],
  };

  return (
    <div>
      <StatButtons
        day={day}
        period={period}
        chooseDay={chooseDay}
        choosePeriod={choosePeriod}
        daymass={daymass}
      />

      <Line
        data={data}
        height="5"
        width="15"
        redraw
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

StatSection.propTypes = {
  history: PropTypes.array,
  locale: PropTypes.string.isRequired,
};

export default React.memo(StatSection);
