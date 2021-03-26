window.addEventListener('load', function() {
    function timeago(ms) {
        var ago = Math.floor(ms / 1000);
        var part = 0;

        if (ago < 2) {
            return "a moment ago";
        }
        if (ago < 5) {
            return "moments ago";
        }
        if (ago < 60) {
            return ago + " seconds ago";
        }

        if (ago < 120) {
            return "a minute ago";
        }
        if (ago < 3600) {
            while (ago >= 60) {
                ago -= 60;
                part += 1;
            }
            return part + " minutes ago";
        }

        if (ago < 7200) {
            return "an hour ago";
        }
        if (ago < 86400) {
            while (ago >= 3600) {
                ago -= 3600;
                part += 1;
            }
            return part + " hours ago";
        }

        if (ago < 172800) {
            return "a day ago";
        }
        if (ago < 604800) {
            while (ago >= 172800) {
                ago -= 172800;
                part += 1;
            }
            return part + " days ago";
        }

        if (ago < 1209600) {
            return "a week ago";
        }
        if (ago < 2592000) {
            while (ago >= 604800) {
                ago -= 604800;
                part += 1;
            }
            return part + " weeks ago";
        }

        if (ago < 5184000) {
            return "a month ago";
        }
        if (ago < 31536000) {
            while (ago >= 2592000) {
                ago -= 2592000;
                part += 1;
            }
            return part + " months ago";
        }

        if (ago < 1419120000) {
            return "more than year ago";
        }

        return "never";
    }

    // global variables
    const params = {
        method: 'user.getRecentTracks',
        user: 'thephpguy',
        api_key: 'c614552cd7d82790915fc72f629b9ebe',
        format: 'json',
        limit: 1
    }
    const recentTrackUrl = "https://ws.audioscrobbler.com/2.0/?" + new URLSearchParams(params).toString()

    fetch(recentTrackUrl).then(response => {
        if (response.ok) {
            response.json().then(response => {
                let track, trackName, trackArtist, timeAgo, string
                track = response.recenttracks.track[0]

                if(track.url) {
                    trackName = `<a href="${track.url}" target="_blank">${track.name}</a>`
                    trackArtist = `<a href="${track.url}" target="_blank">${track.artist["#text"]}</a>`
                } else {
                    trackName = track.name
                    trackArtist = track.artist["#text"]
                }

                string = `Listening to <b>${trackName}</b> by <b>${trackArtist}</b>`

                if(!track["@attr"]) {
                    timeAgo = timeago(Date.now() - (track.date.uts * 1000))
                    string += `... ${timeAgo}`   
                }
                document.getElementById('currenttrack').innerHTML = string
            })
        }
    })
})