import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
        <table className={css.transaction_history}>
          <thead>
            <tr>
            <th className={css.table_title}>Type</th>
            <th className={css.table_title}>Amount</th>
            <th className={css.table_title}>Currency</th>
            </tr>
          </thead>
        
          <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.table_row}>
                <td className={css.table_box}>{type}</td>
                <td className={css.table_box}>{amount}</td>
                <td className={css.table_box}>{currency}</td>
            </tr>
        )
        )}
          </tbody>
        </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })
  )
}