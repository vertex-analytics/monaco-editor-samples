const model = monaco.editor.createModel(
`class MyFeed extends vX.feed {
    onInit() {
    }

    /**
     * @param {vX_Meta} pMeta - Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
     */
    onOpen(pMeta) {
    }

    onRender() {
    }

    /**
	 * @param {string} pSymbol - The name of the current symbol
	 * @param {number} pDate - The current date as a number
	 * @param {{}|vX_Order} pObject - The current object/order being handled
	 * @param {number|vX_Trigger} pFlag - The trigger type of the current object/order
	 */
    onTrigger(pSymbol, pDate, pObject, pFlag) {
    }

    /**
     * @param {string} pSymbol - The name of the current symbol
	 * @param {number} pDate - The current date as a number
     * @param {vX_Event} pEvent - The current event being handled
     * @param {boolean} pRealTime - Boolean determining whether or not to only handle current events
     */
    onEvent(pSymbol, pDate, pEvent, pRealTime) {
    }

    onShut() {
    }

    onExit() {
	}
}

let gConsole = new vX.console({
\t
});
let feed = new MyFeed({
    symbol: 'ES',
    startDate: 20200902,
    endDate: 20200902,
	weekends: false,
	trigger: []
});
`,
 'javascript'
);
