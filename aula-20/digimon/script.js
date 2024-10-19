const buscarDados = async () => {
    const response = await fetch("https://gsi.fly.dev/characters")
   const data = await response.json()
   let corpo = document.querySelector(".tableBody")
   for (let index = 0; index < data.results.length; index++) {
    let linha = document.createElement("tr")
    linha.innerHTML = `
    <td>${data.results[index].id}</td>
    <td>${data.results[index].name}</td>
    <td>${data.results[index].rarity}</td>
    <td>${data.results[index].weapon}</td>
    <td>${data.results[index].vision}</td>
    
  
  
    ` 
    corpo.appendChild(linha)
   }

} 

buscarDados();