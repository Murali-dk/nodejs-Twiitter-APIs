

let input = document.getElementById("search");
let booksList = document.getElementById("booksContainer");
let spin = document.getElementById("spinner");

function displayBooks(item){
    let {author, imageLink} = item;

    let container = document.createElement("div");
    container.classList.add("col-6", "mb-5")

    let img = document.createElement("img")
    img.src = imageLink
    img.classList.add("image")
    container.appendChild(img)

    let bookAuthor = document.createElement("p")
    bookAuthor.textContent = author
    bookAuthor.classList.add("para")
    container.appendChild(bookAuthor)

    booksList.appendChild(container)
    spin.classList.add("d-none")
}

function displayTheContent(event){
    if (event.key === "Enter"){
        spin.classList.remove("d-none")
        booksList.textContent = "";

        let userInput = input.value;
        let url = "https://apis.ccbp.in/book-store?title=" + userInput;
        let option = {
            method: "GET"
        }

        fetch(url, option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            console.log(jsonData)
            let {search_results} = jsonData;

            let head = document.createElement("h1");
            head.textContent = "Popular BOOKS";
            head.classList.add("col-12", "text-center", "mb-5", "mt-5")
            head.style.color = "green"
            booksList.appendChild(head);
            spin.classList.add("d-none")

            if (search_results.length < 1){
                head.textContent = "No Books Found"
                head.style.color = "grey"
            }
            else{
                for (let item of search_results){
                displayBooks(item)
            }
            }
        })
    }
}

input.addEventListener("keydown", displayTheContent);