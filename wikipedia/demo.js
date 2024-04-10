let inputEl = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResults");
let loading = document.getElementById("spinner");

function createAndAppendResult(result) {
    loading.classList.add("d-none");
    let {
        link,
        title,
        description
    } = result;
    let container = document.createElement("div");
    container.classList.add("result-item");

    let titleHeading = document.createElement("a");
    titleHeading.textContent = title;
    titleHeading.classList.add("result-title");
    titleHeading.href = link;
    titleHeading.target = "_blank";
    container.appendChild(titleHeading);

    let br1 = document.createElement('br');
    container.appendChild(br1);

    let linkHead = document.createElement("a");
    linkHead.textContent = link;
    linkHead.classList.add("result-url");
    linkHead.href = link;
    linkHead.target = "_blank";
    container.appendChild(linkHead);

    let br2 = document.createElement('br');
    container.appendChild(br2);

    let content = document.createElement("p");
    content.textContent = description;
    content.classList.add("link-description");
    container.appendChild(content);

    searchResult.appendChild(container);
}

function addDisplayTheResult(search_result) {
    for (let result of search_result) {
        createAndAppendResult(result);
    }
}

function dispalyTheResult(event) {
    if (event.key === "Enter") {
        searchResult.textContent = "";
        loading.classList.remove("d-none");
        let userValue = inputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + userValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                addDisplayTheResult(search_results);
            });
    }
}

inputEl.addEventListener("keydown", dispalyTheResult);




