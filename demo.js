function analyzeClick(){
  var selected_color = document.getElementById("color")
  var selected_place = document.getElementById("place")
  var selected_course = document.getElementById("course")
  var color = selected_color.options[selected_color.selectedIndex].value
  alert(color);
}
