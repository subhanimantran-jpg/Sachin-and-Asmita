

/* =====================================
   ELEMENTS
===================================== */

const openingNames =
    document.getElementById("openingNames");

const openingEvent =
    document.getElementById("openingEvent");

const openingDate =
    document.getElementById("openingDate");

const coupleNames =
    document.getElementById("coupleNames");

const heroEvent =
    document.getElementById("heroEvent");

const heroDate =
    document.getElementById("heroDate");

const weddingDate =
    document.getElementById("weddingDate");

const weddingDay =
    document.getElementById("weddingDay");

const weddingTime =
    document.getElementById("weddingTime");

const venueName =
    document.getElementById("venueName");

const venueAddress =
    document.getElementById("venueAddress");

const mapButton =
    document.getElementById("mapButton");

const footerNames =
    document.getElementById("footerNames");



/* =====================================
   OPENING DATA
===================================== */

openingNames.innerHTML = `

    ${websiteData.groomName}

    <span class="opening-heart">

        ✦

    </span>

    ${websiteData.brideName}

`;


openingEvent.innerText =
    websiteData.eventName;


openingDate.innerText =

    `${websiteData.date} | ${websiteData.day}`;



/* =====================================
   HERO DATA
===================================== */

coupleNames.innerHTML = `

    ${websiteData.groomName}

    <span>✦</span>

    ${websiteData.brideName}

`;


heroEvent.innerText =
    websiteData.eventName;


heroDate.innerText =

    `${websiteData.date} | ${websiteData.time}`;



/* =====================================
   DETAILS
===================================== */

weddingDate.innerText =
    websiteData.date;


weddingDay.innerText =
    websiteData.day;


weddingTime.innerText =
    websiteData.time;


venueName.innerText =
    websiteData.venueName;


venueAddress.innerText =
    websiteData.venueAddress;


mapButton.href =
    websiteData.mapLink;



/* =====================================
   FOOTER
===================================== */

footerNames.innerText =

    `${websiteData.groomName}
     ✦
     ${websiteData.brideName}`;



/* =====================================
   FAMILY
===================================== */

const groomFamily =
    document.getElementById("groomFamily");


websiteData.groomFamily.forEach(member => {

    const item =
        document.createElement("div");

    item.className =
        "family-member";

    item.innerText =
        member;

    groomFamily.appendChild(item);

});



const brideFamily =
    document.getElementById("brideFamily");


websiteData.brideFamily.forEach(member => {

    const item =
        document.createElement("div");

    item.className =
        "family-member";

    item.innerText =
        member;

    brideFamily.appendChild(item);

});



/* =====================================
   INVITERS
===================================== */

const invitersList =
    document.getElementById("invitersList");


websiteData.inviters.forEach(name => {

    const item =
        document.createElement("div");

    item.className =
        "inviter-item";

    item.innerText =
        name;

    invitersList.appendChild(item);

});



/* =====================================
   YOUTUBE FULL LINK
===================================== */

const videoContainer =
    document.getElementById("videoContainer");


function getYouTubeEmbedUrl(url) {

    try {

        const parsedUrl =
            new URL(url);


        let videoId = "";


        if (
            parsedUrl.hostname.includes("youtu.be")
        ) {

            videoId =
                parsedUrl.pathname
                    .replace("/", "");

        }


        else if (
            parsedUrl.hostname.includes("youtube.com")
        ) {

            videoId =
                parsedUrl.searchParams
                    .get("v");


            if (
                !videoId &&
                parsedUrl.pathname.includes("/shorts/")
            ) {

                videoId =
                    parsedUrl.pathname
                        .split("/shorts/")[1]
                        .split("/")[0];

            }


            if (
                !videoId &&
                parsedUrl.pathname.includes("/embed/")
            ) {

                videoId =
                    parsedUrl.pathname
                        .split("/embed/")[1]
                        .split("/")[0];

            }

        }


        if (!videoId) {

            return null;

        }


        return

            `https://www.youtube.com/embed/${videoId}?rel=0`;


    }

    catch (error) {

        return null;

    }

}


const embedUrl =
    getYouTubeEmbedUrl(
        websiteData.youtubeLink
    );


if (embedUrl) {

    videoContainer.innerHTML = `

        <iframe

            src="${embedUrl}"

            title="Wedding Video"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

            allowfullscreen>

        </iframe>

    `;

}


else {

    videoContainer.innerHTML = `

        <div class="video-placeholder">

            YouTube Video Link data.js मध्ये paste करा

        </div>

    `;

}



/* =====================================
   OPEN INVITATION
===================================== */

const openInvitationBtn =
    document.getElementById(
        "openInvitationBtn"
    );


const openingScreen =
    document.getElementById(
        "openingScreen"
    );


const revealScreen =
    document.getElementById(
        "revealScreen"
    );


const mainWebsite =
    document.getElementById(
        "mainWebsite"
    );


const music =
    document.getElementById(
        "backgroundMusic"
    );


const musicBtn =
    document.getElementById(
        "musicBtn"
    );


let musicPlaying = false;



openInvitationBtn.addEventListener(

    "click",

    () => {


        /* MUSIC START */

        music.play()

            .then(() => {

                musicPlaying = true;

                musicBtn.classList.add(
                    "playing"
                );

            })

            .catch(() => {

                musicPlaying = false;

            });



        /* REVEAL */

        revealScreen.classList.add(
            "active"
        );


        setTimeout(() => {

            mainWebsite.classList.add(
                "show"
            );

        }, 450);


        setTimeout(() => {

            openingScreen.classList.add(
                "hide"
            );

        }, 600);


        setTimeout(() => {

            openingScreen.style.display =
                "none";

        }, 2100);


        setTimeout(() => {

            revealScreen.style.display =
                "none";

        }, 1800);


    }

);



/* =====================================
   MUSIC ON / OFF
===================================== */

musicBtn.addEventListener(

    "click",

    () => {


        if (musicPlaying) {


            music.pause();

            musicPlaying = false;

            musicBtn.classList.remove(
                "playing"
            );


        }

        else {


            music.play()

                .then(() => {

                    musicPlaying = true;

                    musicBtn.classList.add(
                        "playing"
                    );

                })

                .catch(() => {

                    musicPlaying = false;

                });

        }


    }

);