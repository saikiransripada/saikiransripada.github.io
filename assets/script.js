window.addEventListener('load', function() {
    const calculateTime = (ago, unitInSeconds, unitName) => {
        let part = 0;
        while (ago >= unitInSeconds) ago -= unitInSeconds, part++;
        return part + ' ' + unitName + (part > 1 ? 's' : '') + ' ago';
    };

    const timeago = ms => {
        const ago = Math.floor(ms / 1000);
        if (ago < 2) return 'a moment ago';
        if (ago < 5) return 'moments ago';
        if (ago < 60) return ago + ' seconds ago';
        if (ago < 120) return 'a minute ago';
        if (ago < 3600) return calculateTime(ago, 60, 'minute');
        if (ago < 7200) return 'an hour ago';
        if (ago < 86400) return calculateTime(ago, 3600, 'hour');
        if (ago < 172800) return 'a day ago';
        if (ago < 604800) return calculateTime(ago, 172800, 'day');
        if (ago < 1209600) return 'a week ago';
        if (ago < 2592000) return calculateTime(ago, 604800, 'week');
        if (ago < 5184000) return 'a month ago';
        if (ago < 31536000) return calculateTime(ago, 2592000, 'month');
        if (ago < 1419120000) return 'more than a year ago';
        return 'never';
    };

    const params = { method: 'user.getRecentTracks', user: 'thephpguy', api_key: 'c614552cd7d82790915fc72f629b9ebe', format: 'json', limit: 1 };
    const recentTrackUrl = 'https://ws.audioscrobbler.com/2.0/?' + new URLSearchParams(params).toString();

    fetch(recentTrackUrl).then(response => {
        if (response.ok) response.json().then(response => {
            const track = response.recenttracks.track[0];
            const artistUrl = track.url ? track.url.split('/_/')[0] : '';
            const trackName = track.url ? `<a href="${track.url}" target="_blank">${track.name}</a>` : track.name;
            const trackArtist = track.url ? `<a href="${artistUrl}" target="_blank">${track.artist['#text']}</a>` : track.artist['#text'];
            const string = `Listening to <b>${trackName}</b> by <b>${trackArtist}</b>${track['@attr'] ? '' : '... ' + timeago(Date.now() - (track.date.uts * 1000))}`;
            document.getElementById('currenttrack').innerHTML = string;
        });
    });
});