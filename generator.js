const PI = 3.14159;

function startGenerator() {
    generateTrans();
}

function generateTrans() {
    randomData("trans",trans_data);
}

function randomData(elementId,dataName) {
    var t1Num = Math.floor(Math.random()*dataName.length);
    var text1 = document.getElementById(elementId);
    text1.innerHTML = dataName[t1Num];    
}
