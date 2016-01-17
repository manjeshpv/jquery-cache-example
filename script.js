/**
 * Created by ManjeshV on 16/01/16.
 */
config = {
    JQUERY_CACHE: true
}
$(function(){

    var requestURL = 'https://gist.githubusercontent.com/anonymous/4f4b5983f5500449d189/raw/ccd74bfab92a9198caa90f14324f1aadc2582d7f/569a486ce4b01190df49c32b.json';
    $.ajax({
        url:requestURL,
        type:"POST",
        dataType: 'json',
        localCache   : true,
        cacheTTL     : (1 / 60),           // Optional. In hours. 1 hour / minutes
        //cacheKey     : 'post',      // optional.
        isCacheValid : function(){  // optional.
            return config.JQUERY_CACHE;
        },
        success: function(response){
            var responseHTML = ""
            response.forEach(function(listItem){
                //console.log(listItem)
                responseHTML += "<li>" + JSON.stringify(listItem) + "</li>";
            })

            $("#list").html(responseHTML);
        }
    })
})