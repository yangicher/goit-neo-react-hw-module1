import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const rows = items.map(({ type, amount, currency, id }, index) => {
    const isEven = index % 2 === 0;

    return (
      <tr key={id} className={clsx(!isEven && css.dark)}>
        <td className={clsx(css.cell, css.first)}>{type}</td>
        <td className={css.cell}>{amount}</td>
        <td className={css.cell}>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
