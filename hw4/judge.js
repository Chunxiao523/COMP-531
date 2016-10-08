var de = false;
function judge(layer, b, fieldArr,coverMap, newPiece) {
	var neighbors = [];
	var increasedPiece=[];
		newPiece.forEach(function(value, index){
			newPiece[index][2]=getNeighbors(value[0]);
		});
		newPiece.forEach(function(value, index) {
			de = see(value[2], value[1], coverMap, fieldArr);
			if (de) {
				increasedPiece[index] = value[0];
					}
			// }else {
			// 	return;
			// }
		});
		increasedPiece.forEach(function(value, index) {
			if (coverMap[value] != undefined) {
				coverMap[value][3] ++;
				coverMap[value][4] = color[coverMap[value][3]];
			}
			//judge(layer, b, fieldArr, coverMap, increasedPiece);
			de = false;
		})
		b.clearRect(0,0,layer.width, layer.height);
		coverMap.forEach(function(v,i){ 
			if ( v != undefined) {
            	if (v[0]) {
                drawHex(b, v[1], v[2], R, v[4]);
           }
       }
        });
}

function see(neighbor, level, coverMap, fieldArr) { // 找出当前的方块周围哪些是需要消除的
	var count = 0;
	var deleted = [];
	var potential = [];
		neighbor.forEach(function(value, index) {
			if(value != -1 && coverMap[value] != undefined) {
				if (coverMap[value][3] == level) {
					count ++;
					potential[index] = value;
					if(count >=2){
						potential.forEach(function(value) {
							if (value != undefined) {
								fieldArr[value][2]=false;
								coverMap[value] = undefined;
					  			setScore(200);
								de = true;
							}
						});
						
						}
					}	
				}
			});
		
		return de;
}

function getNeighbors(value) {
	var neighbors=[];
			if(value < 5) {
				if (value > 0 ) {
					neighbors=[-1,-1, value-1, value+1, value+5, value +6];
				}
				else if (value == 0){
					neighbors=[-1,-1,-1,1,5,6];
				} else if (value == 4) {
					neighbors[-1,-1,3,-1,9,10];
				}
			} else if (value >= 5 && value <= 10) {
				if (value > 5 && value < 10) {
					neighbors=[value - 6,value - 5, value-1, value+1, value+6, value + 7];
				}
				else if (value == 5){
					neighbors=[-1,0,-1,6,11,12];
				} else if (value == 10) {
					neighbors=[4,-1,9,-1,16,17];
				}
			} else if (value >= 11 && value <= 17) {
				if (value > 11 && value < 17 ) {
					neighbors=[value - 7,value - 6, value-1, value+1, value+7, value + 8];
				}
				else if (value == 11){
					neighbors=[-1,5,-1,12,18,19];
				} else if (value == 17) {
					neighbors=[10,-1,16,-1,24,25];
				}
			} else if (value >= 18 && value <= 25) {
				if (value > 18 && value < 25) {
					neighbors=[value - 8,value - 7, value-1, value+1, value+8, value + 9];
				}
				else if (value == 18){
					neighbors=[-1,11,-1,19,26,27];
				} else if (value == 25) {
					neighbors=[17,-1,24,-1,33,34];
				}
			} else if (value >= 26 && value <= 34) {
				if (value > 26 && value < 34) {
					neighbors=[value - 9,value - 8, value-1, value+1, value+8, value + 9];
				}
				else if (value == 26){
					neighbors=[-1,18,-1,27,-1,35];
				} else if (value == 34) {
					neighbors=[25,-1,33,-1,42,-1];
				}
			} else if (value >= 35 && value <= 42) {
				if (value > 35 && value < 42) {
					neighbors=[value - 9,value - 8, value-1, value+1, value+7, value + 8];
				}
				else if (value == 35){
					neighbors=[26,27,-1,36,-1,43];
				} else if (value == 42) {
					neighbors=[33,34,41,-1,49,-1];
				}
			} else if (value >= 43 && value <= 49) {
				if (value > 43 && value < 49) {
					neighbors=[value - 8,value - 7, value-1, value+1, value+6, value + 7];
				}
				else if (value == 43){
					neighbors=[35,36,-1,44,-1,50];
				} else if (value == 49) {
					neighbors=[41,42,48,-1,55,-1];
				}
			} else if (value >= 50 && value <= 55) {
				if (value > 50 && value < 55) {
					neighbors=[value - 7,value - 6, value-1, value+1, value+7, value + 8];
				}
				else if (value == 50){
					neighbors=[43,44,-1,51,-1,56];
				} else if (value == 55) {
					neighbors=[48,49,54,-1,60,-1];
				}
			} else {
				if (value > 56 && value < 60 ) {
					neighbors=[value - 6,value - 5, value-1, value+1, -1, -1];
				}
				else if (value == 56){
					neighbors=[50,51,-1,57,-1,-1];
				} else if (value == 60) {
					neighbors=[54,55,59,-1,-1,-1];
				}
			}
		return neighbors;
}
