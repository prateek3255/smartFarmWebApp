angular.module("smartfarm", [ 'firebase'])
    // .config(function ($routeProvider) {

    //     $routeProvider
    //         .when("/", { templateUrl: "views/login.html" })
    //         .when("/game/:gameId", { templateUrl: "views/game.html" })
    //         .when("/leaderboard", { templateUrl: "views/leaderboard.html" })
    //         .otherwise({redirectTo:'/'});
    // })
    .controller("FirstCtrl", FirstCtrl)
   
    // $(window).on("load resize ", function() {
    //     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    //     $('.tbl-header').css({'padding-right':scrollWidth});
    //   }).resize();
    

function FirstCtrl($firebaseArray,$firebaseObject) {
    
var first =this;
var usersRef=firebase.database().ref("users");
first.users=$firebaseArray(usersRef);
var cropsRef=firebase.database().ref("crop");
first.crops=$firebaseObject(cropsRef);
first.usr = function() {
    var elmnt = document.getElementById("user");
elmnt.scrollIntoView();
}
first.crp = function() {
    var elmnt = document.getElementById("crop");
elmnt.scrollIntoView();
}
}

