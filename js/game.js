$(document).ready(function(){
  
    var matrix = initGame();
    var direction = null;
    
    var interval = window.setInterval(function(){ move(null, matrix, direction, interval) },  100);

    $(document).keydown(function (e) {
      direction = move(e, matrix, null, interval);
    });

    // window.setInterval(function(){
    //   var interval = window.setInterval(function(){ move(null, matrix, direction, interval) },  500);
    // }, 1);
});

function initGame() {
  
  var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 'f', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ];

  var row = matrix.length;
  var column = matrix[0].length;

  var table = document.getElementById("game");

  for (i = 0; i < row; i++) { 
    var tableRow = table.insertRow(i);

    for(j = 0; j < column; j++){
      var cell = tableRow.insertCell(j);
      if(matrix[i][j] == "f"){
        cell.className = "fruit";
      }
      else if(matrix[i][j] != 0){
        cell.className = "snake";
      }
      else{
        cell.className = "background";
      }
    }
  }

  return matrix;
}

function move(event, matrix, direction, interval) {
    if(event != null){
      var key = event.keyCode;
    }

    var row = matrix.length;
    var column = matrix[0].length;
    var position = getSnakePosition(matrix);

    try {
      if(key == 37 || key == 65 || direction == "left"){
        // console.log("KEY left pressed");
        moveLeft(matrix, position); 
        direction = "left";
      }
      else if(key == 38 || key == 87 || direction == "up"){
        // console.log("KEY up pressed");  
        moveUp(matrix, position); 
        direction = "up";
      }
      else if(key == 39 || key == 68 || direction == "right"){
        // console.log("KEY right pressed");
        moveRight(matrix, position); 
        direction = "right";
      }
      else if(key == 40 || key == 83 || direction == "down"){
        // console.log("KEY down pressed");
        moveDown(matrix, position); 
        direction = "down";
      }
    }catch(err) {
    }
    updateTable(matrix);
    console.log(matrix);
    //clearInterval(interval);
    return direction;
}

function moveLeft(matrix, position){
  var aux = null;
  if(matrix[position[0][1][0]][position[0][1][1] - 1] == 0 || matrix[position[0][1][0]][position[0][1][1] - 1] == "f"){
    for (i = 0; i < position.length; i++) {
      if(aux == null){
        if(matrix[position[0][1][0]][position[0][1][1] - 1] == "f"){
          matrix[position[0][1][0]][position[i][1][1] - 1] = matrix[position[0][1][0]][position[i][1][1]] + 1;
          generateFruit(matrix);
          break;  
        }
        else{
          matrix[position[i][1][0]][position[i][1][1] - 1] = matrix[position[i][1][0]][position[i][1][1]];  
          matrix[position[i][1][0]][position[i][1][1]] = 0;  
        }  
      }
      else{
        matrix[aux[0]][aux[1]] = matrix[position[i][1][0]][position[i][1][1]];
        matrix[position[i][1][0]][position[i][1][1]] = 0;
      }
      aux = [position[i][1][0], position[i][1][1]];
    }
  }
}

function moveUp(matrix, position){
  var aux = null;
  if(matrix[position[0][1][0] - 1][position[0][1][1]] == 0 || matrix[position[0][1][0] - 1][position[0][1][1]] == "f"){
    for (i = 0; i < position.length; i++) {
      if(aux == null){
        if(matrix[position[0][1][0] - 1][position[0][1][1]] == "f"){
          matrix[position[0][1][0] - 1][position[i][1][1]] = matrix[position[0][1][0]][position[i][1][1]] + 1;
          generateFruit(matrix);
          break;  
        }
        else{ 
          matrix[position[i][1][0] - 1][position[i][1][1]] = matrix[position[i][1][0]][position[i][1][1]];  
          matrix[position[i][1][0]][position[i][1][1]] = 0;
        }
      }
      else{
        matrix[aux[0]][aux[1]] = matrix[position[i][1][0]][position[i][1][1]];
        matrix[position[i][1][0]][position[i][1][1]] = 0;
      }
      aux = [position[i][1][0], position[i][1][1]];
    }
  }
}

function moveRight(matrix, position){
  var aux = null;
  if(matrix[position[0][1][0]][position[0][1][1] + 1] == 0 || matrix[position[0][1][0]][position[0][1][1] + 1] == "f"){
    for (i = 0; i < position.length; i++) {
      if(aux == null){
        if(matrix[position[0][1][0]][position[0][1][1] + 1] == "f"){
          matrix[position[0][1][0]][position[0][1][1] + 1] = matrix[position[0][1][0]][position[i][1][1]] + 1;
          generateFruit(matrix);
          break;  
        }
        else{
          matrix[position[i][1][0]][position[i][1][1] + 1] = matrix[position[i][1][0]][position[i][1][1]];
          matrix[position[i][1][0]][position[i][1][1]] = 0;
        }
      }
      else{
        matrix[aux[0]][aux[1]] = matrix[position[i][1][0]][position[i][1][1]];
        matrix[position[i][1][0]][position[i][1][1]] = 0;
      }
      aux = [position[i][1][0], position[i][1][1]];
    }
  } 
}

function moveDown(matrix, position){
  var aux = null;
  if(matrix[position[0][1][0] + 1][position[0][1][1]] == 0 || matrix[position[0][1][0] + 1][position[0][1][1]] == "f"){
    for (i = 0; i < position.length; i++) {
      if(aux == null){
        if(matrix[position[0][1][0] + 1][position[0][1][1]] == "f"){
          matrix[position[i][1][0] + 1][position[i][1][1]] = matrix[position[i][1][0]][position[i][1][1]] + 1;
          generateFruit(matrix);
          break;  
        }
        else{
          matrix[position[i][1][0] + 1][position[i][1][1]] = matrix[position[i][1][0]][position[i][1][1]];  
          matrix[position[i][1][0]][position[i][1][1]] = 0;
        }
      }
      else{
        matrix[aux[0]][aux[1]] = matrix[position[i][1][0]][position[i][1][1]];
        matrix[position[i][1][0]][position[i][1][1]] = 0;
      }
      aux = [position[i][1][0], position[i][1][1]];
    }
  }
}

function getSnakePosition(matrix){
  var row = matrix.length;
  var column = matrix[0].length;
  var position = [];
  for (i = 0; i < row; i++) { 
    for(j = 0; j < column; j++){
        if(matrix[i][j] != 0 && matrix[i][j] != "f"){
          position.push([ [matrix[i][j]] , [i, j] ]);
        }
    }
  }
  position.sort(sortFunction);
  return position;
}

function generateFruit(matrix) {
  var row = matrix.length;
  var column = matrix[0].length;

  row = Math.floor(Math.random() * row) + 0;  
  column = Math.floor(Math.random() * column) + 0;

  if(matrix[row][column] == 0){
    matrix[row][column] = "f";
  }
  else{
    generateFruit(matrix);
  }
}

function updateTable(matrix){
  var table = document.getElementById("game");

  var row = matrix.length;
  var column = matrix[0].length;

  for (i = 0; i < row; i++) { 
    for(j = 0; j < column; j++){
      cell = table.rows[i].cells[j];
      if(matrix[i][j] == "f"){
        cell.className = "fruit";
      }
      else if(matrix[i][j] != 0){
        cell.className = "snake";
      }
      else{
        cell.className = "background";
      }
    }
  }
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? 1 : -1;
    }
}



