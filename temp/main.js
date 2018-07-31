(function () {
    window.addEventListener('DOMContentLoaded', function () {

        
    function setThis() { 
        var doc = document;
        var dataJson = Q.loadJSON('data.json', function (data) {
            var da = data;
            console.log(data);
            
            var indexNew = doc.querySelector("#main_temp_header_new");
            var indexDisplay = doc.querySelector("#next_display");
            var indexShow = doc.querySelector("#main_temp_box");
            //console.log(index);
            var i = 0;
            var ile = 0;
            let d = new Date();
            let leng = data.pomiar.length;

            function setPom (data){
                let d = new Date();
                var index = doc.querySelectorAll(".temp_show");
                let dat = d.getDate()+ "/" + d.getMonth() + "/" + d.getFullYear() +" || " + d.getHours() + " : " + d.getMinutes();

                const el = doc.createElement("div");
                el.innerHTML = '<p id="data">' + dat + '</p>' + '<p id="pomiar">' + data.pomiar[i].wartosc + '&#186'+ '</p>';
                el.classList.add("temp_show");
             
                if(index.length == 0) {
                    indexShow.appendChild(el);
                } 

                if( index.length <= 5 ){
                    console.log(index.length);
                    const friElement = indexShow.firstElementChild;
                    indexShow.insertBefore(el,friElement);
                } 
                
                // if(index.length > 5 ){
                //     console.log(index.length);
                //     const olditem = index[5];
                //     const newitem = el;
                //     indexShow.removeChild(olditem);
                //     i--;
                // }
                //indexShow.appendChild(el);
               // index[i].innerHTML = '<p id="data">' + dat + '</p>' + '<p id="pomiar">' + data.pomiar[i].wartosc + '&#186'+ '</p>';
                indexNew.innerHTML = 'Current reading: ' + data.pomiar[i].wartosc + '&#186';
                i++;
                
                console.log(index);
            }
            
            var countDown = function(){
                let warto = 25;

                function countTime (e){
                    let display = e;
                    
                    if(warto > 0){
    
                             display.innerHTML =  'Next reading after: ' + warto;
                             warto--; 
                    } else {
                        console.log('czysc');
                        clearInterval(setDisplay);
                    }
                }
                countTime(indexDisplay);
    
    
                var timedisplay = 1000;
                var setDisplay = setInterval(() => {
                    countTime(indexDisplay);
                }, timedisplay);

            };

            countDown();

            var timeout = 1000;
            var set = setInterval(() => {
                if(i <= 5){
                    setPom(da);
                } else {
                    clearInterval(set);
                    console.log('Koniec wczytywania');
                }
            }, timeout);

        });
       
    }

    setThis();

    var timethis = 25000;
    var setInt = setInterval(() => {
            setThis();
            console.log('Nastepny odczyt');
    }, timethis);

    function setIner (fun, time) {



    }
    // var dJson = Q.loadJSON('data.json', function (data) {
    //     var getwynik = data;
    //     console.log(getwynik);
    //     return getwynik;
    // });

    //console.log(dJson);
    var sendThis = {
        "pomiar":[
            {
                "wartosc": 30
            }
        ]
        
    };

    // setTimeout(loadDocA, 2000);
    // function loadDoc() {
    //     var data = {
    //         "pomiar":[
    //             {
    //                 "wartosc": 30
    //             }
    //         ]
    //     }; // this is your data that you want to pass to the server (could be json)
    //     //next you would initiate a XMLHTTPRequest as following (could be more advanced):
    //     var url = "get.json";//your url to the server side file that will receive the data.
    //     var http = new XMLHttpRequest();
    //     http.open("POST", url, true);
    
    //     //Send the proper header information along with the request
    //     http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     // http.setRequestHeader("Content-length", '0');
    //     // http.setRequestHeader("Connection", "close");
    
    //     http.onreadystatechange = function() {//Call a function when the state changes.
    //         if(http.readyState == 4 && http.status == 200) {
    //             alert(http.responseText);//check if the data was received successfully.
    //         }
    //     };
    //     http.send("fname=Henry&lname=Ford");
    
    // }
    // function loadDocA() {
    //     var xhttp = new XMLHttpRequest();
    //     var u = 2;
    //     xhttp.open("POST", "demo.json", true);
    //     // xhttp.onreadystatechange = function() {
    //     //   if (this.readyState == 4 && this.status == 200) {
    //     //     document.getElementById("topbar").innerHTML = this.responseText;
    //     //   }
    //     // };
        
    //     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xhttp.send(u);
    //     document.getElementById("topbar").innerHTML = xhttp.responseText;
    //   }
    
    }, false);
   

    
})();