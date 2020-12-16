const model = monaco.editor.createModel(
`class MyFeed extends v9.feed {
    onInit ()
    {
\t\t
    }

    /**
     * @param {v9_Meta} pMeta Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
     */
    onOpen (pMeta)
    {
        pMeta.asset;
		pMeta.date;
		pMeta.instruments;

		pMeta.instruments[0].asset;
		pMeta.instruments[0].contractSymbol;
		pMeta.instruments[0].tickSize;
		pMeta.instruments[0].tickValue;
		pMeta.instruments[0].unitOfMeasure;
    }

    onRender()
    {
\t\t
    }

    /**
     * @param {v9_Order} pOrder The current order being handled
     * @param {v9_Trigger} pType The type of the current order being handled
     */
    onTrigger(pOrder, pType)
    {
        pOrder.entry;
        pOrder.fills;
        pOrder.flag;
        pOrder.mods;
        pOrder.orderID;
        pOrder.price;
        pOrder.quantity;
        pOrder.time;

		pType.asset;
		pType.contractSymbol;
		pType.tickSize;
		pType.tickValue;
		pType.unitOfMeasure;
    }

    /**
     * @param {string} pSymbol Name of the current symbol
     * @param {Event} pEvent Current event being handled
     * @param {boolean} pRealTime Boolean determining whether or not to only handle current events
     */
    onEvent(pSymbol, pEvent, pRealTime) {
		pEvent.header.unionID;
		pEvent.header.instrumentID;
		pEvent.header.sequence;
		pEvent.header.channelSequence;
		pEvent.header.instrumentSequence;
		pEvent.header.milliseconds;
        pEvent.header.time;

		pEvent.tradeSummary.price;
		pEvent.tradeSummary.quantity;
		pEvent.tradeSummary.matches;
		pEvent.tradeSummary.aggressor;
		pEvent.tradeSummary.isImplied;
		pEvent.tradeSummary.isSnapshot;
        pEvent.tradeSummary.volume;

		pEvent.tradeMatch.price;
		pEvent.tradeMatch.quantity;
		pEvent.tradeMatch.number;
		pEvent.tradeMatch.isAggressor;
		pEvent.tradeMatch.orderID;
		pEvent.tradeMatch.auxiliaryID;
        pEvent.tradeMatch.flags;

		pEvent.orderBook.price;
		pEvent.orderBook.type;
		pEvent.orderBook.quantity;
		pEvent.orderBook.priorityID;
		pEvent.orderBook.auxiliaryID;
		pEvent.orderBook.previousID;
		pEvent.orderBook.orderID;
		pEvent.orderBook.action;
        pEvent.orderBook.isSnapshot;

		pEvent.bookLevel.price;
		pEvent.bookLevel.quantity;
		pEvent.bookLevel.orders;
		pEvent.bookLevel.impliedQuantity;
		pEvent.bookLevel.impliedOrders;
		pEvent.bookLevel.level;
		pEvent.bookLevel.action;
		pEvent.bookLevel.type;
		pEvent.bookLevel.isEndEvent;

		pEvent.volumeUpdate.volume;
        pEvent.volumeUpdate.vwap;

		pEvent.dailyStatistics.price;
		pEvent.dailyStatistics.instrumentID;
		pEvent.dailyStatistics.size;
		pEvent.dailyStatistics.sessionDate;
		pEvent.dailyStatistics.type;
        pEvent.dailyStatistics.settleType;

		pEvent.limitsBanding.highLimit;
		pEvent.limitsBanding.lowLimit;
        pEvent.limitsBanding.maxVariation;

		pEvent.sessionStatistics.price;
		pEvent.sessionStatistics.instrumentID;
		pEvent.sessionStatistics.stateType;
		pEvent.sessionStatistics.action;
		pEvent.sessionStatistics.type;
        pEvent.sessionStatistics.volume;

		pEvent.securityStatus.group;
		pEvent.securityStatus.asset;
		pEvent.securityStatus.sessionDate;
		pEvent.securityStatus.type;
		pEvent.securityStatus.haltReason;
        pEvent.securityStatus.event;

        pEvent.channelReset.type;

        pEvent.transactionMarker.type;
    }

    onShut ()
    {
\t\t
    }

    onExit ()
    {
\t\t
	}
}

let gConsole = new v9.console();
let feed = new MyFeed({
    symbol: 'ES',
    startDate: 20200902,
    endDate: 20200902,
    weekends: false
});
`,
 'javascript'
);
