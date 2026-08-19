/* =====================================================
   WEDDING WEBSITE - FINAL SCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

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


/* =====================================================
   OPENING DATA
===================================================== */

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


/* =====================================================
   HERO DATA
===================================================== */

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


/* =====================================================
   WEDDING DETAILS
===================================================== */

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


/* =====================================================
   EXTRA EVENT
===================================================== */

if (extraEvent) {

    extraEvent.innerText =
        websiteData.extraEvent;

}


/* =====================================================
   GROOM FAMILY
===================================================== */

if (
    groomFamily &&
    websiteData.groomFamily
) {

    websiteData.groomFamily.forEach(
        function (member) {

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


/* =====================================================
   BRIDE FAMILY
===================================================== */

if (
    brideFamily &&
    websiteData.brideFamily
) {

    websiteData.brideFamily.forEach(
        function (member) {

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


/* =====================================================
   INVITERS
===================================================== */

if (
    invitersList &&
    websiteData.inviters
) {

    websiteData.inviters.forEach(
        function (name) {

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


/* =====================================================
   VIDEO
===================================================== */

if (
    weddingVideo &&
    websiteData.video
) {

    const source =
        weddingVideo.querySelector("source");


    if (source) {

        source.src =
            websiteData.video;

        weddingVideo.load();

    }

}


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;

let musicStoppedBySystem = false;

let musicStoppedByVideo = false;


/* =====================================================
   SET MUSIC SOURCE
===================================================== */

if (
    backgroundMusic &&
    websiteData.music
) {

    backgroundMusic.src =
        websiteData.music;

    backgroundMusic.loop =
        true;

    backgroundMusic.preload =
        "auto";

    backgroundMusic.load();

}


/* =====================================================
   START MUSIC FROM BEGINNING
===================================================== */

function startMusicFromBeginning() {

    if (!backgroundMusic) {

        return;

    }


    /*
     * प्रत्येक नवीन start ला
     * music सुरुवातीपासून.
     */

    backgroundMusic.currentTime =
        0;


    backgroundMusic.play()
        .then(function () {

            musicPlaying =
                true;

            musicStoppedBySystem =
                false;


            if (musicBtn) {

                musicBtn.classList.add(
                    "playing"
                );

            }

        })
        .catch(function () {

            musicPlaying =
                false;

        });

}


/* =====================================================
   STOP MUSIC COMPLETELY
===================================================== */

function stopMusicCompletely() {

    if (!backgroundMusic) {

        return;

    }


    /*
     * Music पूर्ण stop
     */

    backgroundMusic.pause();


    /*
     * पुढच्या वेळी सुरुवातीपासून
     */

    try {

        backgroundMusic.currentTime =
            0;

    }

    catch (error) {

        console.log(error);

    }


    musicPlaying =
        false;


    if (musicBtn) {

        musicBtn.classList.remove(
            "playing"
        );

    }

}


/* =====================================================
   OPEN INVITATION
===================================================== */

if (
    openInvitationBtn &&
    openingScreen &&
    mainWebsite
) {

    openInvitationBtn.addEventListener(
        "click",
        function () {


            /*
             * Main website show
             */

            mainWebsite.classList.add(
                "show"
            );


            /*
             * Music नेहमी सुरुवातीपासून
             */

            startMusicFromBeginning();


            /*
             * Opening screen hide
             */

            openingScreen.classList.add(
                "hide"
            );


            /*
             * Opening screen remove
             */

            setTimeout(
                function () {

                    openingScreen.style.display =
                        "none";

                },
                1000
            );

        }
    );

}


/* =====================================================
   MUSIC BUTTON
===================================================== */

if (
    musicBtn &&
    backgroundMusic
) {

    musicBtn.addEventListener(
        "click",
        function () {


            /*
             * Video चालू असल्यास
             * Music सुरू करू नका.
             */

            if (
                weddingVideo &&
                !weddingVideo.paused &&
                !weddingVideo.ended
            ) {

                return;

            }


            if (musicPlaying) {

                /*
                 * Manual OFF
                 */

                stopMusicCompletely();

            }

            else {

                /*
                 * Manual ON
                 * सुरुवातीपासून
                 */

                startMusicFromBeginning();

            }

        }
    );

}


/* =====================================================
   VIDEO PLAY
===================================================== */

if (weddingVideo) {

    weddingVideo.addEventListener(
        "play",
        function () {


            /*
             * Video चालू झाला
             * Music पूर्ण बंद.
             */

            stopMusicCompletely();


            musicStoppedByVideo =
                true;

        }
    );


    /* =================================================
       VIDEO PAUSE
    ================================================= */

    weddingVideo.addEventListener(
        "pause",
        function () {


            /*
             * Video pause झाला तर
             * Music पुन्हा सुरुवातीपासून.
             */

            if (
                musicStoppedByVideo &&
                !weddingVideo.ended
            ) {

                startMusicFromBeginning();

            }

        }
    );


    /* =================================================
       VIDEO ENDED
    ================================================= */

    weddingVideo.addEventListener(
        "ended",
        function () {


            musicStoppedByVideo =
                false;


            /*
             * Video पूर्ण झाल्यावर
             * Music सुरुवातीपासून.
             */

            startMusicFromBeginning();

        }
    );

}


/* =====================================================
   PAGE VISIBILITY
===================================================== */

document.addEventListener(
    "visibilitychange",
    function () {


        if (document.hidden) {


            /*
             * User दुसऱ्या tab/app मध्ये गेला
             * किंवा mobile screen बंद केली.
             */

            musicStoppedBySystem =
                true;


            stopMusicCompletely();

        }

        else {


            /*
             * User परत website वर आला.
             *
             * Music automatically सुरू करू नका.
             * User ने पुन्हा button/open invitation
             * केल्यावरच सुरू होईल.
             */

            musicPlaying =
                false;

        }

    }
);


/* =====================================================
   PAGE HIDE
===================================================== */

window.addEventListener(
    "pagehide",
    function () {

        musicStoppedBySystem =
            true;

        stopMusicCompletely();

    }
);


/* =====================================================
   BEFORE UNLOAD
===================================================== */

window.addEventListener(
    "beforeunload",
    function () {

        musicStoppedBySystem =
            true;

        stopMusicCompletely();

    }
);


/* =====================================================
   WINDOW BLUR
===================================================== */

window.addEventListener(
    "blur",
    function () {


        /*
         * Browser/window focus गेला तर
         * music बंद.
         */

        if (document.hidden) {

            musicStoppedBySystem =
                true;

            stopMusicCompletely();

        }

    }
);


/* =====================================================
   PAGE UNLOAD SAFETY
===================================================== */

window.addEventListener(
    "unload",
    function () {

        stopMusicCompletely();

    }
);


/* =====================================================
   FINAL MUSIC SAFETY
===================================================== */

if (backgroundMusic) {

    backgroundMusic.addEventListener(
        "play",
        function () {


            /*
             * Page hidden असेल तर
             * कोणत्याही परिस्थितीत music चालू नको.
             */

            if (
                document.hidden ||
                musicStoppedBySystem
            ) {

                stopMusicCompletely();

            }

        }
    );

}