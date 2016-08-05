var Reflux = require('reflux');
var qwest = require('qwest');
var UserActions = require('../actions/useractions');

var baseUrl = 'http://jsonplaceholder.typicode.com';

var UserStore = Reflux.createStore({
    listenables: [UserActions],
    users: [],
    sourceUrl: baseUrl + '/users',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
        var self = this;
        qwest
            .get(self.sourceUrl)
            .then(function (data) {
                var response = JSON.parse(data.response);
                var users = response.map(function(user){
                    return user.name;
                });

                self.users = users;
                self.trigger(self.users);
            })
            .catch(function (e) {
                console.error(e)
            })
    }
});

module.exports = UserStore;