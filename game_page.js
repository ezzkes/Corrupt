funtion addUser(){
player1_name=document.getElementById("player1_name_input").value
player2_name=document.getElementById("player2_name_input").value
localstorge.setItem("player1_name",player1_name)
localstorge.setItem("player2_name",player2_name)
window.loction="game_page.html"
}
