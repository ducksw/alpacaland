function ms1() {
  let mision1 = document.getElementById('mision1');
  let msg = prompt("Ingrese el codigo");

  if (msg == "tu vieja") {
    localStorage.setItem('mis1', mision1)
    mision1.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision1.style.boxShadow = "0px 0px 10px darkorange";
    alert("mision cumplida mi KING");
  } else if (msg !== "" || msg == null) {
    alert("codigo incorrecto");
  }
}

function ms2() {
  let mision2 = document.getElementById('mision2');
  let msg = prompt("Ingrese el codigo");

  if (msg == "hola") {
    localStorage.setItem('mis2', mision2)
    mision2.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision2.style.boxShadow = "0px 0px 10px darkorange";
    alert("mision cumplida mi KING");
  } else if (msg !== "" || msg == null) {
    alert("codigo incorrecto");
  }
}

function ms3() {
  let mision3 = document.getElementById('mision3');
  let msg = prompt("Ingrese el codigo");

  if (msg == "hola") {
    localStorage.setItem('mis3', mision3)
    mision3.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision3.style.boxShadow = "0px 0px 10px darkorange";
    alert("mision cumplida mi KING");
  } else if (msg !== "" || msg == null) {
    alert("codigo incorrecto");
  }
}

window.onload = function() {
  let get_mis1 = localStorage.getItem('mis1')
  let get_mis2 = localStorage.getItem('mis2')
  let get_mis3 = localStorage.getItem('mis3')

  if (get_mis1) {
    let mision1 = document.getElementById('mision1');
    mision1.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision1.style.boxShadow = "0px 0px 10px gold";
  }

  if (get_mis2) {
    let mision2 = document.getElementById('mision2');
    mision2.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision2.style.boxShadow = "0px 0px 10px gold";
  }

  if (get_mis3) {
    let mision3 = document.getElementById('mision3');
    mision3.style.backgroundImage = "url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5f/Advancement-fancy-worn.png/revision/latest?cb=20200329050401)";
    mision3.style.boxShadow = "0px 0px 10px gold";
  }
}
