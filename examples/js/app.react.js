import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

import ProgressBar from './components/progress-bar.react';

import '../css/main.css'

export default class MeepProgressBar extends Component {

  static PropTypes = {
    progress: PropTypes.number,
    defaultStyle: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <ProgressBar
        {...this.props}
      />
    );
  }
}
