import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <label className={css.label}>
        Find contacts by name
        <input type="text" value={filter} onChange={onFilterChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
