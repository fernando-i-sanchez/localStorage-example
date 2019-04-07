$("#save").click(()=>{
  const val = $("#input-test").val()
  const obj = {
    drug_name: "plinkful",
    doctor_name: "Dr. Itor",
    dosage: "10000grams/sec"
  }
  localStorage.setItem('input_test',JSON.stringify(obj))
  $("#input-test").val("")
});

$("#load").click(()=>{
  const loaded_data = localStorage.getItem("input_test");
  const parsed_data = JSON.parse(loaded_data);
  const drug_name = parsed_data.drug_name;
  const doctor_name = parsed_data.doctor_name;
  const dosage = parsed_data.dosage;
  
  $("#input-test").val(parsed_data.drug_name)
  $("#content").append(drug_name);
  $("#content").append("<br>");
  $("#content").append(doctor_name);
  $("#content").append("<br>");
  $("#content").append(dosage);
})



// const question = prompt("Who are you?");
// if(question == "admin"){
//   $("#content").append(
//   `
//     <table>
//       <tr>
//         <th>Company</th>
//         <th>Contact</th>
//         <th>Country</th>
//       </tr>
//       <tr>
//         <td>Alfreds Futterkiste</td>
//         <td>Maria Anders</td>
//         <td>Germany</td>
//       </tr>
//       <tr>
//         <td>Centro comercial Moctezuma</td>
//         <td>Francisco Chang</td>
//         <td>Mexico</td>
//       </tr>
//       <tr>
//         <td>Ernst Handel</td>
//         <td>Roland Mendel</td>
//         <td>Austria</td>
//       </tr>
//       <tr>
//         <td>Island Trading</td>
//         <td>Helen Bennett</td>
//         <td>UK</td>
//       </tr>
//       <tr>
//         <td>Laughing Bacchus Winecellars</td>
//         <td>Yoshi Tannamuri</td>
//         <td>Canada</td>
//       </tr>
//       <tr>
//         <td>Magazzini Alimentari Riuniti</td>
//         <td>Giovanni Rovelli</td>
//         <td>Italy</td>
//       </tr>
//     </table>
//   `
//   )
// }
// else{
//   alert("YOURE NOT ALLOWED HERE")
// }

