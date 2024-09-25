tinymce.create("tinymce.plugins.wpGallery",{init:function(i,e){var n=this;n.url=e,n.editor=i,n._createButtons(),i.addCommand("WP_Gallery",function(){tinymce.isIE&&i.selection.moveToBookmark(i.wpGalleryBookmark);var t=i.selection.getNode(),n=wp.media.gallery;"undefined"!=typeof wp&&wp.media&&wp.media.gallery&&"IMG"==t.nodeName&&-1!=i.dom.getAttrib(t,"class").indexOf("wp-gallery")&&n.edit("["+i.dom.getAttrib(t,"title")+"]").state("gallery-edit").on("update",function(e){e=n.shortcode(e).string().slice(1,-1);i.dom.setAttrib(t,"title",e)})}),i.onInit.add(function(n){"ontouchstart"in window&&n.dom.events.add(n.getBody(),"touchstart",function(e){var t=e.target;"IMG"==t.nodeName&&n.dom.hasClass(t,"wp-gallery")&&(n.selection.select(t),n.dom.events.cancel(e),n.plugins.wordpress._hideButtons(),n.plugins.wordpress._showButtons(t,"wp_gallerybtns"))})}),i.onMouseDown.add(function(e,t){"IMG"==t.target.nodeName&&e.dom.hasClass(t.target,"wp-gallery")&&(e.plugins.wordpress._hideButtons(),e.plugins.wordpress._showButtons(t.target,"wp_gallerybtns"))}),i.onBeforeSetContent.add(function(e,t){t.content=n._do_gallery(t.content)}),i.onPostProcess.add(function(e,t){t.get&&(t.content=n._get_gallery(t.content))})},_do_gallery:function(e){return e.replace(/\[gallery([^\]]*)\]/g,function(e,t){return'<img src="'+tinymce.baseURL+'/plugins/wpgallery/img/t.gif" class="wp-gallery mceItem" title="gallery'+tinymce.DOM.encode(t)+'" />'})},_get_gallery:function(e){function n(e,t){return(t=new RegExp(t+'="([^"]+)"',"g").exec(e))?tinymce.DOM.decode(t[1]):""}return e.replace(/(?:<p[^>]*>)*(<img[^>]+>)(?:<\/p>)*/g,function(e,t){return-1!=n(t,"class").indexOf("wp-gallery")?"<p>["+tinymce.trim(n(t,"title"))+"]</p>":e})},_createButtons:function(){var e,t,n=this,i=tinymce.activeEditor,o=tinymce.DOM;o.get("wp_gallerybtns")||(t=window.devicePixelRatio&&1<window.devicePixelRatio||window.matchMedia&&window.matchMedia("(min-resolution:130dpi)").matches,o.add(document.body,"div",{id:"wp_gallerybtns",style:"display:none;"}),e=o.add("wp_gallerybtns","img",{src:t?n.url+"/img/edit-2x.png":n.url+"/img/edit.png",id:"wp_editgallery",width:"24",height:"24",title:i.getLang("wordpress.editgallery")}),tinymce.dom.Event.add(e,"mousedown",function(e){var t=tinymce.activeEditor;t.wpGalleryBookmark=t.selection.getBookmark("simple"),t.execCommand("WP_Gallery"),t.plugins.wordpress._hideButtons()}),i=o.add("wp_gallerybtns","img",{src:t?n.url+"/img/delete-2x.png":n.url+"/img/delete.png",id:"wp_delgallery",width:"24",height:"24",title:i.getLang("wordpress.delgallery")}),tinymce.dom.Event.add(i,"mousedown",function(e){var t=tinymce.activeEditor,n=t.selection.getNode();"IMG"==n.nodeName&&t.dom.hasClass(n,"wp-gallery")&&(t.dom.remove(n),t.execCommand("mceRepaint"),t.dom.events.cancel(e)),t.plugins.wordpress._hideButtons()}))},getInfo:function(){return{longname:"Gallery Settings",author:"WordPress",authorurl:"http://wordpress.org",infourl:"",version:"1.0"}}}),tinymce.PluginManager.add("wpgallery",tinymce.plugins.wpGallery);