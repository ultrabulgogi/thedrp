import React, {Component} from 'react';

const TeaContext = React.createContext({});
const TeaConsumer = TeaContext.Consumer;

export const TEA_TYPES = {
    BLACK: 'black',
    GREEN: 'green',
    HERBAL: 'herbal',
    OOLONG: 'oolong',
    WHITE: 'white'
};

class TeaProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [`${TEA_TYPES.BLACK}Teas`]: [],
            [`${TEA_TYPES.GREEN}Teas`]: [],
            [`${TEA_TYPES.HERBAL}Teas`]: [],
            [`${TEA_TYPES.OOLONG}Teas`]: [],
            [`${TEA_TYPES.WHITE}Teas`]: []
        };

        this.TEA_URLS = {
            [TEA_TYPES.BLACK]: 'http://localhost:3000/data/black.json',
            [TEA_TYPES.GREEN]: 'http://localhost:3000/data/green.json',
            [TEA_TYPES.HERBAL]: 'http://localhost:3000/data/herbal.json',
            [TEA_TYPES.OOLONG]: 'http://localhost:3000/data/oolong.json',
            [TEA_TYPES.WHITE]: 'http://localhost:3000/data/white.json'
        };
        this.setTeasInState.bind(this);
    }


    componentDidMount() {
        this.fetchTeas();
    }

    setTeasInState(teas) {
        this.setState(teas);
    }

    fetchTeas() {
        const teaTypes = Object.values(TEA_TYPES);
        let cloneState = Object.assign({}, this.state);

        teaTypes.forEach( async (teaType, index) => {
             await fetch( this.TEA_URLS[teaType] )
                .then((response) => {
                    return response.json()
                })
                .then((teas) => {
                    cloneState[`${teaType}Teas`] = teas;

                    return cloneState;
                })
                .then(this.setTeasInState.bind(this));
        });
    }

    render() {
        const cloneState = Object.assign({}, this.state);

        return (
            <TeaContext.Provider value={cloneState} >
                { this.props.children }
            </TeaContext.Provider>
        )
    }
}


export { TeaProvider, TeaContext, TeaConsumer};