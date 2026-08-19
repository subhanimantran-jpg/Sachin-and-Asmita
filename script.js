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

const groomFamily =
    document.getElementById("groomFamily");

const brideFamily =
    document.getElementById("brideFamily");

const invitersList =
    document.getElementById("invitersList");

const preWeddingEvent =
    document.getElementById("preWeddingEvent");

const preWeddingDate =
    document.getElementById("preWeddingDate");

const preWeddingTime =
    document.getElementById("preWeddingTime");

const preWeddingVenue =
    document.getElementById("preWeddingVenue");

const videoContainer =
    document.getElementById("videoContainer");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");

const instagramLink =
    document.getElementById("instagramLink");

const openInvitationBtn =
    document.getElementById("openInvitationBtn");

const openingScreen =
    document.getElementById("openingScreen");

const mainWebsite =
    document.getElementById("mainWebsite");


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
   PRE WEDDING
========================= */

preWeddingEvent.innerText =
    websiteData.preWeddingEvent;

preWeddingDate.innerText =
    websiteData.preWeddingDate;

preWeddingTime.innerText =
    websiteData.preWeddingTime;

preWeddingVenue.innerText =
    websiteData.preWeddingVenue;


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
   INSTAGRAM
========================= */

instagramLink.href =
    websiteData.instagramLink;


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
   BACKGROUND MUSIC
========================= */

backgroundMusic.src =
    websiteData.music;

backgroundMusic.load();

let musicPlaying = false;


/* =========================
   GOOGLE DRIVE VIDEO
========================= */

function getGoogleDriveVideoId(url) {

    if (!url) {

        return null;

    }

    const match =
        url.match(/\/d\/([^/]+)/);

    if (match && match[1]) {

        return match[1];

    }

    return null;

}


const videoId =
    getGoogleDriveVideoId(
        websiteData.videoLink
    );


if (videoId) {

    const previewUrl =
        `https://drive.google.com/file/d/${videoId}/preview`;


    videoContainer.innerHTML = `

        <iframe
            id="weddingVideo"
            src="${previewUrl}"
            title="Wedding Video"
            allow="autoplay; fullscreen"
            allowfullscreen>
        </iframe>

    `;

}

else {

    videoContainer.innerHTML = `

        <div
            style="
                display:flex;
                width:100%;
                height:100%;
                align-items:center;
                justify-content:center;
                color:white;
            "
        >

            व्हिडिओ उपलब्ध नाही

        </div>

    `;

}


/* =========================
   OPEN INVITATION
========================= */

openInvitationBtn.addEventListener(
    "click",
    function () {


        /* MAIN WEBSITE SHOW */

        mainWebsite.classList.add(
            "show"
        );


        /* OPENING SCREEN HIDE */

        openingScreen.classList.add(
            "hide"
        );


        /* MUSIC START */

        backgroundMusic.play()

            .then(() => {

                musicPlaying = true;

            })

            .catch(() => {

                musicPlaying = false;

            });


        /* REMOVE OPENING SCREEN */

        setTimeout(() => {

            openingScreen.style.display =
                "none";

        }, 1000);

    }
);


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener(
    "click",
    function () {


        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicBtn.innerText = "♫";

        }

        else {

            backgroundMusic.play()

                .then(() => {

                    musicPlaying = true;

                    musicBtn.innerText = "♫";

                })

                .catch(() => {

                    musicPlaying = false;

                });

        }

    }
);