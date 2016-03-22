import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import MeepProgressBar from './js/app.react';

class Example extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MeepProgressBar
        progress={25}
      />
    );
  }
};

ReactDom.render(<Example />, document.getElementById('app'))
