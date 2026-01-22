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

      i++;
      let szin = kulonvalaszok[i].split("=")[1];
      szin = decodeURIComponent(szin);
      document.getElementById("body").style.backgroundColor = szin;
      document.getElementById("kerdes6").innerHTML =
        "A háttér színe megváltozott erre: " + szin;
    }