import React, {Component} from 'react';
import {TeaConsumer} from '../TeaProvider';
import Frame from '../../components/Frame/Frame';
import './TeaDetails.css';



class TeaDetails extends Component {

    constructor(props) {
        super(props);

        const {match : {params}} = props;
        let {teaType} = params;
        let {teaId} = params;
        teaId = Number(teaId);
        teaType = teaType.slice(0, teaType.length - 1);


        this.state = {
            teaType: teaType,
            teaId: teaId
        };

        this.getTea.bind(this);
    }

    getTea(state) {
        return state[this.state.teaType + 'Teas'].find((tea) => {
            return tea.id === this.state.teaId;
        });
    }


    render() {
        return (
            <Frame>
                <h1> Tea Details </h1>

                <TeaConsumer>
                    { (state) => {
                        const tea = this.getTea(state) || {features: []};

                        return (
                            <React.Fragment>
                            <div className="teaDetailsContainer">
                                <img src={tea.image} alt={tea.name} />
                                <div className="teaDetailsContent">

                                    <div className="teaName">{tea.name}</div>
                                    <div className="teaRating">{tea.ratings}</div>
                                    <p className="teaDescription">{tea.description}</p>

                                    <div className="teaFeatures">
                                        <h2>Features</h2>
                                        <ul className="teaFeaturesList">
                                            { tea.features.map((feature, k) => (
                                                <li key={k}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>

                                <div className="teaDetailsBuyBox">
                                    <div className="teaDetailsPrice">
                                        Price: $<span>{tea.price}</span>
                                    </div>
                                    <select>
                                        { Array.from(new Array(30)).map((v,k) => (
                                            <option value={k + 1} key={k}> {k + 1} </option>
                                        ))}
                                    </select>

                                    <button type="button">Add To Card</button>
                                </div>
                            </div>

                            <div className="teaDetailsReviews">
                                <p> There are no reviews as of yet.</p>
                            </div>
                            </React.Fragment>
                        )
                    }}
                </TeaConsumer>
            </Frame>
        )
    }
}

TeaDetails.propTypes = {};

TeaDetails.defaultProps = {};

export default TeaDetails;