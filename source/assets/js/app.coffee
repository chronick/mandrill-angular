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
    }
  )
)


angular.module('sender', ['mandrill'])
  .config(($routeProvider) ->
    $routeProvider.
      when('/', {controller: SenderCtrl, templateUrl: 'partials/senderForm.html'}))
  .config(($httpProvider) -> delete $httpProvider.defaults.headers.common["X-Requested-With"])


SenderCtrl = ($scope, Mandrill) ->

  $scope.preoutput = "hello."

  $scope.sender = 
  { 
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
  
  $scope.send = () ->
    $scope.preoutput = $scope.sender
    Mandrill.sendMessage(
      {
        "key": "yRET0qNVxDVroPAGntBCaA",
        "message": {
          "text": "hello! I just got sent from your angular app",
          "subject": "sent from angular",
          "from_email": "ndonohue@gmail.com",
          "to": [{"email": "rebootme@rebootwebstudios.com"}]
        }
      },
      ((data,status,headers,config) -> $scope.preoutput = data),
      ((data,status,headers,config) -> $scope.preoutput = data)
    )
