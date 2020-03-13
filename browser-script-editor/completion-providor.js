// extra libraries
monaco.languages.typescript.javascriptDefaults.addExtraLib([
	'/**',
	' * The current symbol being accessed by the pane',
	' */',
	'const qEditSymb = 2001;',
	'/**',
	' * The current date being accessed by the pane',
	' */',
	'const qEditDate = 2002; ',
	'',
	'const littleEndian = true;',
	'',
	'/**',
	' * Class used for referencing any individual event from the current {@link feed}',
	' * @type {Object}',
	' */',
	'const MyEvent = {',
	'\tunionID: 1,',
	'\tsequence: 0, //Each event within a feed has an assigned sequence value that',
	'\ttime: 0,',
	'\ttimeH: 0,',
	'\ttimeL: 0,',
	'\tmilliseconds: 0',
	'}',
	// 'https://v9-api-test.s3.us-east-2.amazonaws.com/index.js',
].join('\n'));

// fetch('https://v9-api-test.s3.us-east-2.amazonaws.com/index.js').then(res => { const data = res.data };

const model = monaco.editor.createModel(
	// `import {add} from 'math';\nconst x = add(3, 5);\n`,
	`import { v9, event } from 'intellisense.js';\n`,
	'javascript',
	monaco.Uri.parse('https://v9-api-test.s3.us-east-2.amazonaws.com/index.js')
);

// monaco.editor.create(document.getElementById("container"), {
// 	value: jsCode,
// 	language: "javascript",
// 	model
// });

// validation settings
monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
	noSemanticValidation: true,
	noSyntaxValidation: false
});

// compiler options
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	target: monaco.languages.typescript.ScriptTarget.ES6,
	allowNonTsExtensions: true,
	allowJs: true
});

