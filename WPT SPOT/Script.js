function addintoTable () {
    let obj = [ ] ;
    let name = document.getElementById('exampleInputEmail1').value ;
    let number = document.getElementById('exampleInputPassword1').value ;
    let dest = document.getElementById('Dest').value ;
    let origin = document.getElementById('Origin').value ;
    console.log(origin.options[origin.selectedIndex].value) ;
    let clas = document.getElementById('class').value ;
    let row = `<td> ${name} </td>
               <td> ${number} </td>
               <td> ${origin} </td>
               <td> ${dest} </td>
               <td> ${clas} </td>`
    document.getElementById("tbody").innerHTML += row ;
}