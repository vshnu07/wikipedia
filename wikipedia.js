let searchinpel = document.getElementById("searchInput");
let searchresultel = document.getElementById("searchResults");
let spinnerel = document.getElementById("spinner");

function createandappendsearchresult(result) {
    let {
        title,
        link,
        description
    } = result;
    //div container
    let resultitem = document.createElement("div");
    resultitem.classList.add("result-item");
    searchresultel.appendChild(resultitem);
    //anchor title
    let resultTitle = document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.textContent = title;
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultitem.appendChild(resultTitle);
    //title break
    let titlebreakel = document.createElement("br");
    resultitem.appendChild(titlebreakel);
    //anchor url
    let urlel = document.createElement("a");
    urlel.classList.add("result-url");
    urlel.href = link;
    urlel.target = "_blank";
    urlel.textContent = link;
    resultitem.appendChild(urlel);
    //line break
    let linebrel = document.createElement("br");
    resultitem.appendChild(linebrel);
    //description
    let descriptionel = document.createElement("p");
    descriptionel.classList.add("link-description");
    descriptionel.textContent = description;
    resultitem.appendChild(descriptionel);
}

function displayresult(searchresult) {
    spinnerel.classList.toggle("d-none");
    for (let result of searchresult) {
        createandappendsearchresult(result);
    }
}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        searchresultel.textContent = "";
        spinnerel.classList.toggle("d-none");
        let searchinpval = searchinpel.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchinpval;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayresult(search_results);
            })
    }
}
searchinpel.addEventListener("keydown", searchwikipedia);