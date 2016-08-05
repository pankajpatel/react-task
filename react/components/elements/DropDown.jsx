var React = require('react');

module.exports = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        toggle: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            items: [],
            open: false
        }
    },
    getInitialState: function(){
        console.log(this.props)
        return {
            open: this.props.open,
            currentItem: null
        }
    },

    getCurrentItem: function(){
        if( null === this.state.currentItem ){
            return 'Choose Option';
        } else {
            return this.props.items[this.state.currentItem];
        }
    },

    _onSelect: function(index){
        this.setState({currentItem: index, open: false})
    },
    _reset: function(){
        this.setState({currentItem: null})
    },
    componentDidMount: function() {
        window.addEventListener('click', this.props.hideDropdown, false);
    },
    componentWillUnmount: function() {
        window.removeEventListener('click', this.props.hideDropdown, false);
    },
    _stopPropagation: function(e) {
        e.stopPropagation();
    },
    _toggle: function(e){
        this._stopPropagation(e)
        this.setState({open: !this.state.open})
    },
    render: function(){
        var _self = this
        classNames = ['drop-down'];
        if( this.state.open ){
            classNames.push('open');
        }
        
        return (
            <div className={classNames.join(' ')}>
                <a href="#" className="head" onClick={this.props.toggle || this._toggle}>{this.getCurrentItem()}</a>
                <ul>
                    {this.props.items.map(function(item, index){
                        return <li key={index} className="list-item" onClick={_self._onSelect.bind(_self, index)}><a href="#">{item}</a></li>
                    })}
                </ul>
            </div>
        )
    }
});