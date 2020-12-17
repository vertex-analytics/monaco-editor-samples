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
     */
    onTrigger(pOrder)
    {
        pOrder.entry;
        pOrder.fills;
        pOrder.mods;
        pOrder.orderID;
        pOrder.price;
        pOrder.quantity;
		pOrder.time;
		pOrder.type;
    }

    /**
     * @param {string} pSymbol Name of the current symbol
     * @param {v9_Event} pEvent Current event being handled
     * @param {boolean} pRealTime Boolean determining whether or not to only handle current events
     */
    onEvent(pSymbol, pEvent, pRealTime) {
		v9;

		v9.UnionID;
		v9.Aggressor;
		v9.BookAction;
		v9.BookType;
		v9.DailyStatisticsType;
		v9.HaltReason;
		v9.SecurityEvent;
		v9.SecurityType;
		v9.SessionStatisticsType;
		v9.SettleType;
		v9.StateType;
		v9.Trigger;
		v9.Align;

		v9.UnionID.BookLevel;
		v9.UnionID.DailyStatistics;
		v9.UnionID.LimitsBanding;
		v9.UnionID.NotMapped;
		v9.UnionID.NotSet;
		v9.UnionID.OrderBook;
		v9.UnionID.SecurityStatus;
		v9.UnionID.SessionStatistics;
		v9.UnionID.TradeMatch;
		v9.UnionID.TradeSummary;
		v9.UnionID.VolumeUpdate;

		v9.Aggressor.Buy;
		v9.Aggressor.Sell;
		v9.Aggressor.NoAggressor;

		v9.BookAction.Change;
		v9.BookAction.Delete;
		v9.BookAction.DeleteFrom;
		v9.BookAction.DeleteThru;
		v9.BookAction.New;
		v9.BookAction.NotSet;
		v9.BookAction.Overlay;
		v9.BookAction.Replace;

		v9.BookType.Ask;
		v9.BookType.Bid;
		v9.BookType.BookReset;
		v9.BookType.ImpliedAsk;
		v9.BookType.ImpliedBid;
		v9.BookType.NotSet;

		v9.DailyStatisticsType.ClearedVolume;
		v9.DailyStatisticsType.FixingPrice;
		v9.DailyStatisticsType.OpenInterest;
		v9.DailyStatisticsType.SettlementPrice;

		v9.HaltReason.NotSet;
		v9.HaltReason.RecoveryInProcess;
		v9.HaltReason.SurveillanceIntervention;
		v9.HaltReason.Unknown;

		v9.SecurityEvent.ImpliedMatchingOFF;
		v9.SecurityEvent.ImpliedMatchingON;
		v9.SecurityEvent.NoCancel;
		v9.SecurityEvent.NoEvent;
		v9.SecurityEvent.ResetStatistics;

		v9.SecurityType.NotSet;
		v9.SecurityType.TradingHalt;
		v9.SecurityType.Close;
		v9.SecurityType.NewPriceIndication;
		v9.SecurityType.ReadyToTrade;
		v9.SecurityType.NotAvailableForTrading;
		v9.SecurityType.UnknownorInvalid;
		v9.SecurityType.PreOpen;
		v9.SecurityType.PreCross;
		v9.SecurityType.Cross;
		v9.SecurityType.PostClose;
		v9.SecurityType.NoChange;
		v9.SecurityType.PreClose;
		v9.SecurityType.Restricted;
		v9.SecurityType.Freeze;

		v9.SessionStatisticsType.ClosePrice;
		v9.SessionStatisticsType.HighTrade;
		v9.SessionStatisticsType.HighestBid;
		v9.SessionStatisticsType.LastTrade;
		v9.SessionStatisticsType.LowTrade;
		v9.SessionStatisticsType.LowestAsk;
		v9.SessionStatisticsType.NotSet;
		v9.SessionStatisticsType.OpenPrice;

		v9.SettleType.Actual;
		v9.SettleType.Final;
		v9.SettleType.Intraday;
		v9.SettleType.NullValue;
		v9.SettleType.ReservedBits;
		v9.SettleType.Rounded;

		v9.StateType.DailyClosePrice;
		v9.StateType.DailyOpenPrice;
		v9.StateType.IndicativeOpeningPrice;
		v9.StateType.NotSet;

		v9.Trigger.IcebergOrders;
		v9.Trigger.StopOrders;
		v9.Trigger.SweepTrades;

		v9.Align.Default;
		v9.Align.Center;
		v9.Align.Left;
		v9.Align.Right;

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
