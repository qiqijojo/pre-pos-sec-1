function collect_same_elements(collection_a, collection_b) {
	var arr = [];
 	for(var i=0;i<collection_a.length;i++){
		var index = collection_b.indexOf(collection_a[i]);
			if(index>=0){
				arr.push(collection_a[i]);
			}
	}
	return arr;
}

module.exports = collect_same_elements;
