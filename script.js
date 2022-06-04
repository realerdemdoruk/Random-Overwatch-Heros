function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function get() {

  let listele = document.getElementById("listele");
  let data = fetch("https://overwatch-api.tekrop.fr/heroes")
    .then(response => response.json())
    .then(veri => {

      let random = randomInt(0, 34)

      listele.innerHTML = `<img src="${veri[random].portrait}"/ style="border-radius: 10%;">
        <p> Name = ${veri[random].name} </p> 
        <p> Role = ${veri[random].role} </p>`
    });

}