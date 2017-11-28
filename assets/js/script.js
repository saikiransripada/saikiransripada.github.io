  var url = 'https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=thephpguy&limit=1&api_key=6e7c0a29cd508f42a6737e5fd3d6110b&format=json';
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  function timeAgo(time) {
    var units = [
      { name: "second", limit: 60, in_seconds: 1 },
      { name: "minute", limit: 3600, in_seconds: 60 },
      { name: "hour", limit: 86400, in_seconds: 3600 },
      { name: "day", limit: 604800, in_seconds: 86400 },
      { name: "week", limit: 2629743, in_seconds: 604800 },
      { name: "month", limit: 31556926, in_seconds: 2629743 },
      { name: "year", limit: null, in_seconds: 31556926 }
    ];
      
    var diff = (new Date() - new Date(time * 1000)) / 1000;
    if (diff < 5) return "now";

    var i = 0, unit;
    while (unit = units[i++]) {
      if (diff < unit.limit || !unit.limit) {
        var diff = Math.floor(diff / unit.in_seconds);
        return diff + " " + unit.name + (diff > 1 ? "s" : "") + ' ago';
      }
    };
  }

  getJSON(url,
    function(err, data) {
      if (err !== null) {
        console.log('Something went wrong: ' + data.message);
      } else {
        var info = data.recenttracks.track[0];
        var track = info.name;
        var artist = info.artist["#text"];
        var album = info.album["#text"];
        var cover = info.image[3]["#text"];
        var url = info.url;
        var listening = info["@attr"];
        var nowplaying = '<img src="/assets/img/headphones.emoji.svg" class="emoji-big"> Listening to ';

          nowplaying += '<span><em><strong>' + track + '</strong> by <strong>' + artist + '</strong></em></span>';

        if (listening) {
          nowplaying += ' <small>right now</small>';
        } else {
          nowplaying += ' <small>' + timeAgo(info.date['uts']) + '</small>';
        }

        document.getElementById('listening-to').innerHTML = nowplaying;
      }
    });