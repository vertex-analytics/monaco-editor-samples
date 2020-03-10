require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function ()
{
	var editor = monaco.editor.create(document.getElementById('container'), {
		value: [
			'function test() {',
			'\t// Try and hover over MyEvent (Event is somehow taken)!',
			'\t',
			'}'
		].join('\n'),
		theme: 'vs-dark', // dark theme
		language: 'javascript'
	});
});
