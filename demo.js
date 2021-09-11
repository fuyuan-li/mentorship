function analyzeClick(){
  var selected_color = document.querySelector('#color').selectedOptions[0].text //.textetElementById("color").selectedOptions[0].text
  var selected_place = document.getElementById("place").selectedOptions[0].text
  var selected_course = document.getElementById("course").selectedOptions[0].text
  alert(selected_color.concat(',', selected_place, ',', selected_course);
}
