fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
for (let index = 0; index < data.results.length; index++) {
    let corpo = document.querySelector(".tableBody")
let linha = document.createElement("tr")
linha.innerHTML = `

<td>${data.results[index].id}</td>
<td>${data.results[index].name}</td>
<td>${data.results[index].status}</td>
<td>${data.results[index].species}</td>
<td>${data.results[index].type}</td>
<td><img src="${data.results[index].image}" alt="" class="w-36 h-auto rounded-full object-cover"</td>
<td>${data.results[index].origin.name}</td>
`
corpo.appendChild(linha)
}
})