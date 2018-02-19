var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.bankgeheimnisse.ch/cantonStats.json", true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var table = document.getElementById('stats');
    var stats = JSON.parse(xhr.responseText);
    for (var i = 0; i < stats.length / 2; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        var textNode = document.createTextNode(stats[i].name);
        cell.appendChild(textNode);
        cell = row.insertCell();
        textNode = document.createTextNode(stats[i].count);
        cell.appendChild(textNode);
        cell = row.insertCell();
        textNode = document.createTextNode(stats[i+stats.length/2].name);
        cell.appendChild(textNode);
        cell = row.insertCell();
        textNode = document.createTextNode(stats[i+stats.length/2].count);
        cell.appendChild(textNode);
    }
  }
};
xhr.send();
