$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })
  

$("#button01").on("click",function(){
  let students_tet = "";

  for(let i=0; i<students.length; i++){
    students_txt += students[i]
    students_txt +='/'
  }

  $("#content").students_txt(students_txt);
})

$("#button02").text(students_txt);
})

for(let i=0; i<students.length; i++){
  students_txt += "<div id='student" + i +"' class='student7>" + students[i] +
  "</div>"
}
$("#content").html(students_txt);
