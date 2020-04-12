
// compiler options
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
	target: monaco.languages.typescript.ScriptTarget.ES6,
	allowNonTsExtensions: true,
	moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
	module: monaco.languages.typescript.ModuleKind.CommonJS,
	noEmit: true,
	lib: ["myDefault:some.file.d.ts"]
});


const model = monaco.editor.createModel(
	"v9\nplease",
	'javascript',
);
