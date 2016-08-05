var React = require('react');
var DropDown = require('./DropDown.jsx');
var Button = require('./Button.jsx');
var Input = require('./Input.jsx');
var List = require('./List.jsx');

var Reflux = require('reflux');
var UserStore = require('../../stores/userstore');  
var UserActions = require('../../actions/useractions');

module.exports = React.createClass({
    defaultItems: ['File', 'Document', 'Folder'],
    mixins: [Reflux.connect(UserStore, 'users')],
    getInitialState: function () {
        return {
            filter: '',
            newItem: '',
            items: this.defaultItems,
            filteredItems: this.defaultItems
        }
    },
    functions: function (keyName) {
        var _super = this;
        var obj = {
            filter: function () {
                var newList = _super.state.items.filter(function (item) {
                    return item.indexOf(_super.state[keyName]) < 0 ?false: true;
                })
                _super.setState({filteredItems: newList});
            },
            newItem: function () {
                var items = _super.state.items;
                items.push(_super.state[keyName])
                _super.setState({items: items});
                _super.functions('filter');
                _super._clear(keyName);
            }
        }
        obj[keyName]();
    },
    _stopPropagation: function(e) {
        e.stopPropagation();
    },

    _onKeyUp: function (keyName) {
        var newObj = {};
        newObj[keyName] = this.refs[keyName].refs.inputValue.value;
        this.setState(newObj);
    },
    _clear: function (keyName) {
        var newObj = {};
        this.refs[keyName].refs.inputValue.value = '';
        newObj[keyName] = this.refs[keyName].refs.inputValue.value;
        this.setState(newObj);
    },
    _reset: function () {
        this._clear('filter')
        this._clear('newItem')

        this.setState({filteredItems: this.state.items })
    },
    _onButtonClick: function(keyName){
        this.functions(keyName)
    },
    _hideDropdown: function(refName, action, e){
        console.log('here', e, action, this.refs[refName].state)
        this._stopPropagation(e)
        for(var ref in this.refs){
            if(ref.indexOf('dropdown_')> -1 && refName !== ref && action === 'toggle'){
                this.refs[ref].setState({open: false})
            } 
            if( refName === ref && action === 'toggle'){
                var open = !this.refs[refName].state.open;
                this.refs[ref].setState({open: open})
            }
        }
        if( 'toggle' === action ){
        } else{
            
            this.refs[refName].setState({open: false})
        }
    },
    render: function(){
        return <div className='main'>
            <div className='header'><img src='img/lev_logo_rgb_web.png'/></div>
            <div className='page-content'>
                <div className='col'>
                    <div className="user-input">
                        <p>Add New Item:</p>
                        <Input 
                            ref="newItem" 
                            type="text" 
                            classNames={['form-control']} 
                            onKeyUp={this._onKeyUp.bind(this, 'newItem')} />
                        <Button 
                            text="Add" 
                            onClick={this._onButtonClick.bind(this, 'newItem')} 
                            classNames={['button']} />
                    </div>
                    <div className="user-input">
                        <p>Filter:</p>
                        <Input 
                            ref="filter" 
                            type="text" 
                            classNames={['form-control']} 
                            onKeyUp={this._onKeyUp.bind(this, 'filter')} />
                        <Button 
                            text="Filter" 
                            onClick={this._onButtonClick.bind(this, 'filter')} 
                            classNames={['button']} />
                    </div>
                    <div className="list">
                        <Button 
                            text="Reset Inputs" 
                            onClick={this._reset} 
                            classNames={['button']} />
                    </div>
                    <div className="list">
                        <List items={this.state.filteredItems} />
                    </div>
                </div>
                <div className='col'>
                    <DropDown ref="dropdown_items" refName="dropdown_items" 
                        hideDropdown={this._hideDropdown.bind(this, "dropdown_items", 'hide')}
                        toggle={this._hideDropdown.bind(this, "dropdown_items", 'toggle')}
                        items={this.state.items} 
                        open={false}/>
                    <hr/>
                    <DropDown ref="dropdown_users" refName="dropdown_users" 
                        hideDropdown={this._hideDropdown.bind(this, "dropdown_users", 'hide')}
                        toggle={this._hideDropdown.bind(this, "dropdown_users", 'toggle')}
                        items={this.state.users} 
                        open={false}/>
                </div>
            </div>
            <div className='footer'><p>Good luck!</p></div>
        </div>
    }
});