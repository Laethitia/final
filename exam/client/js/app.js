//Hello I am the main app file. I am basically in control of your front end routing and tieing everything together. 
//Please take a look but DO NOT ADJUST. Thank you.

//AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.
//UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached

angular.module("examApp", ["ui.router", "examApp.controllers"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "mainCtrl"
            })
            .state("getPage", {
                url: "/getting",
                templateUrl: "/templates/get.html",
                controller: "getCtrl"
            })
            .state("postPage", {
                url: "/posting",
                templateUrl: "/templates/post.html",
                controller: "postCtrl"
            })
            .state("updatePage", {
                url: "/update",
                templateUrl: "/templates/edit.html",
                controller: "updateCtrl"
            });

        $urlRouterProvider.otherwise("/")
    })