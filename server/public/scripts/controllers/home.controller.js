myApp.controller('HomeController', ['HermesService', function(HermesService) {
    const self = this;
    const apiKey = 'k3umRLVerkoWSFzrLQvujtpwIg8ugkkt';
    self.gifArray = [
        'https://media2.giphy.com/media/pWiQAItsQHm48/giphy.gif',
        'https://media2.giphy.com/media/svnapMq2i7gYg/giphy.gif',
        'https://media1.giphy.com/media/PrrTfTHIQd2Te/giphy.gif',
        'https://media0.giphy.com/media/xuVsQORyz7cAw/giphy.gif',
    ];

    self.randomGif = Math.floor(Math.random() * Math.floor(4));
   console.log('random:', self.randomGif);
   
   self.displayGif = self.gifArray[self.randomGif];

}]);
