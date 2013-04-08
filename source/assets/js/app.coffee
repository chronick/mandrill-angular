angular.module('mandrill',['ngResource'])
.factory('Mandrill', ($resource) ->
  Mandrill = $resource(
    'https://mandrillapp.com/api/1.0/:category/:call.json',
    {},
    {
      sendMessage: {
        method: "POST",
        isArray: true,
        params: {
          category: "messages",
          call: "send"
        }
      }
      ping: {
        method: "POST",
        params: {
          category: "users",
          call:"ping"
        }
      }
    }
  )
)


angular.module('sender', ['mandrill'])
  .config(($routeProvider) ->
    $routeProvider.
      when('/', {controller: SenderCtrl, templateUrl: 'partials/senderForm.html'}))
  .config(($httpProvider) -> delete $httpProvider.defaults.headers.common["X-Requested-With"])


SenderCtrl = ($scope, Mandrill) ->

  $scope.setup = {
    apiKey: "yRET0qNVxDVroPAGntBCaA",
    toEmail: "ndonohue@gmail.com"
  }

  $scope.sender = { 
    name: "",
    email: "",
    phone: "",
    awesome: "No Opinion",
    people: [
      { name: "George Clooney", like: false },
      { name: "Bill Murray", like: false },
      { name: "Paris Hilton", like: false },
      { name: "Snooki", like: false },
      { name: "Ghandi", like: false }
    ],
    randomtext: ""
  }

  @constructMessage = (sender) ->

    peopleILike = ((people) ->
      return "Nobody" if people.length is 0
      return "#{person.name for person in people}"

    )(person for person in sender.people when person.like is true)

    "<h2>Hello.</h2>
    <p>I just got sent from the Mandrill angular proof of concept
    at <a href='http://www.github.com'>www.github.com</a>.</p>
    <h3>Info:</h3>
    <ul>
      <li>Name: #{sender.name}</li>
      <li>Email: #{sender.email}</li>
      <li>Phone: #{sender.phone}</li>
    </ul>

    <h3>How awesome am I?</h3>
    <p>#{sender.awesome}</p>

    <h3>Who do I like?</h3> 
    <p>#{peopleILike}</p>

    <h3>Anything Else?</h3>
    <p>#{sender.randomtext}</p>"


  $scope.checkSetup = () ->
    Mandrill.ping(
      {"key": $scope.setup.apiKey}, 
      ((data,status,headers,config)-> 
        $scope.apiStatusClass = "alert alert-success"
        $scope.apiStatusContent = "API key looks good. Go ahead and fill out the rest of the form."),
      ((data,status,headers,config)->
        $scope.apiStatusClass = "alert alert-error"
        $scope.apiStatusContent = "Doesn't seem to be valid.")
    )

  $scope.send = () =>
    $scope.messageText = @constructMessage($scope.sender)
    Mandrill.sendMessage(
      {
        key: $scope.setup.apiKey,
        message: {
          html: $scope.messageText,
          subject: "sent from Angular Mandrill proof-of-concept",
          from_email: $scope.sender.email,
          to: [{email: $scope.setup.toEmail}]
        }
      },
      ((data,status,headers,config) -> 
        $scope.messageStatusClass = "alert alert-success"
        $scope.messageStatusContent = "Congratulations! The message should appear soon at #{$scope.setup.toEmail}"
        $scope.messageStatusJson = data
      ),
      ((data,status,headers,config) -> 
        $scope.messageStatusClass = "alert alert-error"
        $scope.messageStatusContent = "Hmm. Doesn't look like it went through. Here's the raw error data:"
        $scope.messageStatusJson = data
      )
    )
