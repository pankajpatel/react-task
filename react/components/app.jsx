var React = require('react'),
    ReactDOM = require('react-dom'),
    Page = require('./elements/page');

var InitialPage = React.createElement(Page);

ReactDOM.render(InitialPage, document.querySelector('.content'));