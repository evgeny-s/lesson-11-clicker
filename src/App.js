import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BeautyButton from './components/BeautyButton';
import CountViewer from './components/CountViewer';

const COUNTER_INITIAL_VALUE = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: COUNTER_INITIAL_VALUE,
    };

    this._prevHandler = this._prevHandler.bind(this);
    this._nextHandler = this._nextHandler.bind(this);
    this._refreshHandler = this._refreshHandler.bind(this);
  }

  _prevHandler() {
    let value = this.state.counter - 1;
    this.setState({
      counter: value < 0 ? 0 : value,
    });
  }

  _nextHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  _refreshHandler() {
    this.setState({
      counter: COUNTER_INITIAL_VALUE,
    });
  }

  render() {
    return (
      <div className="App">
        <CountViewer value={this.state.counter} />
        <div className="btn-group">
          <BeautyButton color="danger" label="-" onClick={this._prevHandler} />
          <BeautyButton color="warning" label="⟳" onClick={this._refreshHandler}/>
          <BeautyButton color="success" label="+" onClick={this._nextHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
