/* =========================
   ELEMENTS
========================= */

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

const groomFamily =
    document.getElementById("groomFamily");

const brideFamily =
    document.getElementById("brideFamily");

const invitersList =
    document.getElementById("invitersList");

const videoContainer =
    document.getElementById("videoContainer");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");


/* =========================
   OPENING DATA
========================= */

openingNames.innerHTML = `
    ${websiteData.groomName}
    <span>✦</span>
    ${websiteData.brideName}
`;

openingEvent.innerText =
    websiteData.eventName;

openingDate.innerText =
    `${websiteData.date} | ${websiteData.day}`;


/* =========================
   HERO DATA
========================= */

coupleNames.innerHTML = `
    ${websiteData.groomName}
    <span>✦</span>
    ${websiteData.brideName}
`;

heroEvent.innerText =
    websiteData.eventName;

heroDate.innerText =
    `${websiteData.date} | ${websiteData.time}`;


/* =========================
   WEDDING DETAILS
========================= */

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


/* =========================
   FOOTER
========================= */

footerNames.innerText =
    `${websiteData.groomName} ✦ ${websiteData.brideName}`;


/* =========================
   FAMILY
========================= */

websiteData.groomFamily.forEach(member => {

    const item =
        document.createElement("div");

    item.className =
        "family-member";

    item.innerText =
        member;

    groomFamily.appendChild(item);

});


websiteData.brideFamily.forEach(member => {

    const item =
        document.createElement("div");

    item.className =
        "family-member";

    item.innerText =
        member;

    brideFamily.appendChild(item);

});


/* =========================
   INVITERS
========================= */

websiteData.inviters.forEach(name => {

    const item =
        document.createElement("div");

    item.className =
        "inviter-item";

    item.innerText =
        name;

    invitersList.appendChild(item);

});


/* =========================
   YOUTUBE FULL LINK SUPPORT
========================= */

function getYouTubeEmbedUrl(url) {

    try {

        const parsedUrl =
            new URL(url);

        let videoId = "";


        /* youtu.be लिंक */

        if (
            parsedUrl.hostname.includes("youtu.be")
        ) {

            videoId =
                parsedUrl.pathname
                    .replace("/", "");

        }


        /* youtube.com लिंक */

        else if (
            parsedUrl.hostname.includes("youtube.com")
        ) {


            /* Normal watch लिंक */

            videoId =
                parsedUrl.searchParams
                    .get("v");


            /* Shorts लिंक */

            if (
                !videoId &&
                parsedUrl.pathname.includes("/shorts/")
            ) {

                videoId =
                    parsedUrl.pathname
                        .split("/shorts/")[1]
                        .split("/")[0];

            }


            /* Embed लिंक */

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


        return `https://www.youtube.com/embed/${videoId}?rel=0`;


    }

    catch (error) {

        return null;

    }

}


/* VIDEO LOAD */

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

            व्हिडिओ उपलब्ध नाही

        </div>

    `;

}


/* =========================
   BACKGROUND MUSIC
========================= */

backgroundMusic.src =
    websiteData.music;

backgroundMusic.load();


let musicPlaying = false;


/* =========================
   OPEN INVITATION
========================= */

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


openInvitationBtn.addEventListener(
    "click",
    () => {


        /* MUSIC START */

        backgroundMusic.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.classList.add(
                    "playing"
                );

            })
            .catch(() => {

                musicPlaying = false;

            });


        /* REVEAL EFFECT */

        revealScreen.classList.add(
            "active"
        );


        setTimeout(() => {

            mainWebsite.classList.add(
                "show"
            );

        }, 350);


        setTimeout(() => {

            openingScreen.classList.add(
                "hide"
            );

        }, 500);


        setTimeout(() => {

            openingScreen.style.display =
                "none";

        }, 1800);


        setTimeout(() => {

            revealScreen.style.display =
                "none";

        }, 1600);


    }
);


/* =========================
   MUSIC ON / OFF
========================= */

musicBtn.addEventListener(
    "click",
    () => {


        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicBtn.classList.remove(
                "playing"
            );

        }

        else {

            backgroundMusic.play()
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