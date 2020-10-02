$("span.play:not(.mai)").each(function(index, og){
   
   var mp3_path = $(og).attr("onclick").split(",")[1].trim().replace(/(^')|('$)/g, "")
   var new_url = "https://audio00.forvo.com/mp3/" + atob(mp3_path)
   $(og).after(`<a class="mai" href="${new_url}"><span class="mai"></span></a>`)
})

