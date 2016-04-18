
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiRadar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 33.3c6.4 0 11.7-5.2 11.7-11.6s-5.3-11.7-11.7-11.7c-6.4 0-11.7 5.2-11.7 11.7s5.3 11.6 11.7 11.6z m-1.7-19.8v3.2c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-3.2c3.2 0.7 5.8 3.2 6.5 6.5h-3.2c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6h3.2c-0.7 3.3-3.3 5.9-6.5 6.5v-3.1c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.1c-3.2-0.6-5.8-3.2-6.5-6.5h3.2c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7h-3.2c0.7-3.3 3.3-5.8 6.5-6.5z"/></g>
            </IconBase>
        );
    }
}