var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
function start()
{
    recognition.start();
} 
recognition.onresult = function(event){
  console.log(event);
  var Content = event.results[0][0].transcript;
  console.log(Content);
  if (Content == "selfie"){
console.log("taking selfie---");
save();
  }
}
function save(){   
    var synth = window.speechSynthesis;
    Webcam.attach('#camera');
    Webcam.set({
      width:500,
      height:300,
      image_format : 'png',
      jpeg_quality:90
  });
  
setTimeout(function(){
  image_id = "selfie1";
  speak_data = "Taking your first Selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  take_snapshot();

},5000)
setTimeout(function(){

  image_id = "selfie2";
  speak_data = "Taking your second  Selfie in 10 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  take_snapshot();

},10000)
setTimeout(function(){

  image_id = "selfie3";
  take_snapshot();
  speak_data = "Taking your third Selfie in  15 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);


},15000)
}
function take_snapshot(){
  console.log(image_id);
  Webcam.snap(function(data_uri){

    if(image_id == "selfie1"){

      document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
    if (image_id == "selfie2"){
      document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
   if (image_id == "selfie3"){
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
   }

  })
}