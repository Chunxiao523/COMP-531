// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//



(function(exports) {

    'use strict'
    function countWords(url) {   
         return fetch(url).then(r => r.json()).then(r => afunction(r))
    }

    function afunction(r){ 
            var map = {};
            var key;
            var value;
            for (var i = 0; i < r.articles.length; i++) {
                key = r.articles[i]._id;  
                value = r.articles[i].text.split(" ").length;  
                map[key] = value; 
            }
            return map;
        
    }


    function countWordsSafe(url) {
       
       // return fetch(url).then(r => r.json()).then(r => efunction(r))

       return fetch(url).then(r => r.json()).then(r => afunction(r)).catch(e => efunction())
    }

    function efunction(){
        var map = {};
            return map;
    }

    function getLargest(url) {   
         return fetch(url).then(r => r.json()).then(r => lfunction(r))
    }

    function lfunction(r){
            var max = 0;
            var id ;
            var key;
            var value;
            for(var i = 0; i < r.articles.length; i++) {
                key = r.articles[i]._id;  
                if (r.articles[i].text.split(" ").length > max) {
                    id = r.articles[i]._id;
                    max = r.articles[i].text.split(" ").length;
                }
            }
             return String(id);
        }

    exports.inclass = {
        
        author: "Chunxiao Zhang",
        countWords, countWordsSafe, getLargest
    }

})(this);
