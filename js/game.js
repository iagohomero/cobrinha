$(document).ready(function(){
  
    var matrix = initGame();

    $(document).keydown(function (e) {
        pressKey(e, matrix);
    });

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
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      //cell.innerHTML = matrix[i][j];
      if(matrix[i][j] == 1){
        cell.className = "snake";
      }
      else{
        cell.className = "background";
      }
    }
  }

  return matrix;
}

function pressKey(event, matrix) {
    var key = event.keyCode;

    console.log(key);

    var row = matrix.length;
    var column = matrix[0].length;
    var position = [];

    // for (i = 0; i < row; i++) { 
    //   for(j = 0; j < column; j++){
    //       if(matrix[i][j] == 1){
    //           position.push([i, j]);
    //       }
    //   }
    // }
    for (i = 0; i < row; i++) { 
      for(j = 0; j < column; j++){
          if(matrix[i][j] == 1){
              position = [i, j];
          }
      }
    }
    
    if(key == 37 || key == 65){
      if(position[1] != 0){
        console.log("KEY left pressed");
        matrix[position[0]][position[1]] = 0;
        matrix[position[0]][position[1] - 1] = 1;
      }
        // for (i = 0; i < position.length; i++) { 
        //   matrix[position[i][0]][position[i][1]] = 0;
        //   matrix[position[i][0]][position[i][1] - 1] = 1;
        // }
    }
    else if(key == 38 || key == 87){
      if(position[0] != 0){
        console.log("KEY up pressed");
        matrix[position[0]][position[1]] = 0;
        matrix[position[0] - 1][position[1]] = 1;
      }
        // for (i = 0; i < position.length; i++) { 
        //   matrix[position[i][0]][position[i][1]] = 0;
        //   matrix[position[i][0] - 1][position[i][1]] = 1;
        // }
    }
    else if(key == 39 || key == 68){
      if(position[1] != column - 1){
        console.log("KEY right pressed");
        matrix[position[0]][position[1]] = 0;
        matrix[position[0]][position[1] + 1] = 1;
      } 
        // for (i = 0; i < position.length; i++) { 
        //   matrix[position[i][0]][position[i][1]] = 0;
        //   matrix[position[i][0]][position[i][1] + 1] = 1;
        // }
    }
    else if(key == 40 || key == 83){
      if(position[0] != row - 1){
        console.log("KEY down pressed");
        matrix[position[0]][position[1]] = 0;
        matrix[position[0] + 1][position[1]] = 1;
      }
        // for (i = 0; i < position.length; i++) { 
        //   matrix[position[i][0]][position[i][1]] = 0;
        //   matrix[position[i][0] + 1][position[i][1]] = 1;
        // }
    }
    updateTable(matrix);
}

function updateTable(matrix){
  var table = document.getElementById("game");

  var row = matrix.length;
  var column = matrix[0].length;

  for (i = 0; i < row; i++) { 
    for(j = 0; j < column; j++){
      cell = table.rows[i].cells[j];
      // cell.innerHTML = matrix[i][j];

      if(matrix[i][j] == 1){
        cell.className = "snake";
      }
      else{
        cell.className = "background";
      }
    }
  }
}



