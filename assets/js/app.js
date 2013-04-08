(function() {
  var SenderCtrl;

  angular.module('mandrill', ['ngResource']).factory('Mandrill', function($resource) {
    var Mandrill;
    return Mandrill = $resource('https://mandrillapp.com/api/1.0/:category/:call.json', {}, {
      sendMessage: {
        method: "POST",
        isArray: true,
        params: {
          category: "messages",
          call: "send"
        }
      },
      ping: {
        method: "POST",
        params: {
          category: "users",
          call: "ping"
        }
      }
    });
  });

  angular.module('sender', ['mandrill']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      controller: SenderCtrl,
      templateUrl: 'partials/senderForm.html'
    });
  }).config(function($httpProvider) {
    return delete $httpProvider.defaults.headers.common["X-Requested-With"];
  });

  SenderCtrl = function($scope, Mandrill) {
    var _this = this;
    $scope.setup = {
      apiKey: "",
      toEmail: ""
    };
    $scope.sender = {
      name: "",
      email: "",
      phone: "",
      awesome: "No Opinion",
      people: [
        {
          name: "George Clooney",
          like: false
        }, {
          name: "Bill Murray",
          like: false
        }, {
          name: "Paris Hilton",
          like: false
        }, {
          name: "Snooki",
          like: false
        }, {
          name: "Ghandi",
          like: false
        }
      ],
      randomtext: ""
    };
    this.constructMessage = function(sender) {
      var peopleILike, person;
      peopleILike = (function(people) {
        if (people.length === 0) {
          return "Nobody";
        }
        return "" + ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = people.length; _i < _len; _i++) {
            person = people[_i];
            _results.push(person.name);
          }
          return _results;
        })());
      })((function() {
        var _i, _len, _ref, _results;
        _ref = sender.people;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          person = _ref[_i];
          if (person.like === true) {
            _results.push(person);
          }
        }
        return _results;
      })());
      return "<h2>Hello.</h2>    <p>I just got sent from the Mandrill angular proof of concept    at <a href='http://www.github.com'>www.github.com</a>.</p>    <h3>Info:</h3>    <ul>      <li>Name: " + sender.name + "</li>      <li>Email: " + sender.email + "</li>      <li>Phone: " + sender.phone + "</li>    </ul>    <h3>How awesome am I?</h3>    <p>" + sender.awesome + "</p>    <h3>Who do I like?</h3>     <p>" + peopleILike + "</p>    <h3>Anything Else?</h3>    <p>" + sender.randomtext + "</p>";
    };
    $scope.checkSetup = function() {
      return Mandrill.ping({
        "key": $scope.setup.apiKey
      }, (function(data, status, headers, config) {
        $scope.apiStatusClass = "alert alert-success";
        return $scope.apiStatusContent = "API key looks good. Go ahead and fill out the rest of the form.";
      }), (function(data, status, headers, config) {
        $scope.apiStatusClass = "alert alert-error";
        return $scope.apiStatusContent = "Doesn't seem to be valid.";
      }));
    };
    return $scope.send = function() {
      $scope.messageText = _this.constructMessage($scope.sender);
      return Mandrill.sendMessage({
        key: $scope.setup.apiKey,
        message: {
          html: $scope.messageText,
          subject: "sent from Angular Mandrill proof-of-concept",
          from_email: $scope.sender.email,
          to: [
            {
              email: $scope.setup.toEmail
            }
          ]
        }
      }, (function(data, status, headers, config) {
        $scope.messageStatusClass = "alert alert-success";
        $scope.messageStatusContent = "Congratulations! The message should appear soon at " + $scope.setup.toEmail;
        return $scope.messageStatusJson = data;
      }), (function(data, status, headers, config) {
        $scope.messageStatusClass = "alert alert-error";
        $scope.messageStatusContent = "Hmm. Doesn't look like it went through. Check your API key.";
        return $scope.messageStatusJson = data;
      }));
    };
  };

}).call(this);
