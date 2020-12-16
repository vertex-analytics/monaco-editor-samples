monaco.languages.typescript.javascriptDefaults.addExtraLib(
`
/**
 * Class used for referencing any individual Event from the current feed
 * @property {TradeSummary} tradeSummary
 */
class v9_Event {
	/**
	 * @typedef {Object} event_Header
	 * @property {v9.UnionID} unionID Enumerated value used to find the type of an Event Object
	 * @property {number} instrumentID The unique instrument identifier for the current exchange
	 * @property {number} sequence The current Event Object's session array index
	 * @property {number} channelSequence The packet ID of the current Event
	 * @property {number} instrumentSequence The unique ID of the current within the current instrument
	 * @property {number} milliseconds The exact time of the current Event in milliseconds as a number
	 * @property {bigint} time The exact time of the current Event in nanoseconds as a BigInt
	 */
	/**
	 * Each Event’s header Object provides access to general Event information and is accessed using:
	 *  - <EventName>.header.<memberName>
	 * @type {event_Header}
	 * @example
	 *
	 * onEvent() {
	 * 	 switch (this.pEvent.header.unionID) {
	 * 		 case v9.UnionID.TradeSummary:
	 * 			 var tmp = this.pEvent.header.time;
	 * 			 break;
	 * 		 default:
	 * 			 break;
	 * 	 }
	 * }

	 */
	header:
	{
		unionID: 255,
		sequence: 0,
		time: 0,
		timeH: 0,
		timeL: 0,
		milliseconds: 0
	},

	/**
	 * @typedef {Object} TradeSummary
	 * @property {number} price The price of the current Event
	 * @property {number} quantity The total quantity matched for the the current Event
	 * @property {number} matches The number of upcoming orders that will participate in the current Event
	 * @property {Aggressor} aggressor The aggressor of the trade the current Event is summarizing
	 * @property {boolean} isImplied Whether or not the trade the current Event is summarizing was implied
	 * @property {boolean} isSnapshot Whether or not the current Event is a market summary
	 * @property {number} volume The accumulated volume of the current session
	 */
	/**
	 * Each tradeSummary Event Object is accessed using:
	 *  - <EventName>.header.tradeSummary
	 * @type {TradeSummary}
	 */
	tradeSummary: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		quantity: 0,
		matches: 0,
		aggressor: 0,
		isImplied: false,
		isSnapshot: false,
		volume: 0
	},

	/**
	 * @typedef {Object} TradeMatch
	 * @property {number} price The price of the current Event
	 * @property {number} quantity The total quantity matched for the current Event
	 * @property {number} number The enumerated value from 0 to number of TradeSummary.matches
	 * @property {boolean} isAggressor Whether or not the current Event was made by the aggressor of the trade
	 * @property {number} orderID The identifier for the current Event’s order
	 * @property {number} auxilaryID The original identifier for the current Event’s order (ICE)
	 * @property {number} flags These bits are exchange specific. Please refer to the docs
	 */
	/**
	 * Each tradeMatch Event Object is accessed using:
	 *  - <EventName>.header.tradeMatch
	 * @type {TradeMatch}
	 */
	tradeMatch: {
		price: 0,
		quantity: 0,
		number: 0,
		isAggressor: 0,
		orderID: 0,
		auxiliaryID: 0,
		flags: 0
	},

	/**
	 * @typedef {Object} VolumeUpdate
	 * @property {number} volume The total volume for the session including the current Event
	 * @property {number} vwap An ICE-specific stat metric
	 */
	/**
	 * Each volumeUpdate Event Object is accessed using:
	 *  - <EventName>.header.volumeUpdate
	 * @type {VolumeUpdate}
	 * */
	volumeUpdate: {
		volume: 0,
		vwap: 0
	},

	/**
	 * @typedef {Object} BookLevel
	 * @property {number} price The price of the current Event
	 * @property {number} quantity The total quantity matched for the the current Event
	 * @property {number} orders The number of orders that participated at the current Event’s price level
	 * @property {number} impliedQuantity The total implied quantity at the current event’s price level
	 * @property {number} impliedOrders The total number of implied orders at the current event’s price level
	 * @property {number} level The price level at which the event occurred
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 * @property {BookType} type The type of the current Event
	 * @property {boolean} isEndEvent Whether or not the current Event is the last Event of the packet
	 */
	/**
	 * Each bookLevel Event Object is accessed using:
	 *  - <EventName>.header.bookLevel
	 * @type {BookLevel}
	 */
	bookLevel: {
		price: 0,
		quantity: 0,
		orders: 0,
		impliedQuantity: 0,
		impliedOrders: 0,
		level: 0,
		action: 255,
		type: 85,
		isEndEvent: false
	},

	/**
	 * @typedef {Object} OrderBook
	 * @property {number} price The price of the current Event
	 * @property {BookType} type The type of the current Event
	 * @property {number} quantity The total quantity matched for the current Event
	 * @property {number} priorityID The order priority for execution on the current order book : Lower = higher priority
	 * @property {number} auxilaryID The first OrderID assigned because some exchanges change the orderID : Only ICE and Eurex Exchanges
	 * @property {number} previousID If an orderID is changed, this is the ID that was just replaced : Eurex
	 * @property {number} orderID The identifier for the current Event's order
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 * @property {boolean} isSnapshot Whether or not the current Event is a market summary
	 */
	/**
	 * Each orderBook Event Object is accessed using:
	 *  - <EventName>.header.orderBook
	 * @type {OrderBook}
	 */
	orderBook: {
		price: 0,
		type: 85,
		quantity: 0,
		priorityID: 0,
		auxiliaryID: 0,
		previousID: 0,
		orderID: 0,
		action: 255,
		isSnapshot: 0
	},

	/**
	 * @typedef {Object} SecurityStatus
	 * @property {string} group The exchange specific code assigned to a group of related securities, which are concurrently affected by market events
	 * @property {string} asset The underlying asset code represented as a String
	 * @property {number} sessionDate The date of the current Event's trading session
	 * @property {SecurityType} type The total implied quantity at the current event's price level
	 * @property {HaltReason} haltReason The reason why the market has been halted
	 * @property {SecurityEvent} event Additional reasoning for the market being halted
	 */
	/**
	 * Each securityStatus Event Object is accessed using:
	 *  - <EventName>.header.securityStatus
	 * @type {SecurityStatus}
	 */
	securityStatus: {
		group: "",
		asset: "",
		sessionDate: 0,
		type: 0,
		haltReason: 255,
		event: 0
	},

	/**
	 * @typedef {Object} DailyStatistics
	 * @property {number} price The price of the current Event
	 * @property {number} instrumentID The unique instrument identifier for the current exchange
	 * @property {number} size The total number of Events in the current session (Only applies to OpenInterest type)
	 * @property {number} sessionDate The session date pertaining to the current Event (Not always current session)
	 * @property {DailyStatisticsType} type The type of the current Event
	 * @property {SettleType} settleType The settlement type of the current Event
	 */
	/**
	 * Each dailyStatistics Event Object is accessed using:
	 *  - <EventName>.header.dailyStatistics
	 * @type {DailyStatistics}
	 */
	dailyStatistics: {
		price: 0,
		instrumentID: 0,
		size: 0,
		sessionDate: 0,
		type: 0,
		settleType: 0
	},

	/**
	 * @typedef {Object} SessionStatistics
	 * @property {number} price The price of the current Event
	 * @property {number} instrumentID The unique instrument identifier for the current exchange
	 * @property {StateType} stateType The OpeningPrice type of the current Event
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 * @property {SessionStatisticsType} type The type of the current Event
	 * @property {number} volume The total number of Events in the current session
	 */
	/**
	 * Each sessionStatistics Event Object is accessed using:
	 *  - <EventName>.header.sessionStatistics
	 * @type {SessionStatistics}
	 */
	sessionStatistics: {
		price: 0,
		instrumentID: 0,
		stateType: 255,
		action: 255,
		type: 127,
		volume: 0
	},

	/**
	 * @typedef {Object} LimitsBanding
	 * @property {number} highLimit The lowest price level the contract can trade in this session
	 * @property {number} lowLimit The highest price level the contract can trade in this session
	 * @property {number} maxVariation The maximum tradeable range for this session
	 */
	/**
	 * Each limitsBanding Event Object is accessed using:
	 *  - <EventName>.header.limitsBanding
	 * @type {LimitsBanding}
	 */
	limitsBanding: {
		highLimit: 0,
		lowLimit: 0,
		maxVariation: 0
	},

	/**
	 * @typedef {Object} ChannelReset
	 * @property {BookType} type The type of the current Event
	 */
	/**
	 * Each channelReset Event Object is accessed using:
	 *  - <EventName>.header.channelReset
	 * @type {ChannelReset}
	 * */
	channelReset: {
		type: 85
	},

	/**
	 * @typedef {Object} TransactionMarker
	 * @property {TransactionType} type The type of the current Event
	 */
	/**
	 * Each transactionMarker Event Object is accessed using:
	 *  - <EventName>.header.transactionMarker
	 * @type {TransactionMarker}
	 * @return
	 */
	transactionMarker: {
		type: 255
	},
};

/**
 * Class used for referencing any individual Order from the current feed
 */
class v9_Order {
	/**
	 * The exact entry time of the current Order in nanoseconds as a BigInt
	 */
	entry: 0n;
	/**
	 * The current Order's number of fills
	 */
	fills: 0;
	/**
	 * The current Order's flag
	 */
	flag: 0;
	/**
	 * The current Order's number of mods
	 */
	mods: 0;
	/**
	 * The current Order's unique ID as a BigInt
	 */
	orderID: 0n;
	/**
	 * The current Order's price
	 */
	price: 0;
	/**
	 * The current Order's quantity
	 */
	quantity: 0;
	/**
	 * The exact fill time of the current Order in nanoseconds as a BigInt
	 */
	time: 0n;
};

/**
 * Class used for referencing all v9 event Objects and data
 */
let v9 = {
	/**
	 * @typedef {Object} v9_Trigger
	 * @property {string} asset The current asset name
	 * @property {string} contractSymbol The current symbol name
	 * @property {number} tickSize The percentage of a handle that each tick is worth (divide by 1e10^11)
	 * @property {number} tickValue The value of each tick in USD
	 * @property {number} unitOfMeasure The value of each handle in USD
	 */
	/**
	 * This class' functions should be overridden in each script for handling user actions and symbol events
	 */
	feed: class {
		/**
		 * The constructor is called when the user instantiates a new v9.feed
		 * @param {Object} pConfiguration Object containing feed properties
		 * @param {string} pConfiguration.symbol The current market symbol
		 * @param {string} pConfiguration.startDate The starting date of the script
		 * @param {string} pConfiguration.stopDate The ending date of the script
		 * @param {boolean} pConfiguration.weekends Whether or not to execute on weekends
		 * @param {boolean} pConfiguration.buildBooks Whether or not the feed handles book building
		 * @param {Number[]} pConfiguration.trigger Array containing event types that evoke v9.feed.onTrigger()
		 * @type {function}
		 */
		constructor(pConfiguration)
		{
			this.pMeta = new v9_Meta();
			this.pEvent = new v9_Event();
			this.pRealTime = new boolean();
			this.pSymbol = new string();
			this.pOrder = new v9_Order();
			this.pType = new string();
		}

		/**
		 * onInit is called when the run button is pressed
		 */
		onInit()
		{
		}

		/**
		 * @typedef {Object} v9_Instrument
		 * @property {string} asset The current asset name
		 * @property {string} contractSymbol The current symbol name
		 * @property {number} tickSize The percentage of a handle that each tick is worth (divide by 1e10^11)
		 * @property {number} tickValue The value of each tick in USD
		 * @property {number} unitOfMeasure The value of each handle in USD
		 */
		/**
		 * @typedef {Object} v9_Meta
		 * @property {string} asset The current asset name
		 * @property {string} date The current date
		 * @property {v9_Instrument[]} instruments Array containing objects with the properties of each instrument referenced in the current algorithm
		 */
		/**
		 * **pMeta is accessable**
		 *
		 * onOpen is called at the start of each day between the startDate and endDate parameters of a multi-day script
		 * @param {v9_Meta} pMeta Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
		 */
		onOpen() {
		}

		/**
		 * **pOrder, pType are accessable**
		 *
		 * onTrigger is called when an order is hit that matches the user defined triggers specified in v9.Feed.Trigger
		 * @param {v9_Order} pOrder The current order being handled
		 * @param {v9_Trigger} pType The type of the current order being handled
		 */
		onTrigger()
		{
		}

		/**
		 * **Useful for performing resource intensive code outside onEvent()**
		 *
		 * onRender is called once for each frame that is rendered to the viewport\n
		 */
		onRender()
		{
		}

		/**
		 * **pSymbol, pEvent, pRealTime are accessable**
		 *
		 * onEvent is called once for each timestamp tracked in your symbol(s)
		 * @param {string} pSymbol Name of the current symbol
		 * @param {Event} pEvent Current event being handled
		 * @param {boolean} pRealTime Boolean determining whether or not to only handle current events
		 */
		onEvent()
		{
		}

		/**
		 * onShut is called at the end of each day between the startDate and endDate parameters of a multi-day script
		 */
		onShut()
		{
		}

		/**
		 * onExit is called when the script is completely done running
		 */
		onExit()
		{
		}

		/**
		 * BookItemA returns a specific ask level of the current feed's book as an Object using:
		 * - this.BookItemA(cnt: Number)
		 * @param {number} - cnt The level of the order you want to know the price and quantity of
		 */
		BookItemA(cnt)
		{
			if (!_v9book)	{
				throw new Error("'books' have not been defined in the configuration");
			}
			return _v9book.BookItemA(cnt);
		}

		/**
		 * BookItemB returns a specific bid level of the current feed's book as an Object using:
		 * - this.BookItemB(cnt: Number)
		 * @param {number} cnt - The level of the order you want to know the price and quantity of
		 */
		BookItemB(cnt)
		{
			if (!_v9book)	{
				throw new Error("'books' have not been defined in the configuration");
			}
			return _v9book.BookItemB(cnt);
		}

		/**
		 * BookRowsA returns the number of ask levels within the current feed's book using:
		 * - this.BookRowsA()
		 */
		BookRowsA()
		{
			if (!_v9book)	{
				throw new Error("'books' have not been defined in the configuration");
				}
			return _v9book.BookRowsA();
		}

		/**
		 * BookRowsB returns the number of bid levels within the current feed's book using:
		 * - this.BookRowsB()
		 */
		BookRowsB()
		{
			if (!_v9book)	{
				throw new Error("'books' have not been defined in the configuration");
				}
			return _v9book.BookRowsB();
		}
	},

	/**
	 * The constructor is called when the user instantiates a new v9.console using:
	 * - new v9.console({ fillColor: String, textColor: String })
	 */
	console: class {
		/**
		 * The constructor is called when the user instantiates a new v9.console using:
		 * - new v9.console(pConfiguration: Object)
		 * @param {Object} pConfiguration - Object containing console properties
		 * @param {string} pConfiguration.fillColor - The background color of the console as a hexadecimal string
		 * @param {string} pConfiguration.textColor - The text color of the console as a hexadecimal string
		 * @type {function}
		 */
		constructor(pConfiguration)
		{
		}

		/**
		 * Sets the text color of the current line of the console
		 */
		textColor (pColor)
		{
		}
	},

	/**
	 * This class' functions should be overridden in each script for handling user actions and symbol events
	 */
	table: class {
		/**
		 * @typedef {Object} table_Header
		 * @property {number[]} width - Array containing the width of each cell in pixels
		 * @property {number[]} digits - Array containing the number of digits past the decimal point to display in each cell
		 * @property {v9.Align[]} align - Array containing the alignment values of each cell
		 * @property {string[]} name - Array containing the name of each cell header
		 * @property {string[]} format - Array containing the type of each cell as strings. Formats include:\nstring, number, bigint, boolean, orderID, nanosecond
		 */
		/**
		 * The constructor is called when the user instantiates a new v9.table using:
		 * - new v9.table(pConfiguration: Object)
		 * @param {Object} pConfiguration - Object containing table properties
		 * @param {string} pConfiguration.fillColor - The background color of the console as a hexadecimal string
		 * @param {string} pConfiguration.textColor - The text color of the console as a hexadecimal string
		 * @param {string} pConfiguration.gridColor - The text color of the console as a hexadecimal string
		 * @param {string} pConfiguration.width - The number of columns to be displayed within the table
		 * @param {string} pConfiguration.digits - The default number of digits past the decimal point to display for each cell
		 * @param {string} pConfiguration.align - The default alignment for each cell
		 * @param {string} pConfiguration.columns - The number of columns displayed within the table
		 * @param {string} pConfiguration.format - The default format for every column within the table. Formats include:\nstring, number, bigint, boolean, orderID, nanosecond
		 * @param {table_Header} pConfiguration.header - Object containing table formatting properties
		 * @type {function}
		 */
		constructor(pConfiguration)
		{
		}
	},

	//TODO: Complete sheet intellisense once v9.sheet is in production
	// sheet: class {
	// 	/**
	// 	 * The constructor is called when the user instantiates a new v9.sheet using:
	// 	 * - new v9.sheet(pConfiguration: Object)
	// 	 */
	// 	constructor(pConfiguration)
	// 	{
	// 	}
	// },

	/**
	 * @typedef {Object} UnionID
	 * @property {number} NotSet 255
	 * @property {number} NotMapped 250
	 * @property {number} TradeSummary 0 : Message that contains summary information about trades
	 * @property {number} TradeMatch 1 : Message that contains information on a match of a trade event
	 * @property {number} VolumeUpdate 2 : Message that updates volume data after a TradeSummary event. On certain exchanges if two implied quotes are matched, a VolumeUpdate event will occur showing the change in the total volume, but it will not be tied to a TradeSummary event
	 * @property {number} BookLevel 3 : Message that contains information on a quote that occurred in the first n levels of the book. The instrument definition from the exchange specifies the exact number of levels. This message can show up alongside an OD message
	 * @property {number} OrderBook 4 : Message that contains information on a quote for all price levels
	 * @property {number} SecurityStatus 5 : Message that provides the security group market state change
	 * @property {number} DailyStatistics 6 : Message that provides information about a complete session
	 * @property {number} SessionStatistics 7 : Message that provides information about the session during the session
	 * @property {number} LimitsBanding 8 : Message that provides the daily limits for the current session
	 * @property {number} ChannelReset 9 : Message that indicates if the channel the contract is on was reset and at what time
	 * @property {number} TransactionMarker 10 : The TS message marks the start of a bundle, and the TE message marks the end of that bundle. The exchange considers all the messages between the start and end marker to have been processed together, regardless of how the packets were split during exchange transmission
	 */
	/**
	 * A v9․UnionID Object that contains each of the different values that may be returned from:</br>
	 *  - v9.UnionID
	 * @type {UnionID}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *         case v9.UnionID.<Value>:
	 *             // Do something when this.pEvent.header.unionID is equal to v9.UnionID.<Value>
	 *             break;
	 *         default :
	 *             break;
	 *     }
	 * }
	 */
	UnionID: {
		NotSet: 255,
		NotMapped: 250,
		TradeSummary: 0,
		TradeMatch: 1,
		VolumeUpdate: 2,
		BookLevel: 3,
		OrderBook: 4,
		SecurityStatus: 5,
		DailyStatistics: 6,
		SessionStatistics: 7,
		LimitsBanding: 8,
		ChannelReset: 9,
		TransactionMarker: 10,
	},

	/**
	 * @typedef {Object} Aggressor
	 * @property {number} NoAggressor 0
	 * @property {number} Buy 1
	 * @property {number} Sell 2
	 */
	/**
	 * A v9․Aggressor Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.tradeSummary.aggressor
	 * @type {Aggressor}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.TradeSummary:
	 *                  var agr = this.pEvent.tradeSummary.aggressor;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	Aggressor: {
		NoAggressor: 0,
		Buy: 1,
		Sell: 2
	},

	/**
	 * @typedef {Object} HaltReason
	 * @property {number} NotSet 255
	 * @property {number} GroupSchedule 0
	 * @property {number} SurveillanceIntervention 1
	 * @property {number} MarketEvent 2
	 * @property {number} InstrumentActivation 3
	 * @property {number} InstrumentExpiration 4
	 * @property {number} Unknown 5
	 * @property {number} RecoveryInProcess 6
	 */
	/**
	 * A v9․HaltReason Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.securityStatus.haltReason
	 * @type {HaltReason}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *         case v9.UnionID.SecurityStatus:
	 *             var hlt = this.pEvent.securityStatus.haltReason;
	 *             break;
	 *         default :
	 *             break;
	 *     }
	 * }
	 */
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

	/**
	 * @typedef {Object} SecurityType
	 * @property {number} NotSet 0
	 * @property {number} TradingHalt 2
	 * @property {number} Close 4
	 * @property {number} NewPriceIndication 15
	 * @property {number} ReadyToTrade 17
	 * @property {number} NotAvailableForTrading 18
	 * @property {number} UnknownorInvalid 20
	 * @property {number} PreOpen 21
	 * @property {number} PreCross 24
	 * @property {number} PostClose 26
	 * @property {number} NoChange 103
	 * @property {number} PreClose 150 : Only ICE Exchange
	 * @property {number} Restricted 200 : Only EUREX Exchange
	 * @property {number} Freeze 201 : Only EUREX Exchange
	 */
	/**
	 * A v9․SecurityType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.securityStatus.type
	 * @type {SecurityType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *         case v9.UnionID.SecurityStatus:
	 *             var typ = this.pEvent.securityStatus.type;
	 *             break;
	 *         default :
	 *             break;
	 *     }
	 * }
	 */
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
		PostClose: 26,
		NoChange: 103,
		PreClose: 150,
		Restricted: 200,
		Freeze: 201
	},

	/**
	 * @typedef {Object} SecurityEvent
	 * @property {number} NoEvent 0
	 * @property {number} NoCancel 1
	 * @property {number} ResetStatistics 4
	 * @property {number} ImpliedMatchingON 5
	 * @property {number} ImpliedMatchingOFF 6
	 */
	/**
	 * A v9․SecurityEvent Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.securityStatus.securityEvent
	 * @type {SecurityEvent}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.SecurityStatus:
	 *                  var sev = this.pEvent.securityStatus.securityEvent;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	SecurityEvent: {
		NoEvent: 0,
		NoCancel: 1,
		ResetStatistics: 4,
		ImpliedMatchingON: 5,
		ImpliedMatchingOFF: 6
	},

	/**
	 * @typedef {Object} BookType
	 * @property {number} NotSet 85
	 * @property {number} Bid 66
	 * @property {number} Ask 83
	 * @property {number} ImpliedBid 98
	 * @property {number} ImpliedAsk 115
	 * @property {number} BookReset 82
	 */
	/**
	 * A v9․BookType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.orderBook.type
	 *  - this.pEvent.bookLevel.type
	 * @type {BookType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.OrderBook:
	 *                  var typ = this.pEvent.orderBook.type;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	BookType: {
		NotSet: 85,
		Bid: 66,
		Ask: 83,
		ImpliedBid: 98,
		ImpliedAsk: 115,
		BookReset: 82
	},

	/**
	 * @typedef {Object} DailyStatisticsType
	 * @property {number} SettlePrice '6'
	 * @property {number} ClearedVolume 'B'
	 * @property {number} OpenInterest 'C'
	 * @property {number} Fixing 'W'
	 */
	/**
	 * A v9․DailyStatisticsType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.dailyStatistics.type
	 * @type {DailyStatisticsType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.DailyStatistics:
	 *                  var typ = this.pEvent.dailyStatistics.type;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	DailyStatisticsType: {
		SettlementPrice: 54,
		ClearedVolume: 66,
		OpenInterest: 67,
		FixingPrice: 87
	},

	/**
	 * @typedef {Object} BookAction
	 * @property {number} NotSet 255
	 * @property {number} New 0
	 * @property {number} Change 1
	 * @property {number} Delete 2
	 * @property {number} DeleteThru 3
	 * @property {number} DeleteFrom 4
	 * @property {number} Overlay 5
	 * @property {number} Replace 6
	 */
	/**
	 * A v9․BookAction Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.orderBook.action
	 *  - this.pEvent.bookLevel.action
	 * @type {BookAction}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.OrderBook:
	 *                  var act = this.pEvent.orderBook.action;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
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

	/**
	 * @typedef {Object} SessionStatisticsType
	 * @property {number} NotSet 127
	 * @property {number} OpenPrice 0
	 * @property {number} HighTrade 1
	 * @property {number} LowTrade 2
	 * @property {number} LastTrade 3
	 * @property {number} HighestBid 4
	 * @property {number} LowestAsk 5
	 * @property {number} ClosePrice 6
	 */
	/**
	 * A v9․SessionStatisticsType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.sessionStatistics.type
	 * @type {SessionStatisticsType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *         case v9.UnionID.SessionStatistics:
	 *                  var typ = this.pEvent.sessionStatistics.type;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	SessionStatisticsType: {
		NotSet: 127,
		OpenPrice: 0,
		HighTrade: 1,
		LowTrade: 2,
		LastTrade: 3,
		HighestBid: 4,
		LowestAsk: 5,
		ClosePrice: 6
	},

	/**
	 * @typedef {Object} StateType
	 * @property {number} NotSet 255
	 * @property {number} DailyOpenPrice 0
	 * @property {number} IndicativeOpeningPrice 5
	 * @property {number} DailyClosingPrice 10
	 */
	/**
	 * A v9․StateType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.sessionStatistics.stateType
	 * @type {StateType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.SessionStatistics:
	 *                  var stt = this.pEvent.sessionStatistics.stateType;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	StateType: {
		NotSet: 255,
		DailyOpenPrice: 0,
		IndicativeOpeningPrice: 5,
		DailyClosePrice: 10
	},

	/**
	 * @typedef {Object} PutOrCall
	 * @property {number} NotSet 255
	 * @property {number} Put 0
	 * @property {number} Call 1
	 */
	/**
	 * A v9․PutOrCall Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.PutOrCall.type
	 * @type {PutOrCall}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     // N/A
	 * }
	 */
	PutOrCall: {
		NotSet: 255,
		Put: 0,
		Call: 1
	},

	/**
	 * @typedef {Object} SettleType
	 * @property {number} Final 1
	 * @property {number} Actual 2
	 * @property {number} Rounded 4
	 * @property {number} Intraday 8
	 * @property {number} ReservedBits 16
	 * @property {number} NullValue 128
	 */
	/**
	 * A v9․SettleType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.dailyStatistics.settleType
	 * @type {SettleType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.DailyStatistics:
	 *                  var stl = this.pEvent.dailyStatistics.settleType;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	SettleType: {
		Final: 1,
		Actual: 2,
		Rounded: 4,
		Intraday: 8,
		ReservedBits: 16,
		NullValue: 128
	},

	/**
	 * @typedef {Object} TransactionType
	 * @property {number} NotSet 255
	 * @property {number} TransactionStart 0
	 * @property {number} TransactionEnd 1
	 */
	/**
	 * A v9․TransactionType Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.transactionMarker.transactionType
	 * @type {TransactionType}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.TransactionMarker:
	 *                  var ttp = this.pEvent.transactionMarker.transactionType;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	TransactionType: {
		NotSet: 255,
		TransactionStart: 0,
		TransactionEnd: 1
	},

	/**
	 * @typedef {Object} EventIndicator
	 * @property {number} NotSet 0
	 * @property {number} LastOfType 1
	 * @property {number} EndOfEvent 128
	 */
	/**
	 * A v9․EventIndicator Object that contains each of the different values that may be returned from:</br>
	 *  - this.pEvent.header.eventIndicator
	 * @type {EventIndicator}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *     switch (this.pEvent.header.unionID) {
	 *    case v9.UnionID.EventIndicator:
	 *                  var ind = this.pEvent.header.eventIndicator;
	 *              break;
	 *          default :
	 *              break;
	 *     }
	 * }
	 */
	EventIndicator: {
		NotSet: 0,
		LastOfType: 1,
		EndOfEvent: 128
	},

	/**
	 * @typedef {Object} InvestigateStatus
	 * @property {number} NotSet 0
	 * @property {number} UnderInvestigation 1
	 * @property {number} InvestigationStatus 2
	 */
	/**
	 * A v9․InvestigateStatus Object that contains each of the different values that may be returned from:</br>
	 *  - N/A
	 * @type {InvestigateStatus}
	 * @example
	 * onEvent(pSymbol, this.pEvent, pRealTime) {
	 *    // N/A
	 * }
	 */
	InvestigateStatus: {
		NotSet: 0,
		UnderInvestigation: 1,
		InvestigationCompleted: 2
	},

	/**
	 * Returns a JSON Object representation of the provided Event
	 * @param {Event} this.pEvent - The Event to be converted to a JSON Object
	 */
	eventToJson(this.pEvent): function {
	}

	/**
	 * Returns an identical copy of the provided Object
	 * @param {Object} pObject - The Object to be copied
	 */
	objectCopy(pObject): function {
	}

	/**
	 * Returns an identical copy of the provided Event
	 * @param {Event} this.pEvent - The Event to be copied
	 */
	eventCopy(this.pEvent): function {
	}

	//TODO add MyFeed functions that are dups of v9.feed for param intellisense
}
`,
);
