require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' } });

// // extra libraries
// monaco.languages.typescript.javascriptDefaults.addExtraLib([
// 	'/**',
// 	' * The current symbol being accessed by the pane',
// 	' */',
// 	'const qEditSymb = 2001;',
// 	'/**',
// 	' * The current date being accessed by the pane',
// 	' */',
// 	'const qEditDate = 2002; ',
// 	'',
// 	'const littleEndian = true;',
// 	'',
// 	'/**',
// 	' * Class used for referencing any individual event from the current {@link feed}',
// 	' * @type {Object}',
// 	' */',
// 	'const MyEvent = {',
// 	'\tunionID: 1,',
// 	'\tsequence: 0, //Each event within a feed has an assigned sequence value that',
// 	'\ttime: 0,',
// 	'\ttimeH: 0,',
// 	'\ttimeL: 0,',
// 	'\tmilliseconds: 0',
// 	'}',
// 	'file:///intellisense.js',
// ].join('\n'), 'filename/facts.d.ts');

// const model = monaco.editor.createModel(
// 	// `import {add} from 'math';\nconst x = add(3, 5);\n`,
// 	`import { v9, event } from 'intellisense.js';`,
// 	'javascript',
// 	monaco.Uri.parse('file:///intellisense.js')
// );

// // monaco.editor.create(document.getElementById("container"), {
// // 	value: jsCode,
// // 	language: "javascript",
// // 	model
// // });

require(['vs/editor/editor.main'], function ()
{
	var editor = monaco.editor.create(document.getElementById('container'), {
		value: [
			'function test() {',
			'\t// Try and hover over MyEvent (Event is somehow taken)!',
			'\t',
			'}'
			// '<!DOCTYPE html>',
			// '<html lang=\"en\">',

			// '<head>',
			// '<meta charset=\"UTF-8\">',
			// '<meta name=\"viewport" content=\"width=device-width, initial-scale=1.0\">',
			// '<script type=\"module\" src=\"./intellisense.js\"></script>',
			// '<script type=\"text/javascript\">',
			// 	'\timport {} from \'\'',
			// '</script>',
			// '<title>Document</title>',
			// '</head>',

			// '<body>',

			// '</body>',

			// '</html>',
		].join('\n'),
		theme: 'vs-dark', // dark theme
		language: 'javascript',
		model
	});
});
