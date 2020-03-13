module.exports = {
	v9: {
	  UnionID: {
		OrderBook: "",
		BookLevel: "",
		TradeSummary: "",
		TradeMatch: "",
		VolumeUpdate: "",
		DailyStatistics: "",
		LimitsBanding: "",
		SessionStatistics: "",
		SecurityStatus: "",
		ChannelReset: "",
		TransactionMarker: ""
	  },
	  Aggressor: {
		NoAggressor: 0,
		Buy: 1,
		Sell: 2
	  },
	  BookType: {
		NotSet: "U",
		Bid: "B",
		Ask: "S",
		ImpliedBid: "b",
		ImpliedAsk: "s",
		BookReset: "R"
	  },
	  BookAction: {
		NotSet: 255,
		New: 0,
		Change: 1,
		Delete: 2,
		DeleteThru: 3,
		DeleteFrom: 4,
		Overlay: 5,
		Replace: 6
	  },
	  DailyStatisticsType: {
		SettlementPrice: "6",
		ClearedVolume: "B",
		OpenInterest: "C",
		FixingPrice: "W"
	  },
	  SessoionStatisticsType: {
		NotSet: 127,
		OpenPrice: 0,
		HighTrade: 1,
		LowTrade: 2,
		LastTrade: 3,
		HighestBid: 4,
		LowestAsk: 5,
		ClosePrice: 6
	  },
	  SettleType: {
		Final: 0x01,
		Actual: 0x02,
		Rounded: 0x04,
		Intraday: 0x08,
		ReservedBits: 0x10,
		NullValue: 0x80
	  },
	  StateType: {
		NotSet: 255,
		DailyOpenPrice: 0,
		IndicativeOpeningPrice: 5,
		DailyClosingPrice: 10
	  },
	  SecurityType: {
		NotSet: 0,
		TradingHalt: 2,
		Close: 4,
		NewPriceIndication: 15,
		ReadyToTrade: 17,
		NotAvailableForTrading: 18,
		UnknownorInvalid: 20,
		PreOpen: 21,
		PreCross: 24,
		Cross: 25,
		PreClose: 150,
		Restricted: 200,
		Freeze: 201
	  },
	  HaltReason: {
		NotSet: 255,
		GroupSchedule: 0,
		SurveillanceIntervention: 1,
		MarketEvent: 2,
		InstrumentActivation: 3,
		InstrumentExpiration: 4,
		Unknown: 5,
		RecoveryInProcess: 6
	  },
	  PutOrCall: {
		NotSet: 255,
		Put: 0,
		Call: 1
	  },
	  EventIndicator: {
		NotSet: 0x0,
		LastOfType: 0x01,
		EndOfEvent: 0x80
	  },
	  InvestigateStatus: {
		NotSet: 0x0,
		UnderInvestigation: 1,
		InvestigationCompleted: 2
	  }
	},
	event: {
	  header: {
		unionId: v9.UnionID,
		sequence: Number,
		time: BigInt,
		timeH: Number,
		timeL: Number,
		milliseconds: Number
	  },
	  tradeSummary: {
		price: Number,
		quantity: Number,
		matches: Number,
		aggressor: v9.Aggressor,
		isImplied: Boolean,
		isSnapshot: Boolean,
		volume: Number
	  },
	  tradeMatch: {
		price: Number,
		quantity: Number,
		number: Number,
		isAggressor: Boolean,
		orderID: Number,
		auxiliaryID: Number,
		flags: Number
	  },
	  orderBook: {
		price: Number,
		type: v9.BookType,
		quantity: Number,
		priorityID: Number,
		auxiliaryID: Number,
		previousID: Number,
		orderID: Number,
		action: v9.BookAction
	  },
	  bookLevel: {
		price: Number,
		quantity: Number,
		orders: Number,
		impliedQuantity: Number,
		impliedOrders: Number,
		level: Number,
		action: v9.BookAction,
		type: v9.BookType,
		isEndEvent: Boolean
	  },
	  volumeUpdate: {
		volume: Number,
		vwap: Number
	  },
	  dailyStatistics: {
		price: Number,
		instrumentID: Number,
		size: Number,
		impliedQuantity: Number,
		impliedOrders: Number,
		level: Number,
		action: v9.BookAction,
		type: v9.DailyStatisticsType,
		settleType: v9.SettleType,
		isEndEvent: Boolean
	  },
	  limitsBanding: {
		highLimit: Number,
		lowLimit: Number,
		maxVariation: Number
	  },
	  sessionStatistics: {
		price: Number,
		instrumentID: Number,
		stateType: v9.StateType,
		action: v9.BookAction,
		type: v9.SessionStatisticsType,
		size: Number
	  },
	  securityStatus: {
		group: String,
		asset: String,
		sessionDate: Number,
		type: v9.SecurityType,
		haltReason: v9.HaltReason,
		securityEvent: v9.SecurityEvent
	  },
	  channelReset: {
		type: v9
	  },
	  transactionMarker: {
		type: v9.TransactionType
	  }
	}
  };
