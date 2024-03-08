console.log("connected");


//let plants = [
//    {
//        "description":"Easy to take care of houseplant.",
//      "photo": "rubberplant.jpg",
//        "name":"Rubber Plant",
//    },
//    {
//        "description":"Easy to take care of houseplant.",
//        "photo": "rubberplant.jpg",
//      "name":"Rubber Plant",
//    }
//];


//for (let i = 0; i <plants.length; i++)
//{   $('body').append('
//    <div>
//   <p>${plants[i].name}</p>
//   <h2>${plants[i].price}</h2>
//    </div>');
// //}


// fetch("data.json")
//      .then(function (response) {
//       return response.json();
//      })
//      .then(function (data) {
//         for (let i =0; i <data.plants.length; i++) {
//             $('body').append(`
//             <div>
//                  <p>${data.plants[i].name}</p>
//                  <h2>${data.plants[i].description}</h2>
//             </div>
//             `);
//         }
//      })
//      .catch(function (error) {
//      // Display error message 
//     })



//     .catch(function(error){
//         $('body').append('<h1>Error!</h1> <p> Try again lete</p>')
//         console.log(error);
//     })
async function searchBooks() {
    try {
        const searchTerm = document.getElementById("searchInput").value;
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const books = data.items;

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = '';

        books.forEach(book => {
            const imageSrc = book.volumeInfo.imageLinks.thumbnail;
            const infoLink = book.volumeInfo.infoLink;

            const imgElement = document.createElement("img");
            imgElement.src = imageSrc;

            imgElement.addEventListener("click", () => {
                window.open(infoLink, "_blank");
            });

            resultsDiv.appendChild(imgElement); 
        });

    } catch (error) {
        console.error("Error:", error);
    }
}
