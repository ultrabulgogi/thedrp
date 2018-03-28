import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import TeaList from './TeaList/TeaList';
import TeaDetails from "./TeaDetails/TeaDetails";

class Teas extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/teas/:teaType/:teaId" component={TeaDetails} />
                <Route path="/teas/:teaType">
                    {
                        (props) => {

                            const {match : {params}} = props;
                            const {teaType} = params;

                            return (
                                <TeaList teaType={teaType} />
                            )
                        }
                    }
                </Route>
            </Switch>
        )
    }
}

Teas.propTypes = {};

Teas.defaultProps = {};

export default Teas;