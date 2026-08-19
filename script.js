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


const extraEvent =
    document.getElementById("extraEvent");


const groomFamily =
    document.getElementById("groomFamily");

const brideFamily =
    document.getElementById("brideFamily");

const invitersList =
    document.getElementById("invitersList");


const weddingVideo =
    document.getElementById("weddingVideo");


const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");


const openInvitationBtn =
    document.getElementById("openInvitationBtn");

const openingScreen =
    document.getElementById("openingScreen");

const mainWebsite =
    document.getElementById("mainWebsite");


/* =========================
   OPENING DATA
========================= */

if (openingNames) {

    openingNames.innerHTML = `
        ${websiteData.groomName}
        <span>✦</span>
        ${websiteData.brideName}
    `;

}


if (openingEvent) {

    openingEvent.innerText =
        websiteData.eventName;

}


if (openingDate) {

    openingDate.innerText =
        `${websiteData.date} | ${websiteData.day}`;

}


/* =========================
   HERO DATA
========================= */

if (coupleNames) {

    coupleNames.innerHTML = `
        ${websiteData.groomName}
        <span>✦</span>
        ${websiteData.brideName}
    `;

}


if (heroEvent) {

    heroEvent.innerText =
        websiteData.eventName;

}


if (heroDate) {

    heroDate.innerText =
        `${websiteData.date} | ${websiteData.time}`;

}


/* =========================
   WEDDING DETAILS
========================= */

if (weddingDate) {

    weddingDate.innerText =
        websiteData.date;

}


if (weddingDay) {

    weddingDay.innerText =
        websiteData.day;

}


if (weddingTime) {

    weddingTime.innerText =
        websiteData.time;

}


if (venueName) {

    venueName.innerText =
        websiteData.venueName;

}


if (venueAddress) {

    venueAddress.innerText =
        websiteData.venueAddress;

}


if (mapButton) {

    mapButton.href =
        websiteData.mapLink;

}


/* =========================
   EXTRA EVENT
========================= */

if (extraEvent) {

    extraEvent.innerText =
        websiteData.extraEvent;

}


/* =========================
   FAMILY
========================= */

if (
    groomFamily &&
    websiteData.groomFamily
) {

    websiteData.groomFamily.forEach(
        member => {

            const item =
                document.createElement("div");

            item.className =
                "family-member";

            item.innerText =
                member;

            groomFamily.appendChild(item);

        }
    );

}


if (
    brideFamily &&
    websiteData.brideFamily
) {

    websiteData.brideFamily.forEach(
        member => {

            const item =
                document.createElement("div");

            item.className =
                "family-member";

            item.innerText =
                member;

            brideFamily.appendChild(item);

        }
    );

}


/* =========================
   INVITERS
========================= */

if (
    invitersList &&
    websiteData.inviters
) {

    websiteData.inviters.forEach(
        name => {

            const item =
                document.createElement("div");

            item.className =
                "inviter-item";

            item.innerText =
                name;

            invitersList.appendChild(item);

        }
    );

}


/* =========================
   VIDEO SOURCE
========================= */

if (
    weddingVideo &&
    websiteData.video
) {

    const videoSource =
        weddingVideo.querySelector("source");


    if (videoSource) {

        videoSource.src =
            websiteData.video;

        weddingVideo.load();

    }

}


/* =========================
   BACKGROUND MUSIC
========================= */

let musicPlaying = false;

let musicPausedByVideo = false;


if (
    backgroundMusic &&
    websiteData.music
) {

    backgroundMusic.src =
        websiteData.music;

    backgroundMusic.load();

}


/* =========================
   PLAY MUSIC
========================= */

function playMusic() {

    if (!backgroundMusic) {
        return;
    }


    backgroundMusic.play()
        .then(() => {

            musicPlaying = true;

            if (musicBtn) {

                musicBtn.classList.add(
                    "playing"
                );

            }

        })
        .catch(() => {

            musicPlaying = false;

        });

}


/* =========================
   PAUSE MUSIC
========================= */

function pauseMusic() {

    if (!backgroundMusic) {
        return;
    }


    backgroundMusic.pause();

    musicPlaying = false;


    if (musicBtn) {

        musicBtn.classList.remove(
            "playing"
        );

    }

}


/* =========================
   OPEN INVITATION
========================= */

if (
    openInvitationBtn &&
    openingScreen &&
    mainWebsite
) {

    openInvitationBtn.addEventListener(
        "click",
        function () {


            /*
             * Website show
             */

            mainWebsite.classList.add(
                "show"
            );


            /*
             * Music सुरू
             */

            playMusic();


            /*
             * Opening screen hide
             */

            openingScreen.classList.add(
                "hide"
            );


            setTimeout(() => {

                openingScreen.style.display =
                    "none";

            }, 1000);

        }
    );

}


/* =========================
   MUSIC BUTTON
========================= */

if (
    musicBtn &&
    backgroundMusic
) {

    musicBtn.addEventListener(
        "click",
        function () {


            /*
             * Video चालू असल्यास
             * music manually सुरू करू नये.
             */

            if (
                weddingVideo &&
                !weddingVideo.paused &&
                !weddingVideo.ended
            ) {

                return;

            }


            if (musicPlaying) {

                pauseMusic();

            }

            else {

                playMusic();

            }

        }
    );

}


/* =========================
   VIDEO PLAY
   MUSIC OFF
========================= */

if (weddingVideo) {

    weddingVideo.addEventListener(
        "play",
        function () {

            /*
             * Video सुरू = Music OFF
             */

            pauseMusic();

            musicPausedByVideo =
                true;

        }
    );


    /* =========================
       VIDEO PAUSE
    ========================== */

    weddingVideo.addEventListener(
        "pause",
        function () {

            /*
             * Video pause = Music ON
             */

            if (
                musicPausedByVideo &&
                !weddingVideo.ended
            ) {

                playMusic();

            }

        }
    );


    /* =========================
       VIDEO END
    ========================== */

    weddingVideo.addEventListener(
        "ended",
        function () {

            /*
             * Video पूर्ण = Music ON
             */

            musicPausedByVideo =
                false;

            playMusic();

        }
    );

}