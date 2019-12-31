var c = "";
jQuery(document).ready(function() {
	if(jQuery.session.get("count") === undefined ){
		jQuery.session.set("count", "20");
		
		var count = parseInt(jQuery.session.get("count"));
								
		jQuery('#count').append('<span style="font-size: 32px; font-weight: 600; padding: 2px; color:red">'+count+'</span>');
	}else{
		var count = parseInt(jQuery.session.get("count"));
		
		jQuery('#count').append('<span style="font-size: 32px; font-weight: 600; padding: 2px; color:red">'+count+'</span>');

	}
	getParams();
    location.getParams = getParams;
    c = location.getParams();
    if (c[""] == "undefined") {} else {
        var num = c.c;
        var name = c.i;
        var v = c.v;
        var path = window.location.pathname;
        if (c.c !== undefined && c.i !== undefined) {
            redirect(path, name, num)
        }
        if (c.v !== undefined) {
			
            redirectV(path, v)
        }
    }
		
	
	next = function(e){
		c = e;
		if(jQuery.session.get("count") === undefined ){
			jQuery.session.set("count", "20");
			
			var count = parseInt(jQuery.session.get("count"));
						
			count--;
			
			jQuery.session.set("count", count);
		}else{
			var count = parseInt(jQuery.session.get("count"));
			
			count--;
					
			jQuery.session.set("count", count);
		}
		
		jQuery( "#myform" ).submit();
	};
	
	previous = function(){
		if(jQuery.session.get("count") === undefined ){
			jQuery.session.set("count", "20");
			
			var count = parseInt(jQuery.session.get("count"));
						
			count++;
			
			jQuery.session.set("count", count);
		}else{
			var count = parseInt(jQuery.session.get("count"));
			
			count++;
					
			jQuery.session.set("count", count);
		}
		
		jQuery( "#myform1" ).submit();
	};
});

function getParams() {
    var result = {};
    var tmp = [];
    location.search.substr(1).split("&").forEach(function(item) {
        tmp = item.split("=");
        result[tmp[0]] = decodeURIComponent(tmp[1])
    });
    return result
}

function redirect(redirectUrl, i, c) {
	jQuery.session.remove('count');
	
    var form = jQuery('<form action="' + redirectUrl + '" method="post">' + '<input type="hidden" name="i" value="' + i + '" />' + '<input type="hidden" name="c" value="' + c + '" />' + '</form>');
    jQuery('body').append(form);
    jQuery(form).submit()
}

function redirectV(redirectUrl, v) {
    var form = jQuery('<form action="' + redirectUrl + '" method="post">' + '<input type="hidden" name="v" value="' + v + '" />' + '</form>');
    jQuery('body').append(form);
    jQuery(form).submit()
}