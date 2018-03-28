import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home/Home';
import Teas from './Teas/Teas';

import './css/App.css';
import './css/reset.css';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/teas">
                {
                    (props) => {
                        const {match : {params}} = props;
                        const {teaType} = params;
                        return (
                            <Teas teaType={teaType} />
                        )
                    }
                }
            </Route>
        </Switch>
    );
  }
}

export default App;
