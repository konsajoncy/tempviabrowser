(function (root){
   
    console.log(window);
    var Q = {};
    var loadJSON = function(path, callback){
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path,true);
        xobj.onreadystatechange = function() {
            if(xobj.readyState === 4) {
               var jsObj = JSON.parse(xobj.responseText);
               
            if(callback) callback(jsObj);

            }
            
        };
        xobj.send(null);
       
    };
    

    Q.add = function(){

    };
    
    Q.loadJSON = loadJSON;

    window.Q = Q;
})(this || {});