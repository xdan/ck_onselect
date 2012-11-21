/*
 * @file on text selection event plugin for CKEditor 
 * Copyright (C) 2012 Chupurnov Valeriy <leroy@xdan.ru>(http://xdan.ru)
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 * use 	editor.on( 'select', function(e){alert(e.getSelection().getSelectedText() )});
 *
 */
CKEDITOR.plugins.add( 'onselect',{
	init : function( editor ){
		var timerSelect = 0;
		function getTextSelection(){
			clearTimeout(timerSelect);
			timerSelect = setTimeout(function(){
				editor.fire('select');
			},100);//c таймаутом можно поиграть на свое усмотрение
		}
		var startSelect = false;
		editor.on( 'contentDom', function(e){
			this.getCommand('cut').on('state',getTextSelection)
			editor.document.on('keyup',function(e){
				if ( e.data.$.shiftKey ){
					var keyCode = e.data.$.keyCode;
					if( keyCode>=33&&keyCode<=40 )getTextSelection();
				}
			});
			editor.document.on('mousedown',function(e){
				startSelect = true;
			});
			editor.document.on('mouseup',function(e){
				startSelect = false;
			});
		});
		window.onmousemove = function(e){
			if( startSelect )getTextSelection();
		};
		window.onmouseup = function(e){
			startSelect = false;
		};
		editor.on( 'selectionChange', getTextSelection );
		// проверить работу можно так
		//editor.on( 'select', function(e){alert(editor.getSelection().getSelectedText() )});
	}
} );
