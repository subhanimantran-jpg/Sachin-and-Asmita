/* =========================
   VIDEO LINK SUPPORT
========================= */

function getVideoEmbedUrl(url) {

    try {

        const parsedUrl =
            new URL(url);

        let videoId = "";


        /* =========================
           YOUTUBE
        ========================= */

        if (
            parsedUrl.hostname.includes("youtu.be")
        ) {

            videoId =
                parsedUrl.pathname
                    .replace("/", "");

            return `https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`;

        }


        if (
            parsedUrl.hostname.includes("youtube.com")
        ) {

            videoId =
                parsedUrl.searchParams
                    .get("v");


            /* Shorts */

            if (
                !videoId &&
                parsedUrl.pathname.includes("/shorts/")
            ) {

                videoId =
                    parsedUrl.pathname
                        .split("/shorts/")[1]
                        .split("/")[0];

            }


            /* Embed */

            if (
                !videoId &&
                parsedUrl.pathname.includes("/embed/")
            ) {

                videoId =
                    parsedUrl.pathname
                        .split("/embed/")[1]
                        .split("/")[0];

            }


            if (videoId) {

                return `https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`;

            }

        }


        /* =========================
           GOOGLE DRIVE
        ========================= */

        if (
            parsedUrl.hostname.includes("drive.google.com")
        ) {

            const pathParts =
                parsedUrl.pathname.split("/");

            const fileIndex =
                pathParts.indexOf("d");

            if (
                fileIndex !== -1 &&
                pathParts[fileIndex + 1]
            ) {

                const driveFileId =
                    pathParts[fileIndex + 1];

                return `https://drive.google.com/file/d/${driveFileId}/preview`;

            }

        }


        return null;

    }

    catch (error) {

        return null;

    }

}


/* =========================
   VIDEO LOAD
========================= */

const embedUrl =
    getVideoEmbedUrl(
        websiteData.youtubeLink
    );


if (embedUrl) {

    videoContainer.innerHTML = `

        <iframe
            id="weddingVideo"
            src="${embedUrl}"
            title="Wedding Video"
            allow="autoplay; fullscreen"
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