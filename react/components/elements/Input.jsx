var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <input 
                    type={this.props.type || "text"}
                    className={this.props.classNames.join(' ')}
                    ref="inputValue"
                    onKeyUp={this.props.onKeyUp}
                    />
    }
});