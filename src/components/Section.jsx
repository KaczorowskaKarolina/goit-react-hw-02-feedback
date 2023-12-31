import PropTypes from 'prop-types';
import css from './section.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};