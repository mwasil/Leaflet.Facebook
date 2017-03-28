L.Control.Facebook = L.Control.extend({
    options: {
    position: 'topleft',
    url: 'https://facebook.com',
	size: 'small',
	lang: 'en_US',
	layout: "button_count",
	action: "like",
	showFaces: "false",
	share: "false"
	},
	
	onAdd: function(map) {
		var lang = this.options.lang;
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/"+lang+"/sdk.js#xfbml=1&version=v2.8&appId=112325262161655";
		  console.log(js.src);
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
        var fb = L.DomUtil.create('div', 'fb-like');

        fb.setAttribute("data-href", this.options.url);
		fb.setAttribute("data-layout", this.options.layout);
		fb.setAttribute("data-action", this.options.action);
		fb.setAttribute("data-size", this.options.size)
		fb.setAttribute("data-show-faces", this.options.showFaces);
        fb.setAttribute("data-share", this.options.share);

        return fb;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.facebook = function(opts) {
    return new L.Control.Facebook(opts);
}
