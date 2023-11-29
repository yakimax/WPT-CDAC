function buttonOnClick () {
    let paragraphEvent = document.getElementById("para") ;
    paragraphEvent.style.color = 'red' ;
    paragraphEvent.style.fontSize = "x-large" ;
    paragraphEvent.style.fontFamily = "cursive" ;
}

function addContent () {
    let formObj =  [];
    let formEvent = document.getElementById("form") ;
    let inputs = formEvent.querySelectorAll('input')   ;
    for ( let i = 0 ; i < formEvent.length ; i++ ) {
        let ourKnownkey = inputs[i].labels[0].outerText ;
        let ourValue = inputs[i].value ; 
        formObj[ourKnownkey] = ourValue ;
    }
    console.log("hi");

    for ( let i = 0 ; i < formObj.length ; i++ ) {
        console.log("hi");

         document.getElementById("demo").innerHTML = "hello" ;
    }
}