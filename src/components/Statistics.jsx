import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        <li className={css.item}>
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
