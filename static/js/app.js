
d3.select("#find-date").on("click", function (event) {
    d3.event.preventDefault();
    var date = d3.select("#date-input").property("value");


date = date.replace(/(^|\/)0+/g, "$1");

var col = [];

for (var i = 0; i < dataSet.length; i++) {
    for (var key in dataSet[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

var table = document.getElementById("ufo-table");

var tr = table.insertRow(-1); 

var headers = ["Date", "City", "State", "Country", "Shape", "Duration in Minutes", "Comments"]
for (var i = 0; i < headers.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = headers[i];
            tr.appendChild(th);
        }

for (var i = 0; i < dataSet.length; i++) {
        if (dataSet[i][col[0]] === date) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++)  {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = dataSet[i][col[j]];
            }
        }
    }
});
