const model = monaco.editor.createModel(
	[
		"event;",
		"pEvent;",
		"v9;",
	].join('\n'),
	'javascript',
	monaco.Uri.parse('file:///intellisense.js')
);
