var React = require('react');

module.exports = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    getDefaultProps: function () {
        return {
            items: []
        }
    },
    render: function(){
        return (
                <div className="">
                    <p>Items</p>
                    <ul>
                        {this.props.items.map(function(item, index){
                            return <li key={index} className="list-item" >{item}</li>
                        })}
                    </ul>
                </div>
            )
    }
});