const PI = 3.14159;

function startGenerator() {
    generateTrans();
    generateRainbow();
}

function generateTrans() {
    randomData("trans_data",trans_data);
}

function generateRainbow() {
    randomData("rainbow_data",rainbow_data);
}

function randomData(elementId,dataName) {
    var t1Num = Math.floor(Math.random()*dataName.length);
    var text1 = document.getElementById(elementId);
    text1.innerHTML = dataName[t1Num];    
}
