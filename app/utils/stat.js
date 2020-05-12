import groupBy from 'lodash/groupBy';
import meanBy from 'lodash/meanBy';
import minBy from 'lodash/minBy';
import dayjs from 'dayjs';

const getStartOfDay = date =>
  dayjs(date)
    .startOf('day')
    .format('DD.MM.YYYY');

const getHMTime = date => dayjs(date).format('H:mm');

const getGroupedByDaysHistory = history => groupBy(history, x => getStartOfDay(x.date));

const getDayListFromHistory = history => Object.keys(getGroupedByDaysHistory(history));

const getStatForDay = (history, day) => {
  const dayStat = getGroupedByDaysHistory(history)[day];

  return {
    values: dayStat.map(x => x.price),
    times: dayStat.map(x => getHMTime(x.date)),
  };
};

const getStatForPeriod = (history, period) => {
  const groupedByDaysHistory = getGroupedByDaysHistory(history);

  const days = Object.keys(groupedByDaysHistory).slice(-period);

  const statForPeriod = days.map(x => groupedByDaysHistory[x]);

  const averageValues = statForPeriod.map(x => Math.round(meanBy(x, y => y.price)));

  const minValues = statForPeriod.map(x => Math.round(minBy(x, y => y.price).price));

  return { averageValues, minValues, days };
};

export { getStatForPeriod, getStatForDay, getDayListFromHistory };
