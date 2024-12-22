document.addEventListener("DOMContentLoaded", () => {
    const movieData = {
        "Catch Me If You Can": {
            director: "스티븐 스필버그",
            actors: "레오나르도 디카프리오, 톰 행크스",
            releaseDate: "2002년 12월 25일",
            story: "이 영화는 프랭크 애버그네일 주니어가 뛰어난 위조 능력을 활용해 사기 행각을 벌인 실화를 다룬다. 그는 파일럿, 의사, 변호사 등 다양한 직업을 사칭하며 천재적인 능력으로 수백만 달러를 위조하고, 이를 통해 자유로운 삶을 살아가는 동시에 끊임없이 쫓기는 인물로 그려진다.웹페이지는 영화의 쫓고 쫓기는 장면을 모티브로 만들어졌다다. 화면에 보이는 원형을 클릭해보자."
        },
        "Whiplash": {
            director: "데이미언 셔젤",
            actors: "마일즈 텔러, J.K. 시몬스",
            releaseDate: "2014년 1월 16일",
            story: "위플래쉬는 천재 드러머를 꿈꾸는 주인공이 혹독한 스승 아래에서 완벽을 추구하며 극한의 갈등과 성장을 겪는 과정을 그린 영화이다. 웹페이지는 위플래쉬의 가장 인상적인 장면 중 하나인 마지막 공연에서 주인공이 드럼 연주에 완전히 몰입하는 순간을 모티브로 제작되었다. 버튼들을 눌러보며 영화가 전달하는 몰입감과 긴장감을 간접적으로 체험할 수 있도록 구성하였다."
        },
        "The Truman Show": {
            director: "피터 위어",
            actors: "짐 캐리, 에드 해리스",
            releaseDate: "1998년 6월 5일",
            story: "트루먼 쇼는 평범한 삶을 살아간다고 믿었던 주인공이 자신이 거대한 가짜 세계의 중심이라는 사실을 깨닫고, 진실을 찾기 위해 모험을 떠나는 이야기이다. 이 웹페이지에서는 마우스가 주인공의 역할을 하고, 왼쪽에 있는 동그란 화면은 가짜 세계를 의미한다. 마우스가 동그라미 안으로 들어가면 ON AIR 표시와 함께 너는 두려워서 나가지 못할 것이라는 대사가 나타난다. 하지만 마우스를 동그라미 밖으로 이동시키면 손을 흔드는 장면과 함께 OFF THE AIR 표시로 전환되며, 주인공이 진실을 찾아 떠나는 결단을 상징적으로 표현한다."
        }
    };

    const indexElements = document.querySelectorAll('.index');
    const movieName = document.querySelector('.movie_name');
    const movieDescWrapper = document.querySelector('.movie_desc_wrapper');
    const directorInfo = document.querySelector('.director_info');
    const actorInfo = document.querySelector('.actor_info');
    const timeInfo = document.querySelector('.time_info');
    const storyInfo = document.querySelector('.story_info');
    const pageDesc = document.querySelector('.page_desc');
    const enterBt = document.querySelector('.enter_bt');
    const infoElements = document.querySelectorAll('.movie_desc_wrapper .info');
    let selectedMovie = "";



   /**반응형 */
    function adjustFontSize() {
        infoElements.forEach(info => {
            info.style.fontSize = "1em";
        });

        if (window.innerWidth <= 450) {
            pageDesc.style.display = "none";
            enterBt.style.width = "8rem";
            enterBt.style.height = "8rem";
            infoElements.forEach(info => {
                info.style.fontSize = "0.8em";
            });
        } else if (window.innerWidth <= 600) {
            pageDesc.style.display = "block";
            pageDesc.style.fontSize = "0.8em";
            enterBt.style.width = "7rem";
            enterBt.style.height = "7rem";
            infoElements.forEach(info => {
                info.style.fontSize = "0.9em";
            });
        } else if (window.innerWidth <= 800) {
            pageDesc.style.display = "block";
            pageDesc.style.fontSize = "0.9em";
            enterBt.style.width = "8.5rem";
            enterBt.style.height = "8.5rem";
        } else {
            pageDesc.style.display = "block";
            pageDesc.style.fontSize = "1em";
            enterBt.style.width = "10rem";
            enterBt.style.height = "10rem";
        }
    }

   
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);


    indexElements.forEach((indexElement) => {
        indexElement.addEventListener("click", () => {
            const movieTitle = indexElement.querySelector('.title').textContent.trim();

            if (movieData[movieTitle]) {
                selectedMovie = movieTitle; 
                movieName.style.display = "flex";
                movieDescWrapper.style.display = "flex";

                movieName.textContent = movieTitle;
                directorInfo.textContent = movieData[movieTitle].director;
                actorInfo.textContent = movieData[movieTitle].actors;
                timeInfo.textContent = movieData[movieTitle].releaseDate;
                storyInfo.textContent = movieData[movieTitle].story;
            }
        });
    });


    




/**페이지 이동 */
    enterBt.addEventListener("click", () => {
        if (selectedMovie === "The Truman Show") {
            window.location.href = "index02.html"; 
        } 
        if (selectedMovie === "Catch Me If You Can") {
            window.location.href = "index03.html"; 
        } 
        if (selectedMovie === "Whiplash") {
            window.location.href = "index04.html"; 
        } 
    });
});
