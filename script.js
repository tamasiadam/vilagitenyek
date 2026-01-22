    let url = window.location.search;
    if (url.includes("?")) {
      let valaszok = url.split("?")[1];
      let kulonvalaszok = valaszok.split("&");
      if (kulonvalaszok[0].split("=")[1] == "q1-2") {
        document.getElementById("kerdes1").innerHTML =
          "<span style='color: green;'>Helyes válasz!</span>";
      } else {
        document.getElementById("kerdes1").innerHTML =
          "<span style='color: red;'>Helytelen válasz!</span>";
      }

      let i = 1;
      let jok = 0;
      let osszes = 0;

      while (
        i < kulonvalaszok.length &&
        kulonvalaszok[i].startsWith("hatar")
      ) {
        osszes++;
        let ertek = kulonvalaszok[i].split("=")[1];

        if (ertek === "q2-1" || ertek === "q2-3" || ertek === "q2-4") {
          jok++;
        }
        i++;
      }

      if (jok === 3 && osszes === 3) {
        document.getElementById("kerdes2").innerHTML =
          "<span style='color: green;'>Helyes válasz!</span>";
      } else {
        document.getElementById("kerdes2").innerHTML =
          "<span style='color: red;'>Helytelen válasz!</span>";
      }

      let fovaros = kulonvalaszok[i].split("=")[1];
      if (
        decodeURIComponent(fovaros).toLowerCase() === "tokyo" ||
        decodeURIComponent(fovaros).toLowerCase() === "tokió"
      ) {
        document.getElementById("kerdes3").innerHTML =
          "<span style='color: green;'>Helyes válasz!</span>";
      } else {
        document.getElementById("kerdes3").innerHTML =
          "<span style='color: red;'>Helytelen válasz!</span>";
      }

      i++;
      document.getElementById("kerdes4").innerHTML =
        "A Föld <strong>71%</strong>-át borítja víz. A te válaszod: <strong>" +
        kulonvalaszok[i].split("=")[1] +
        "%</strong>";

      i++;
      document.getElementById("kerdes5").innerHTML =
        "A válaszod: " + kulonvalaszok[i].split("=")[1];

// 6. Kérdés (Taj Mahal - Radio)
  i++;
  let tajmahal = kulonvalaszok[i].split("=")[1];
  if (tajmahal === "B") {
    document.getElementById("kerdes6").innerHTML = 
      "<span style='color: green;'>Helyes! (India)</span>";
  } else {
    document.getElementById("kerdes6").innerHTML = 
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 7. Kérdés (Emlős - Text)
  i++;
  let emlos = decodeURIComponent(kulonvalaszok[i].split("=")[1]).toLowerCase();
  if (emlos.includes("elefánt") || emlos.includes("elefant")) {
    document.getElementById("kerdes7").innerHTML = 
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes7").innerHTML = 
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 8. Kérdés (Bolygók - Number)
  i++;
  let bolygok = kulonvalaszok[i].split("=")[1];
  if (bolygok === "8") {
    document.getElementById("kerdes8").innerHTML = 
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes8").innerHTML = 
      "<span style='color: red;'>Helytelen! (8)</span>";
  }

  // 9. Kérdés (Everest - Select)
  i++;
  let hegy = decodeURIComponent(kulonvalaszok[i].split("=")[1]);
  if (hegy === "Mount+Everest" || hegy === "Mount Everest") {
    document.getElementById("kerdes9").innerHTML = 
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes9").innerHTML = 
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 10. Kérdés (Ausztrália - Radio)
  i++;
  let ausztralia = kulonvalaszok[i].split("=")[1];
  if (ausztralia === "igaz") {
    document.getElementById("kerdes10").innerHTML = 
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes10").innerHTML = 
      "<span style='color: red;'>Helytelen!</span>";
  }
}