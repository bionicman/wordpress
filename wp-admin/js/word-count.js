(function(a){wpWordCount={init:function(){var b=this,c=0,d=a("#content");a("#wp-word-count").html(wordCountL10n.count.replace(/%d/,'<span class="word-count">0</span>'));b.block=0;b.wc(d.val());d.keyup(function(f){if(f.keyCode==c){return true}if(13==f.keyCode||8==c||46==c){b.wc(d.val())}c=f.keyCode;return true})},wc:function(d){var e=this,c=a(".word-count"),b=0;if(e.block){return}e.block=1;setTimeout(function(){if(d){d=d.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ");d=d.replace(/[0-9.(),;:!?%#$¿'"_+=\\/-]*/g,"");d.replace(/\S\s+/g,function(){b++})}c.html(b.toString());setTimeout(function(){e.block=0},2000)},1)}};a(document).ready(function(){wpWordCount.init()})}(jQuery));