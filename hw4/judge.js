var neighbors=[];
function judge(fieldArr,coverIndex, coverX, coverY) {
	var count = 0;
	var neighbor = []
	neighbor = getNeighbors(coverIndex);
	console.log(neighbor);
	neighbor.forEach(function(value) {
		if(fieldArr[value] == true) {
			count ++;
		}
	});
	console.log(count);
}

function getNeighbors(coverIndex) {
	
		coverIndex.forEach(function(value){
			if(value < 5) {
				if (value > 0 ) {
					neighbors.push([-1,-1, value-1, value+1, value+5, value +6]);
				}
				else if (value == 0){
					neighbors.push([-1,-1,-1,1,5,6]);
				} else if (value == 4) {
					neighbors.push([-1,-1,3,-1,9,10]);
				}
			} else if (value >= 5 && value < 11) {
				if (value > 5 ) {
					neighbors.push([value - 6,value - 5, value-1, value+1, value+6, value + 7]);
				}
				else if (value == 5){
					neighbors.push([-1,0,-1,6,11,12]);
				} else if (value == 10) {
					neighbors.push([4,-1,9,-1,16,17]);
				}
			} else if (value >= 11 && value < 18) {
				if (value > 11 ) {
					neighbors.push([value - 7,value - 6, value-1, value+1, value+7, value + 8]);
				}
				else if (value == 11){
					neighbors.push([-1,5,-1,12,18,19]);
				} else if (value == 17) {
					neighbors.push([10,-1,16,-1,24,25]);
				}
			} else if (value >= 18 && value < 26) {
				if (value > 18 ) {
					neighbors.push([value - 8,value - 7, value-1, value+1, value+8, value + 9]);
				}
				else if (value == 18){
					neighbors.push([-1,11,-1,19,26,27]);
				} else if (value == 25) {
					neighbors.push([17,-1,24,-1,33,34]);
				}
			} else if (value >= 26 && value < 35) {
				if (value > 26 ) {
					neighbors.push([value - 9,value - 8, value-1, value+1, value+8, value + 9]);
				}
				else if (value == 26){
					neighbors.push([-1,18,-1,27,-1,35]);
				} else if (value == 34) {
					neighbors.push([25,-1,33,-1,42,-1]);
				}
			} else if (value >= 35 && value < 43) {
				if (value > 35 ) {
					neighbors.push([value - 9,value - 8, value-1, value+1, value+7, value + 8]);
				}
				else if (value == 35){
					neighbors.push([26,27,-1,36,-1,43]);
				} else if (value == 42) {
					neighbors.push([33,34,41,-1,49,-1]);
				}
			} else if (value >= 43 && value < 50) {
				if (value > 43 ) {
					neighbors.push([value - 8,value - 7, value-1, value+1, value+6, value + 7]);
				}
				else if (value == 43){
					neighbors.push([35,36,-1,44,-1,50]);
				} else if (value == 49) {
					neighbors.push([41,42,48,-1,55,-1]);
				}
			} else if (value >= 50 && value < 56) {
				if (value > 50 ) {
					neighbors.push([value - 7,value - 6, value-1, value+1, value+7, value + 8]);
				}
				else if (value == 50){
					neighbors.push([43,44,-1,51,-1,56]);
				} else if (value == 55) {
					neighbors.push([48,49,54,-1,60,-1]);
				}
			} else {
				if (value > 56 && value < 60 ) {
					neighbors.push([value - 6,value - 5, value-1, value+1, -1, -1]);
				}
				else if (value == 56){
					neighbors.push([50,51,-1,57,-1,-1]);
				} else if (value == 60) {
					neighbors.push([54,55,59,-1,-1,-1]);
				}
			}
		});
		return neighbors;
		console.log(neighbors);

}
