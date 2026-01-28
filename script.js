let url = window.location.search;
if (url.includes("?")) {
  let valaszok = url.split("?")[1];
  let kulonvalaszok = valaszok.split("&");

  // név alapján keresi a megoldást nem csak index alapján
  function getErtek(nev) {
    let par = kulonvalaszok.find((p) => p.startsWith(nev + "="));
    return par ? par.split("=")[1] : "";
  }

  // 1. kérdés
  if (getErtek("melyseg") === "q1-2") {
    document.getElementById("kerdes1").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes1").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 2. kérdés (Checkboxok kezelése)
  let jok = 0;
  let aktivalt = kulonvalaszok
    .filter((p) => p.startsWith("hatar="))
    .map((p) => p.split("=")[1]);
  if (aktivalt.includes("q2-1")) jok++;
  if (aktivalt.includes("q2-3")) jok++;
  if (aktivalt.includes("q2-4")) jok++;

  if (jok === 3 && aktivalt.length === 3) {
    document.getElementById("kerdes2").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes2").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 3. kérdés (Text)
  let fovaros = decodeURIComponent(getErtek("fovaros")).toLowerCase();
  if (fovaros === "tokyo" || fovaros === "tokió") {
    document.getElementById("kerdes3").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes3").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 4. kérdés (Range)
  let viz = getErtek("fold-viz");
  document.getElementById("kerdes4").innerHTML =
    `A te válaszod: <strong>${viz}%</strong> (Helyes: 71%)`;

  // 5. kérdés (Selects)
  if (getErtek("folyo1") === "nilus" && getErtek("folyo2") === "afrika") {
    document.getElementById("kerdes5").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes5").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 6. kérdés
  if (getErtek("tajmahal") === "B") {
    document.getElementById("kerdes6").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes6").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 7. kérdés
  let emlos = decodeURIComponent(getErtek("emlos")).toLowerCase();
  if (emlos.includes("elefánt") || emlos.includes("elefant")) {
    document.getElementById("kerdes7").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes7").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 8. kérdés
  if (getErtek("bolygok") === "8") {
    document.getElementById("kerdes8").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes8").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 9. kérdés
  let hegy = decodeURIComponent(getErtek("everest")).replace(/\+/g, " ");
  if (hegy === "Mount Everest") {
    document.getElementById("kerdes9").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes9").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }

  // 10. kérdés
  if (getErtek("ausztralia") === "igaz") {
    document.getElementById("kerdes10").innerHTML =
      "<span style='color: green;'>Helyes!</span>";
  } else {
    document.getElementById("kerdes10").innerHTML =
      "<span style='color: red;'>Helytelen!</span>";
  }
}
