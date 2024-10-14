const text = document.querySelector(".second-text");
        const textArray = ["Proggramer", "Fullstack", "Data Analysis"];
        let currentIndex = 0;

        const typeLoad = () => {
            text.textContent = textArray[currentIndex];
            currentIndex = (currentIndex + 1) % textArray.length;
        }

        typeLoad();
        setInterval(typeLoad, 4000)