var app = {
    playlist: {},
    index: null,
    baseURL: 'https://www.youtube.com/embed/?list={0}&index={1}',
    queryStrings: '&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=0&amp;wadsworth=1',
    iframeSrc: '',
};

var generateRandom = function(num) {
    return Math.floor(Math.random() * num);
};

var setURL = function(){
        return app.baseURL.format(app.playlist.id, app.index) + app.queryStrings;
};

String.prototype.format = function() {
    var string = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        string = string.replace(regexp, arguments[i]);
    }

    return string;
};

app.playlist = (function(){
  var loc = generateRandom(playlists.length);
  return playlists[loc];
}());

app.index = generateRandom(app.playlist.max);

app.iframeSrc = setURL();

$(function () {
  $('#player').attr('src', app.iframeSrc)

  $('#back').click(function(){
      app.index--;
      app.iframeSrc = setURL();
    $('#player').attr('src', app.iframeSrc);
  });

  $('#forward').click(function(){
      app.index++;
      app.iframeSrc = setURL();
    $('#player').attr('src', app.iframeSrc);
  });
});
