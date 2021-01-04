const model = monaco.editor.createModel(
`class MyFeed extends vX.feed {
    onInit ()
    {
\t\t
    }

    /**
     * @param {vX_Meta} pMeta - Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
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
     * @param {string} pSymbol - The name of the current symbol
	 * @param {number} pDate - The current date as a number
	 * @param {vX_Order} pObject - The current object/order being handled
     * @param {vX_Trigger} pFlag - The type of the current object/order
     */
    onTrigger(pSymbol, pDate, pObject, pFlag) {
        pObject.entry;
        pObject.fills;
        pObject.mods;
        pObject.orderID;
        pObject.price;
        pObject.quantity;
		pObject.time;

		pFlag.IcebergOrders;
		pFlag.TradeSweeps;
		pFlag.StopOrders;
		pFlag.Trades;
    }

    /**
     * @param {string} pSymbol - The name of the current symbol
	 * @param {number} pDate - The current date as a number
     * @param {vX_Event} pEvent - The current event being handled
     * @param {boolean} pRealTime - Boolean determining whether or not to only handle current events
     */
    onEvent(pSymbol, pDate, pEvent, pRealTime) {
		vX;

		vX.UnionID;
		vX.Aggressor;
		vX.BookAction;
		vX.BookType;
		vX.DailyStatisticsType;
		vX.HaltReason;
		vX.SecurityEvent;
		vX.SecurityType;
		vX.SessionStatisticsType;
		vX.SettleType;
		vX.StateType;
		vX.Trigger;
		vX.Align;

		vX.UnionID.BookLevel;
		vX.UnionID.DailyStatistics;
		vX.UnionID.LimitsBanding;
		vX.UnionID.NotMapped;
		vX.UnionID.NotSet;
		vX.UnionID.OrderBook;
		vX.UnionID.SecurityStatus;
		vX.UnionID.SessionStatistics;
		vX.UnionID.TradeMatch;
		vX.UnionID.TradeSummary;
		vX.UnionID.VolumeUpdate;

		vX.Aggressor.Buy;
		vX.Aggressor.Sell;
		vX.Aggressor.NoAggressor;

		vX.BookAction.Change;
		vX.BookAction.Delete;
		vX.BookAction.DeleteFrom;
		vX.BookAction.DeleteThru;
		vX.BookAction.New;
		vX.BookAction.NotSet;
		vX.BookAction.Overlay;
		vX.BookAction.Replace;

		vX.BookType.Ask;
		vX.BookType.Bid;
		vX.BookType.BookReset;
		vX.BookType.ImpliedAsk;
		vX.BookType.ImpliedBid;
		vX.BookType.NotSet;

		vX.DailyStatisticsType.ClearedVolume;
		vX.DailyStatisticsType.FixingPrice;
		vX.DailyStatisticsType.OpenInterest;
		vX.DailyStatisticsType.SettlementPrice;

		vX.HaltReason.NotSet;
		vX.HaltReason.RecoveryInProcess;
		vX.HaltReason.SurveillanceIntervention;
		vX.HaltReason.Unknown;

		vX.SecurityEvent.ImpliedMatchingOFF;
		vX.SecurityEvent.ImpliedMatchingON;
		vX.SecurityEvent.NoCancel;
		vX.SecurityEvent.NoEvent;
		vX.SecurityEvent.ResetStatistics;

		vX.SecurityType.NotSet;
		vX.SecurityType.TradingHalt;
		vX.SecurityType.Close;
		vX.SecurityType.NewPriceIndication;
		vX.SecurityType.ReadyToTrade;
		vX.SecurityType.NotAvailableForTrading;
		vX.SecurityType.UnknownorInvalid;
		vX.SecurityType.PreOpen;
		vX.SecurityType.PreCross;
		vX.SecurityType.Cross;
		vX.SecurityType.PostClose;
		vX.SecurityType.NoChange;
		vX.SecurityType.PreClose;
		vX.SecurityType.Restricted;
		vX.SecurityType.Freeze;

		vX.SessionStatisticsType.ClosePrice;
		vX.SessionStatisticsType.HighTrade;
		vX.SessionStatisticsType.HighestBid;
		vX.SessionStatisticsType.LastTrade;
		vX.SessionStatisticsType.LowTrade;
		vX.SessionStatisticsType.LowestAsk;
		vX.SessionStatisticsType.NotSet;
		vX.SessionStatisticsType.OpenPrice;

		vX.SettleType.Actual;
		vX.SettleType.Final;
		vX.SettleType.Intraday;
		vX.SettleType.NullValue;
		vX.SettleType.ReservedBits;
		vX.SettleType.Rounded;

		vX.StateType.DailyClosingPrice;
		vX.StateType.DailyOpeningPrice;
		vX.StateType.IndicativeOpeningPrice;
		vX.StateType.NotSet;

		vX.Trigger.IcebergOrders;
		vX.Trigger.StopOrders;
		vX.Trigger.TradeSweeps;

		vX.Align.Default;
		vX.Align.Center;
		vX.Align.Left;
		vX.Align.Right;

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

let gConsole = new vX.console();
let feed = new MyFeed({
    symbol: 'ES',
    startDate: 20200902,
    endDate: 20200902,
	weekends: false,
	trigger: [vX.Trigger.IcebergOrders, vX.Trigger.StopOrders, vX.Trigger.TradeSweeps]
});
`,
 'javascript'
);
