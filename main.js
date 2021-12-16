Webcam.set({
    height:250,
    width:250,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML = "<img id='captured_image' src '"+ data_uri + "' ></img>"
    });
}

console.log("ml5 version:",ml5.version);
classifier = classify.imageClassifier("https://teachablemachine.withgoogle.com/models/OmMVSK5cc/model.json",modelloaded);

function modelloaded(){
    console.log("Model Loaded!")
}
function check()
{
    img = document.getElementById("captured_image");
classifier.classify(img,gotResults);
}

function gotResults(error,results){
 if(error){
     console.error(error);
 }else{
     console.log(results);
     document.getElementById("Prediction_1").innerHTML = results[0].label;
     document.getElementById("Prediction_2"),innerHTML = results[1].label;
     Prediction_1 = results[0].label;
     Predciion_2 = results[1].label;
     speak();
 }
}

function speak(){
    var synth = window.speechSynthesis;
    var prediction_1_speak = "First Prediction for your jester is" + Prediction_1;
    var prediction_2_speak = "and your second Prediction for your jester is" + Prediction_2;
    var utterthis = new SpeechSynthesisUtterance(prediction_1_speak + prediction_2_speak);
    synth.speak(utterthis);
}