let url = window.location.search;
if (url.includes("?")) {
  let valaszok = url.split("?")[1];
  let kulonvalaszok = valaszok.split("&");

  // 1. kérdés
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

  // 2. kérdés
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

  // 3. kérdés
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

  // 4. kérdés
  i++;
  document.getElementById("kerdes4").innerHTML =
    "A Föld <strong>71%</strong>-át borítja víz. A te válaszod: <strong>" +
    kulonvalaszok[i].split("=")[1] +
    "%</strong>";

  // 5. kérdés
  i++;
  let f1 = kulonvalaszok[i].split("=")[1];
  i++;
  let f2 = kulonvalaszok[i].split("=")[1];
  if (f1 === "nilus" && f2 === "afrika") {
    document.getElementById("kerdes5").innerHTML = "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes5").innerHTML = "<span style='color: red;'>Helytelen!</span>";
  }

  // Szín és vélemény átugrása
  i++;
  i++;

  // 6. kérdés
  i++;
  let tajmahal = kulonvalaszok[i].split("=")[1];
  if (tajmahal === "B") {
    document.getElementById("kerdes6").innerHTML =
      "<span style='color: green;'>Helyes! (India)</span>";
  } else {
    document.getElementById("kerdes6").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 7. kérdés
  i++;
  let emlos = decodeURIComponent(kulonvalaszok[i].split("=")[1]).toLowerCase();
  if (emlos.includes("elefánt") || emlos.includes("elefant")) {
    document.getElementById("kerdes7").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes7").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 8. kérdés
  i++;
  let bolygok = kulonvalaszok[i].split("=")[1];
  if (bolygok === "8") {
    document.getElementById("kerdes8").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes8").innerHTML =
      "<span style='color: red;'>Helytelen! (8)</span>";
  }

  // 9. kérdés
  i++;
  let hegy = decodeURIComponent(kulonvalaszok[i].split("=")[1]);
  if (hegy === "Mount+Everest" || hegy === "Mount Everest") {
    document.getElementById("kerdes9").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes9").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 10. kérdés
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