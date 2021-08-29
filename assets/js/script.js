document.addEventListener(
    "DOMContentLoaded", () => {

        // DOM elements
        const loader = document.getElementById("loader");
        const display = document.getElementById("display");
        const inputSearch = document.getElementById("input-search");
        const btnSearch = document.getElementById("btn-search");

        const fetchData = (url) => {
            fetch(url)
                .then(response => response.json())
                .then(data => handleData(data.player[0]))
                .catch(err => console.log(err));
        };

        const handleData = (data) => {
            console.log(data);
            document.getElementById("dateBorn").innerText = data.dateBorn;
            document.getElementById("strBirthLocation").innerText = data.strBirthLocation;
            document.getElementById("strGender").innerText = data.strGender;
            document.getElementById("strNationality").innerText = data.strNationality;
            document.getElementById("strHeight").innerText = data.strHeight;
            document.getElementById("strWeight").innerText = data.strWeight;
            document.getElementById("strSport").innerText = data.strSport;
            document.getElementById("strPosition").innerText = data.strPosition;
            document.getElementById("strFacebook").innerText = data.strFacebook;
            document.getElementById("strBanner").setAttribute("src", data.strBanner);
            document.getElementById("strPlayer").innerText = data.strPlayer;
            document.getElementById("strDescriptionEN").innerText = data.strDescriptionEN;
        };

        btnSearch.addEventListener("click", (event) => {
            event.preventDefault();
            display.style.display = "none";
            loader.style.display = "block";
            const playerName = inputSearch.value;
            const playerUrl = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + playerName;
            fetchData(playerUrl);
            loadingAnimation();
            inputSearch.value = "";
        });

        const loadingAnimation = () => {
            setTimeout(() => {
                loader.style.display = "none";
                display.style.display = "block";
            }, 3000);
        };

    } // DOMContentLoaded
);