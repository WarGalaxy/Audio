function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VI2o6ucH0/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log('Got Result')
    if(error){
        console.log(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1
        random_number_g = Math.floor(Math.random()*255)+1
        random_number_b = Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+(results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r + ","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r + ","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('alien1')
        img2 = document.getElementById('alien2')
        img3 = document.getElementById('alien3')
        img4 = document.getElementById('alien4')
    }

    if(results[0].label == "Palma"){
        img1.src = 'foca.gif';
        img2.src = 'canguru.png';
        img3.src = 'marmota.png';
        img4.src = 'rato.png';
    } else  
    if(results[0].label == "Batida"){
        img1.src = 'foca.png';
        img2.src = 'canguru.gif';
        img3.src = 'marmota.png';
        img4.src = 'rato.png';
    }else  
    if(results[0].label == "Grito"){
        img1.src = 'foca.png';
        img2.src = 'canguru.png';
        img3.src = 'marmota.gif';
        img4.src = 'rato.png';
    }else  
    if(results[0].label == "Assobio"){
        img1.src = 'foca.png';
        img2.src = 'canguru.png';
        img3.src = 'marmota.png';
        img4.src = 'rato.gif';
    }
}



