(function() {

var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");


// make an array from array-like object (called 'nodeList')

function makeArray(nodeList) {

	var arr = [];

	for (var i = 0; i < nodeList.length; i++) {

		arr.push(nodeList[i]);

	}

	return arr;
}

// clear all CSS classes from the table 

function clearClassName(nodeList) {

	for(var i = 0; i < nodeList.length; i++) {

		nodeList[i].className = '';

	}

};


function sortBy(e) {

	var target = e.target;

	//make array from array-like objects

		thsArr = makeArray(ths);
		trsArr = makeArray(trs);

	// check index of clicked element

		index = thsArr.indexOf(target);

	// create document fragment where new table wil be stored

		docFrag = document.createDocumentFragment();

	// add/change arrow

		order = (target.className === '' || target.className === 'desc') ? 'asc' : 'desc';

	clearClassName(ths);


	// sort tabelRows>their children>their content

	trsArr.sort(function(a, b) {

		var tdA = a.children[index].textContent,
			tdB = b.children[index].textContent;

		if(tdA < tdB) {
			return order === 'asc' ? -1 : 1;
		} else if(tdA > tdB) {
			return order === 'asc' ? 1 : -1;
		} else {
			return 0;
		}

	})

	// add each table row to document fragment

	trsArr.forEach(function(tr){

		docFrag.appendChild(tr);
	})

	// add document fragment to whole bodu of the table
	target.className = order;
	table.querySelector('tbody').appendChild(docFrag);

};


for (var i = 0; i < ths.length; i++) {

	ths[i].onclick = sortBy;

}


})();