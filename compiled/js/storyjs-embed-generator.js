if(typeof embed_path=="undefined"||typeof embed_path=="undefined"){var embed_path=getScriptPath("timeline-embed-generator.js").split("js/")[0];if(embed_path.match("http")){embed_path=embed_path}else{if(embed_path=="/"){embed_path="index.html"}else{embed_path=embed_path+"index.html"}}}function getScriptPath(a){var d=document.getElementsByTagName("script"),c="";for(var b=0;b<d.length;b++){if(d[b].src.match(a)){c=d[b].src}}return c.split("?")[0].split("/").slice(0,-1).join("/")+"/"}function getUrlVars(b){var e=[],d,a,f=b.toString();if(f.match("&#038;")){f=f.replace("&#038;","&")}else{if(f.match("&#38;")){f=f.replace("&#38;","&")}else{if(f.match("&amp;")){f=f.replace("&amp;","&")}}}if(f.match("#")){f=f.split("#")[0]}a=f.slice(f.indexOf("?")+1).split("&");for(var c=0;c<a.length;c++){d=a[c].split("=");e.push(d[0]);e[d[0]]=d[1]}return e}function getLinkAndIframe(){var t={},u=document.getElementById("embed-source-url"),o=document.getElementById("embed-width"),s=document.getElementById("embed-height"),m=document.getElementById("embed-maptype"),p=document.getElementById("embed-language"),c=document.getElementById("embed_code"),j=document.getElementById("embed-font"),v=document.getElementById("embed-wordpressplugin"),q=document.getElementById("embed-startatend"),a=document.getElementById("embed-hashbookmark"),k=document.getElementById("embed-startzoomadjust"),r=document.getElementById("embed-startatslide"),n=document.getElementById("embed-debug"),i=false,f=false,e=false,h,g,l,d,b;if(u.value.match("docs.google.com")){b=getUrlVars(u.value)["key"]}else{if(u.value==""){b="0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE"}else{b=u.value}}if(q.checked){i=true}if(a.checked){f=true}if(n.checked){e=true}d="[timeline ";if(o.value>0){d+="width='"+o.value+"' "}if(s.value>0){d+="height='"+o.value+"' "}d+="font='"+j.value+"' ";d+="maptype='"+m.value+"' ";d+="lang='"+p.value+"' ";d+="src='"+u.value+"' ";if(i){d+="start_at_end='"+i+"' "}if(f){d+="hash_bookmark='"+f+"' "}if(e){d+="debug='"+e+"' "}if(parseInt(r.value,10)>0){d+="start_at_slide='"+parseInt(r.value,10)+"' "}if(parseInt(k.value,10)>0){d+="start_zoom_adjust='"+parseInt(k.value,10)+"' "}d+="]";t.wordpress=d;l=embed_path+"?source="+b;l+="&font="+j.value;l+="&maptype="+m.value;l+="&lang="+p.value;if(i){l+="&start_at_end="+i}if(f){l+="&hash_bookmark="+f}if(e){l+="&debug="+e}if(parseInt(r.value,10)>0){l+="&start_at_slide="+parseInt(r.value,10)}if(parseInt(k.value,10)>0){l+="&start_zoom_adjust="+parseInt(k.value,10)}if(o.value>0){l+="&width="+o.value}if(s.value>0){l+="&height="+s.value}h="<iframe src='"+l+"'";if(o.value>0){h+=" width='"+o.value+"'"}if(s.value>0){h+=" height='"+s.value+"'"}h+=" frameborder='0'></iframe>";t.iframe=h;t.link=l;if(v.checked){t.copybox=d}else{t.copybox=h}return t}function updateEmbedCode(b,a){var d=document.getElementById("embed_code"),c=getLinkAndIframe();d.value=c.copybox;$("#preview-embed-link").attr("href",c.link);$("#preview-embed-iframe").html(c.iframe)};