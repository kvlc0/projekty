document.getElementsByClassName("icon-pack")[0].onclick = () => {
    // 1. Definiujemy co chcemy skopiować
    const trescSciagi = "Jan Kochanowski - Treny (streszczenie dla leniwych) xD";

    // 2. Kopiujemy od razu po kliknięciu
    navigator.clipboard.writeText(trescSciagi).then(() => {
        console.log("Skopiowano pomyślnie! xD");
    }).catch(function(err) {
        console.log("Ups, coś nie pykło: ", err);
    });

    document.getElementsByClassName("icon-pack")[0].onclick = () => {
        document.getElementsByClassName("push-element")[0].classList.add("show");
        setTimeout(() => {
            document.getElementsByClassName("push-element")[0].classList.remove("show");
        }, 1500)
    }       


}