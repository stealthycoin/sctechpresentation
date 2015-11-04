var collage = (function(){
    return {
        position: function(selector){
            var obj = $(selector);
            console.log(selector)
            console.log(obj)
            var idx = 0;
            obj.find("img").each(function(){
                var el = $(this);
                idx++;
                var deg = Math.floor(Math.random() * 12);
                el.css("border", "7px solid white");
                if(idx %2 == 0 || Math.random() > 0.7){
                    el.css("-webkit-transform", "rotate("+deg+"deg)");
                }
                else {
                    el.css("-webkit-transform", "rotate(-"+deg+"deg)");
                }

                el.css("position","relative")
                el.css("margin-top", "-"+(100+Math.random()*50)+"px");


                var shift = 10 + Math.ceil(Math.random() * 30)
                if(idx % 2 === 0){
                    el.css("left", "-"+shift+"%")
                }
                else {
                    el.css("left", shift+"%")
                }
                $(this).css('-webkit-transition', '1s all');
                $(this).css('opacity', '0');
            });
            /*$("body").keypress(function(e){
                console.log(e);
            });*/
            $(document).keypress(function(e){
                if(e.keyCode === 116){
                    var found = false;
                    obj.find("img").each(function(){
                        if(found){ return; }
                        if($(this).css("opacity") == 0){
                            $(this).css("opacity", "1.0");
                            return found;
                        }
                    });
                }
            });
        }
    }
})();
