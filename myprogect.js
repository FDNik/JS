var arr = [];
var space;
var empti;
var emptj;

//функция загрузки страницы
window.onload = function() {
  space = document.getElementById("space");
  game();
  document.getElementById("reset").onclick = game;
}

//функция замены значений соседних ячеек
function change(arr, i1, j1, i2, j2) {
  temp = arr [i1][j1];
  arr[i1][j1] = arr[i2][j2];
  arr[i2][j2] = temp;
}

//вся игра
function game() {
  //формирование массива 1-15 и пустая ячейка в конце
  for (i = 0; i < 4; i++) {
    arr[i] = [];
    for (j = 0; j < 4; j++) {
      if (i + j !=6) arr [i][j] = 4*i + j + 1;
      else arr [i][j] = "";
    }
  }
  //перемешиваем головоломку за 1300 ходов
  empti = 3;
  emptj = 3;
  for (i = 0; i<1300; i++) {
    switch (Math.round(3*Math.random())) {
      case 0: if (empti != 0) {
        change (arr, empti, emptj, --empti, emptj)
        break
      }
      case 1: if (empti != 3) {
        change (arr, empti, emptj, ++empti, emptj)
        break
      }
      case 2: if (emptj != 0) {
        change (arr, empti, emptj, empti, --emptj)
        break
      }
      case 3: if (emptj != 3) change (arr, empti, emptj, empti, ++emptj);
    }
  }

//формирование игрового поля
  var table = document.createElement("table");
  for(i = 0; i < 4; ++i){
		var row = document.createElement("tr");
		for(j = 0; j < 4; ++j){
			var cell = document.createElement("td");
				cell.id = i + " " + j;
				//cell.onclick = cellClick;
				cell.innerHTML = arr[i][j];
				row.appendChild(cell);
		}
		table.appendChild(row);
	}

  //обнуление игрового поля предыдущей игры
  if(space.childNodes.length == 1)
    space.removeChild(space.firstChild);

  //вывод нового игрового поля на странице
  space.appendChild(table);

}
