import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

export default class ProgressBar extends Component {

  static propTypes = {
    defaultStyle: PropTypes.object,
    progress: PropTypes.number,
    options: PropTypes.object
  }

  static defaultProps = {
    defaultStyle: {
    },
    progress: 0,
    options: {
      animation: 'fadeOut'
    }
  }

  state = {
    progress: this.props.progress
  }

  onProgress = () => {
    let value = this.state.progress + (Math.random() + 1 - Math.random())
    if(value > 100) {
      value = 100;
      if(this.interval) {
        clearInterval(this.interval);
      }
    }
    console.log(value)
    this.setState({
      progress: value
    })
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.onProgress(this.props.progress)
    this.interval = setInterval(this.onProgress, 100)
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }


  render() {
    let progressStyle = {
      width: (this.state.progress === 0 ? 0 : this.state.progress) + '%',
      opacity: (this.state.progress === 100 ? 0 : 1)
    }
    return (
      <div className="progress-bar">
        <div
          className="progress-bar-line"
          style={
            Object.assign({}, this.props.defaultStyle, progressStyle)
          }
        />
      </div>
    );
  }
}
