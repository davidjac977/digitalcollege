const buscarDados = async () => {
    const response = await fetch("https://narutodb.xyz/api/character")
   const data = await response.json()
   let corpo = document.querySelector(".tableBody")
   for (let index = 0; index < data.characters.length; index++) {
    let linha = document.createElement("tr")
    linha.innerHTML = `
    <td>${data.characters[index].id}</td>
    <td>${data.characters[index].name}</td>
    <td><img src="${data.characters[index].images[0]}" alt="" class="w-36 h-auto rounded-full object-cover"</td>
    <td>${data.characters[index].jutsu}</td>
  
  
    ` 
    corpo.appendChild(linha)
   }

} 

buscarDados();