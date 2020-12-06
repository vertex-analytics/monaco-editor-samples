const model = monaco.editor.createModel(
`class MyFeed extends v9.feed {
	onInit() {
\t\t
	}

	onOpen(pMeta) {
\t\t
	}

	onRender() {
\t\t
	}

	onEvent(pSymbol, pEvent, pRealTime) {
\t\t
	}

	onExit () {
\t\t
	}

	onShut () {
\t\t
	}
}
`,
	'javascript',
	monaco.Uri.parse('file:///intellisense.js')
);
