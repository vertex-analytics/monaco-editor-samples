require(['vs/editor/editor.main'], function ()
{
	var editor = monaco.editor.create(document.getElementById('container'), {
		theme: 'vs-dark', // dark theme
		language: 'js',
		model
	});
});
