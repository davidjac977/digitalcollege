const buscarDados = async () => {
    const response = await fetch("https://6714071b690bf212c7607f43.mockapi.io/Usuarios/users")
   const data = await response.json()
   let corpo = document.querySelector(".tableBody")
   for (let index = 0; index < data.length; index++) {
    let linha = document.createElement("tr")
    linha.innerHTML = `
    <td>${data[index].id}</td>
    <td>${data[index].nome}</td>
    <td>${data[index].cidade}</td>
    <td>${data[index].endereco}</td>
    <td>${data[index].email}</td>
    <td>${data[index].numero}</td>
    
  
    ` 
  corpo.appendChild(linha);
   }

} 

buscarDados();