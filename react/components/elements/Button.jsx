var React = require('react');

module.exports = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired,
        classNames: React.PropTypes.array.isRequired
    },
    getDefaultProps: function () {
        return {
            text: 'Button',
            classNames: [],
            onClick: function () {
                console.log('No Click handler supplied')
            }
        }
    },
    render: function(){
        return (
                <button 
                    type="button" 
                    onClick={this.props.onClick} 
                    className={this.props.classNames.join('')}
                    >
                    {this.props.text}
                </button>
            )
    }
});