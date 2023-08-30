var player_name_one = "";
var player_name_two = "";

function gapn(){
    player_name_one = localStorage.getItem("player_1");
    player_name_two = localStorage.getItem("player_2")

    document.getElementById("player_name1").innerHTML = player_name_one;
    document.getElementById("player_name2").innerHTML = player_name_two;

    document.getElementById("player_name11").innerHTML = player_name_one;
    document.getElementById("player_name22").innerHTML = player_name_two;
}

function send(){
    
}