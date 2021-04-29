const model = monaco.editor.createModel(
`class MyFeed extends vX.feed {
    /**
     * onInit is called when the run button is pressed
     */
    onInit() {
    }

    /**
     * onOpen is called at the start of each day including and in between your feed's startDate and endDate parameters
     * @param {vX_Meta} pMeta - Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
     */
    onOpen(pMeta) {
    }

    /**
     * onRender is called once for each frame that is rendered to the viewport\n
     */
    onRender() {
    }

    /**
     * onTrigger is called when an order or an event matches one of the user defined triggers specified in vX.feed.triggers
     * @param {string} pSymbol - The name of the current symbol
     * @param {number} pDate - The current date as a number
     * @param {vX_Order} pObject - The current object/order being handled
     * @param {number|vX_Trigger} pFlag - The type of the current object/order
     * @param {vX_Event} pEvent - The current event being handled
     */
    onTrigger(pSymbol, pDate, pObject, pFlag, pEvent) {
    }

    /**
     * onEvent is called once for each timestamp tracked in your symbol(s)
     * @param {string} pSymbol - The name of the current symbol
     * @param {number} pDate - The current date as a number
     * @param {vX_Event} pEvent - The current event being handled
     * @param {boolean} pRealTime - Boolean determining whether or not to only handle current events
     */
    onEvent(pSymbol, pDate, pEvent, pRealTime) {
    }

    /**
     * onShut is called at the end of each day between the startDate and endDate parameters of a multi-day /**
     */
    onShut() {
    }

    /**
     * onExit is called when the script is completely done running
     */
    onExit() {
    }
}

var gConsole = new vX.console({
});
let feed = new MyFeed({
});
`,
 'javascript'
);
