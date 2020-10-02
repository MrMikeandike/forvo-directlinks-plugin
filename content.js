$("span.play:not(.mai)").each(function(index, og){
   console.log($(og).attr("onclick"))
   
   var mp3_path = $(og).attr("onclick").split(",")[1].trim().replace(/(^')|('$)/g, "")
   console.log(mp3_path)
   var new_url = "https://audio00.forvo.com/mp3/" + atob(mp3_path)
   console.log(new_url)
   $(og).after(`<a class="mai" href="${new_url}"><span class="mai"></span></a>`)
   console.log(`added icon for url: ${new_url}`)  
})

