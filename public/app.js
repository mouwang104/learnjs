'use strict';

var learnjs = {};

learnjs.problemView = function(){
    return $('<div class="problem-view">').text('Coming Soon!');
}

learnjs.appOnReady = function(){
    window.onhashchange = function(){
        learnjs.showView(window.location.hash);
    };
    learnjs.showView(window.location.hash);
}

learnjs.showView = function(hash){
    var routes = {
        '#problem' : learnjs.problemView
    };

var hashParts = hash.split('-');
var viewFn = routes[hashParts[0]];

if (viewFn){
    $('.view-container').empty().append(viewFn(hashParts[1]));
}

}//end of showView