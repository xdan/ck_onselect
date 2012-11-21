CKEditor Plugin onselect
=============
Plugin create event select
Install
------------
Create folder `ckeditor/plugins/onselect` and unpack archive to 

File `ckeditor/config.js`

	CKEDITOR.editorConfig = function( config ){
		config.extraPlugins = 'onselect'; // add plugin
	};
	
Use
------------

	editor.on( 'select', function(e){alert(e.getSelection().getSelectedText() )});

1. Author: [leroy][author]
2. [Homepage][home]
2. Used: [ck_stat][used1]
3. [more ckeditor Plugins][more]
[more]: http://xdan.ru/project/ckplugins/
[used1]: https://github.com/xdan/ck_stat
[home]: http://xdan.ru/ckeditor-on-select-event.html