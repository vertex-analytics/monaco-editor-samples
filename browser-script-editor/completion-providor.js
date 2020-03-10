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
].join('\n'), 'filename/facts.d.ts');

monaco.editor.create(document.getElementById("container"), {
	value: jsCode,
	language: "javascript"
});