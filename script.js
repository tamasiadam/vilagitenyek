const params = new URLSearchParams(window.location.search);

if (params.size > 0) {
    
    // Q1: Mariana
    const f1 = document.getElementById("kerdes1");
    f1.innerHTML = params.get('melyseg') === "q1-2" ? "✅ Helyes!" : "❌ Helytelen!";
    f1.style.color = params.get('melyseg') === "q1-2" ? "#10b981" : "#ef4444";

    // Q2: Határok
    const q2 = params.getAll('hatar');
    const isQ2Correct = q2.length === 3 && ["q2-1", "q2-3", "q2-4"].every(v => q2.includes(v));
    const f2 = document.getElementById("kerdes2");
    f2.innerHTML = isQ2Correct ? "✅ Helyes!" : "❌ Helytelen!";
    f2.style.color = isQ2Correct ? "#10b981" : "#ef4444";

    // Q3: Tokió
    const q3 = (params.get('fovaros') || "").toLowerCase().trim();
    const f3 = document.getElementById("kerdes3");
    const isQ3Ok = q3 === "tokyo" || q3 === "tokió";
    f3.innerHTML = isQ3Ok ? "✅ Helyes!" : "❌ Helytelen! (Tokió)";
    f3.style.color = isQ3Ok ? "#10b981" : "#ef4444";

    // Q4: Víz
    document.getElementById("kerdes4").innerHTML = `Tipped: ${params.get('fold-viz')}% | Helyes: 71%`;

    // Q5: Nílus
    const isQ5Ok = params.get('folyo1') === "nilus" && params.get('folyo2') === "afrika";
    const f5 = document.getElementById("kerdes5");
    f5.innerHTML = isQ5Ok ? "✅ Helyes!" : "❌ Helytelen!";
    f5.style.color = isQ5Ok ? "#10b981" : "#ef4444";

    // Q6: Taj Mahal
    const f6 = document.getElementById("kerdes6");
    f6.innerHTML = params.get('tajmahal') === "B" ? "✅ Helyes! (India)" : "❌ Helytelen!";
    f6.style.color = params.get('tajmahal') === "B" ? "#10b981" : "#ef4444";

    // Q7: Emlős
    const q7 = (params.get('emlos') || "").toLowerCase().trim();
    const f7 = document.getElementById("kerdes7");
    const isQ7Ok = q7.includes("afrikai elefánt");
    f7.innerHTML = isQ7Ok ? "✅ Helyes!" : "❌ Helytelen! (Afrikai elefánt)";
    f7.style.color = isQ7Ok ? "#10b981" : "#ef4444";

    // Q8: Bolygók
    const f8 = document.getElementById("kerdes8");
    f8.innerHTML = params.get('bolygok') === "8" ? "✅ Helyes!" : "❌ Helytelen! (8)";
    f8.style.color = params.get('bolygok') === "8" ? "#10b981" : "#ef4444";

    // Q9: Everest
    const f9 = document.getElementById("kerdes9");
    f9.innerHTML = params.get('everest') === "Mount Everest" ? "✅ Helyes!" : "❌ Helytelen!";
    f9.style.color = params.get('everest') === "Mount Everest" ? "#10b981" : "#ef4444";

    // Q10: Australia
    const f10 = document.getElementById("kerdes10");
    f10.innerHTML = params.get('ausztralia') === "igaz" ? "✅ Helyes!" : "❌ Helytelen!";
    f10.style.color = params.get('ausztralia') === "igaz" ? "#10b981" : "#ef4444";

    // Szín
    const szin = params.get('szin');
    if (szin) document.getElementById("body").style.backgroundColor = decodeURIComponent(szin);
}