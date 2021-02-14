let tbody = document.getElementById("body");
let buttons = document.getElementById("buttons");
let btn1 = document.getElementById("btn1");
let i = 1;



btn1.addEventListener("click", () =>{
    fetch(`https://swapi.dev/api/planets/?page=1`)
    .then((respons) =>{
        return respons.json();
    })
    .then((data) =>{
        console.log(data.results);
        printData(data.results);
        btn1.remove();
        nextPageButtonPrev();
    })
});

let nextPageButtonPrev = () =>{
    
    let previousPage = document.createElement("button");
    previousPage.setAttribute("id", "prevPage");
    previousPage.innerHTML = `Previous`;
    buttons.appendChild(previousPage);  
    previousPage = document.getElementById("prevPage");

    previousPage.addEventListener("click", () =>{
        i--;
        console.log(i);
        fetch(`https://swapi.dev/api/planets/?page=${i}`)
        .then((respons) =>{
            console.log(respons);
            return respons.json();
        })
        .then((data) =>{
            printData(data.results);
        })
        .catch(() =>{
            console.log("No more Previous pages");
        })
    });
    
    let nextPage = document.createElement("button");
    nextPage.setAttribute("id", "nextPage");
    nextPage.innerHTML = `Next Page`;
    buttons.appendChild(nextPage);
    nextPage = document.getElementById("nextPage");
    
    nextPage.addEventListener("click", () =>{
        i++;
        console.log(i);
        fetch(`https://swapi.dev/api/planets/?page=${i}`)
        .then((respons) =>{
            console.log(respons);
            return respons.json();
        })
        .then((data) =>{
            printData(data.results);
        })
        .catch(() =>{
            console.log("No more Data to see");
        })
    });

}


let printData = data =>{
    tbody.innerHTML = " ";
    for(let i = 0; i < data.length; i++){
            if(i < data.length && i )
        tbody.innerHTML += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].population}</td>
        <td>${data[i].climate}</td>
        <td>${data[i].gravity}</td>
        `;
    }
}



