var generateRandom = function(num) {
    return Math.floor(Math.random() * num);
};

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp("\\{"+i+"\\}", "gi");
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

var numOfPlaylists = playlists.length;
var loc = generateRandom(numOfPlaylists);
var playlist = playlists[loc];
var index = generateRandom(playlist.max);
var baseURL = "https://www.youtube.com/embed/?list={0}&index={1}";
var url = baseURL.format(playlist.id, index);
var queryStrings = "&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=0&amp;wadsworth=1";
var iframeSrc = url + queryStrings;
document.getElementById("player").src = iframeSrc;