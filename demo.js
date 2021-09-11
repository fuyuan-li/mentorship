function analyzeClick(){
  var scores={
    'red': [1,0,2],
    'blue': [2,0,1],
    'golden': [0,2,1],
    'black': [2,1,0],
    'shopping': [0,1,1],
    'beach': [0,0,2],
    'movie': [0,1,2],
    'book': [2,0,0],
    'art': [0,1,1],
    'math': [2,1,0],
    'history': [1,2,0],
    'music': [1,0,1],
    'lit': [0,1,2],
  }
  var mentor_list = ['Dr. Physics', 'Mr.Banker', 'Ms.Violin']
  var selected_color = document.getElementById("color").selectedOptions[0].value; //querySelector('#color').selectedOptions[0].text
  var selected_place = document.getElementById("place").selectedOptions[0].value;
  var selected_course = document.getElementById("course").selectedOptions[0].value;
  yourscore = scores[selected_color].map((e,i)=>e+scores[selected_place][i])
  yourscore = yourscore.map((e,i)=>e+scores[selected_course][i])
  recom = yourscore.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  thisguy = mentor_list[recom]
  msg = 'Your interest score is: ['.concat(yourscore, ']. We suggest ', thisguy, ' for you!')
  alert(msg);
  
}
