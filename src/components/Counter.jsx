import * as React from 'react'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {
    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
    };
    static defaultProps = {
        min: 0,
        max: 100,
    }

    constructor (props) {
        super(props);

        this.state = {
            count: props.min,
        };
    }

    inc(delta) {
        const newCount = Math.min(this.props.max, Math.max(this.props.min, this.state.count + delta));
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span><br/>
                <button 
                  onClick={() => {this.inc(-1)}}
                  disabled={this.state.count <= this.props.min}
                >
                  -
                </button>
                <button 
                  onClick={() => {this.inc(1)}}
                  disabled={this.state.count >= this.props.max}
                >
                  +
                </button>
            </div>
        )
    }
}