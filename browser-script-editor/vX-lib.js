monaco.languages.typescript.javascriptDefaults.addExtraLib(
`
/**
 * Code.VX Intellisense
 *
 * By: Blake Boris
 * blakeboris.com
 *
 * January 2021
 */

/**
 * Class used for referencing any individual Event from the current feed
 * @typedef {object} vX_Event
 * @property {object} header Each Event's header object provides access to identifying Event information and is accessed using: <eventName>.header.<property>
 * @property {number} header.unionID ***vX.UnionID** Enumerated value used to find the type of an Event object
 */
/**
 * Class used for referencing any individual Event from the current feed
 */
vX_Event: {
	/**
	 * Each Event's header object provides access to identifying Event information and is accessed using:
	 *  - <eventName>.header.<property>
	 */
	header:
	{
		/**
		 * **vX.UnionID** Enumerated value used to find the type of an Event object
		 */
		unionID: 255,
		/**
		 * The unique instrument identifier for the current exchange
		 */
		instrumentID: 0,
		/**
		 * The current Event object's session array index
		 */
		sequence: 0,
		/**
		* The packet ID of the current Event
		*/
		channelSequence: 0,
	   	/**
		 * The unique ID of the current within the current instrument
		 */
		instrumentSequence: 0,
		/**
		 * The exact time of the current Event in milliseconds as a number
		 */
		milliseconds: 0
		/**
		 * The exact time of the current Event in nanoseconds as a BigInt
		 */
		time: 0,
	},

	/**
	 * Each Event's tradeSummary object provides access to each trade that occurs and is accessed using:
	 *  - <eventName>.tradeSummary.<property>
	 */
	tradeSummary: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * The total quantity matched for the the current Event
		 */
		quantity: 0,
		/**
		 * The number of upcoming orders that will participate in the current Event
		 */
		matches: 0,
		/**
		 * **vX.Aggressor** The aggressor of the trade the current Event is summarizing
		 */
		aggressor: 0,
		/**
		 * Whether or not the trade the current Event is summarizing was implied
		 */
		isImplied: false,
		/**
		 * Whether or not the current Event is a market summary
		 */
		isSnapshot: false,
		/**
		 * The accumulated volume of the current session
		 */
		volume: 0
	},

	/**
	 * Each Event's tradeMatch object provides access to every order matched in a trade and can be accessed using:
	 *  - <eventName>.tradeMatch.<property>
	 */
	tradeMatch: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * The total quantity matched for the current Event
		 */
		quantity: 0,
		/**
		 * The enumerated value from 0 to number of TradeSummary.matches
		 */
		number: 0,
		/**
		 * Whether or not the current Event was made by the aggressor of the trade
		 */
		isAggressor: 0,
		/**
		 * The identifier for the current Event’s order
		 */
		orderID: 0,
		/**
		 * The original identifier for the current Event’s order : ICE
		 */
		auxiliaryID: 0,
		/**
		 * These bits are exchange specific. Please refer to the docs
		 */
		flags: 0
	},

	/**
	 * Each Event's orderBook object provides access to every action of every order at all price levels and can be accessed using:
	 *  - <eventName>.orderBook.<property>
	 *
	 * Each Event's orderBook has a one-to-many relationship with Event.bookLevel.level (levels 0-10)
	 */
	orderBook: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * **vX.BookType** The type of the current Event
		 */
		type: 85,
		/**
		 * The total quantity matched for the current Event
		 */
		quantity: 0,
		/**
		 * The order priority for execution on the current order book : Lower = higher priority
		 */
		priorityID: 0,
		/**
		 * The first OrderID assigned because some exchanges change the orderID : Only ICE and Eurex Exchanges
		 */
		auxiliaryID: 0,
		/**
		 * If an orderID is changed, this is the ID that was just replaced : Eurex
		 */
		previousID: 0,
		/**
		 * The identifier for the current Event's order
		 */
		orderID: 0,
		/**
		 * **vX.BookAction** The book action of the order corresponding to the current event
		 */
		action: 255,
		/**
		 * Whether or not the current Event is a market summary
		 */
		isSnapshot: 0
	},

	/**
	 * Each Event's bookLevel object provides access to quote activity and price level summations for levels 1 through 10 on each side of the book.\nEach Event's bookLevel object has a corresponding orderBook event which provides details about the quote itself with a matching nanosecond timestamp.\nProperties of bookLevel can be accessed using:
	 *  - <eventName>.bookLevel.<property>
	 *
	 * Each Event's bookLevel (levels 0-10) has a many-to-one relationship with Event.orderBook
	 */
	bookLevel: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * The total quantity matched for the the current Event
		 */
		quantity: 0,
		/**
		 * The number of orders that participated at the current Event’s price level
		 */
		orders: 0,
		/**
		 * The total implied quantity at the current event’s price level
		 */
		impliedQuantity: 0,
		/**
		 * The total number of implied orders at the current event’s price level
		 */
		impliedOrders: 0,
		/**
		 * The price level at which the event occurred
		 */
		level: 0,
		/**
		 * **vX.BookAction** The book action of the order corresponding to the current event
		 */
		action: 255,
		/**
		 * **vX.BookType** The type of the current Event
		 */
		type: 85,
		/**
		 * Whether or not the current Event is the last Event of the packet
		 */
		isEndEvent: false
	},

	/**
	 * Each Event's volumneUpdate object provides access to each session volume update sent by the exchange and can be accessed using:
	 *  - <eventName>.volumeUpdate.<property>
	 * */
	volumeUpdate: {
		/**
		 * The total volume for the session including the current Event
		 */
		volume: 0,
		/**
		 * The current volume weighted average price : ICE
		 */
		vwap: 0
	},

	/**
	 * Each Event's dailyStatistics object provides access to each of the daily statistics sent by the exchange. Properties of dailyStatistics can be accessed using:
	 *  - <eventName>.dailyStatistics.<property>
	 */
	dailyStatistics: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * The unique instrument identifier for the current exchange
		 */
		instrumentID: 0,
		/**
		 * The total number of Events in the current session (Only applies to OpenInterest type)
		 */
		size: 0,
		/**
		 * The session date pertaining to the current Event (Not always current session)
		 */
		sessionDate: 0,
		/**
		 * **vX.DailyStatisticsType** The type of the current Event
		 */
		type: 0,
		/**
		 * **vX.SettleType** The settlement type of the current Event
		 */
		settleType: 0
	},

	/**
	 * Each Event's limitsBanding object provides access to the session limit levels sent by the exchange and can be accessed using:
	 *  - <eventName>.limitsBanding.<property>
	 */
	limitsBanding: {
		/**
		 * The highest price level the contract can trade in this session
		 */
		highLimit: 0,
		/**
		 * The lowest price level the contract can trade in this session
		 */
		lowLimit: 0,
		/**
		 * The maximum tradeable range for this session
		 */
		maxVariation: 0
	},

	/**
	 * Each Event's sessionStatistics object provides access to each of the session statistics from the exchange. Properties of sessionStatistics can be accessed using:
	 *  - <eventName>.sessionStatistics.<property>
	 */
	sessionStatistics: {
		/**
		 * The price of the current Event
		 */
		price: 0,
		/**
		 * The unique instrument identifier for the current exchange
		 */
		instrumentID: 0,
		/**
		 * **vX.StateType** The type of the current Event
		 */
		stateType: 255,
		/**
		 * **vX.BookAction** The book action of the order corresponding to the current event
		 */
		action: 255,
		/**
		 * **vX.SessionStatisticsType** The type of the current Event
		 */
		type: 127,
		/**
		 * The total number of Events in the current session
		 */
		volume: 0
	},

	/**
	 * Each Event's securityStatus object provides access to each security message from the exchange and can be accessed using:
	 *  - <eventName>.securityStatus.<property>
	 */
	securityStatus: {
		/**
		 * The exchange specific code assigned to a group of related securities, which are concurrently affected by market events
		 */
		group: "",
		/**
		 * The underlying asset code represented as a String
		 */
		asset: "",
		/**
		 * The date of the current Event's trading session
		 */
		sessionDate: 0,
		/**
		 * **vX.SecurityType** The type of the current Event
		 */
		type: 0,
		/**
		 * **vX.HaltReason** The reason why the market has been halted
		 */
		haltReason: 255,
		/**
		 * **vX.SecurityEvent** Additional reasoning for the market being halted
		 */
		event: 0
	},
};

/**
 * TODO
 * @typedef {Object} vX_Order
 * @property {bigint} entry The exact entry time of the current Order in nanoseconds as a BigInt
 * @property {number} fills The number of times this order has been matched in a trade
 * @property {number} mods The number of times this order has moved price levels or changed quantities
 * @property {bigint} orderID The current Order's unique ID as a BigInt
 * @property {number} price The current Order's price
 * @property {number} quantity The current Order's shown quantity
 * @property {bigint} time The exact fill time of the current Order in nanoseconds as a BigInt
 * @property {number} type The type of the current Order as a vX.Trigger value
 */
/**
 * vX.Order is an object type that is most commonly referred to within vX.feed.onTrigger() as its pObject parameter and is otherwise referenced as:
 * vX.Order.<property>
 */
vX_Order: {
	/**
	 * The exact entry time of the current Order in nanoseconds as a BigInt
	 */
	entry: 0n,
	/**
	 * The number of times this order has been matched in a trade
	 */
	fills: 0,
	/**
	 * The number of times this order has moved price levels or changed quantities
	 */
	mods: 0,
	/**
	 * The current Order's unique ID as a BigInt
	 */
	orderID: 0n,
	/**
	 * The current Order's price
	 */
	price: 0,
	/**
	 * The current Order's shown quantity
	 */
	quantity: 0,
	/**
	 * The exact fill time of the current Order in nanoseconds as a BigInt
	 */
	time: 0n,
	/**
	 * The type of the current Order as a vX.Trigger value
	 */
	type: 0,
};

/**
 * Base Object used for referencing all major types, classes, and functions for Code.VX
 */
let vX = {
	/**
	 * This class' functions should be overridden in each script for handling user actions and symbol events
	 */
	feed: class {
		/**
		 * The constructor is called when the user instantiates a new vX.feed
		 * @param {Object} pConfiguration Object containing feed properties
		 * @param {string} pConfiguration.symbol The current market symbol
		 * @param {number} pConfiguration.startDate The starting date of the script
		 * @param {number} pConfiguration.endDate The ending date of the script
		 * @param {boolean} pConfiguration.weekends Whether or not to execute on weekends
		 * @param {boolean} pConfiguration.buildBooks Whether or not the feed handles book building
		 * @param {vX_Trigger[]} pConfiguration.triggers Array containing object/order types that evoke vX.feed.onTrigger()
		 * @type {function}
		 */
		constructor(pConfiguration)
		{
		}

		/**
		 * onInit is called when the run button is pressed
		 */
		onInit()
		{
		}

		/**
		 * @typedef {Object} vX_Instrument
		 * @property {string} asset The current asset name
		 * @property {string} contractSymbol The current symbol name
		 * @property {number} tickSize The percentage of a handle that each tick is worth (divide by 1e10^11)
		 * @property {number} tickValue The value of each tick in USD
		 * @property {number} unitOfMeasure The value of each handle in USD
		 */
		/**
		 * @typedef {Object} vX_Meta
		 * @property {string} asset The current asset name
		 * @property {string} date The current date
		 * @property {vX_Instrument[]} instruments Array containing objects with the properties of each instrument referenced in the current algorithm
		 */
		/**
		 * **pMeta is accessable**
		 *
		 * onOpen is called at the start of each day between the startDate and endDate parameters of a multi-day script
		 * @param {vX_Meta} pMeta - Object representing json meta information. It currently provides the instrument definitions of the supplied symbol
		 */
		onOpen(pMeta) {
		}

		/**
		 * **pSymbol, pDate, pOrder, pFlag are accessable**
		 *
		 * onTrigger is called when an order is hit that matches the user defined triggers specified in vX.Feed.Trigger
		 * @param {string} pSymbol - The name of the current symbol
		 * @param {number} pDate - The current date as a number
		 * @param {object|vX_Order} pObject - The current object/order being handled
		 * @param {number|vX_Trigger} pFlag - The trigger type of the current object/order
		 */
		onTrigger(pSymbol, pDate, pObject, pFlag)
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
		 * **pSymbol, pDate, pEvent, pRealTime are accessable**
		 *
		 * onEvent is called once for each timestamp tracked in your symbol(s)
		 * @param {string} pSymbol - The name of the current symbol
		 * @param {number} pDate - The current date as a number
		 * @param {Event} pEvent - The current event being handled
		 * @param {boolean} pRealTime - Boolean determining whether or not to only handle current events
		 */
		onEvent(pSymbol, pDate, pEvent, pRealTime)
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
		 * - BookItemA(level: Number)
		 * @param {number} - level The level of the order you want to know the price and quantity of
		 */
		BookItemA(level)
		{
		}

		/**
		 * BookItemB returns a specific bid level of the current feed's book as an Object using:
		 * - BookItemB(level: Number)
		 * @param {number} level - The level of the order you want to know the price and quantity of
		 */
		BookItemB(level)
		{
		}

		/**
		 * BookRowsA returns the number of ask levels within the current feed's book using:
		 * - BookRowsA()
		 */
		BookRowsA()
		{
		}

		/**
		 * BookRowsB returns the number of bid levels within the current feed's book using:
		 * - BookRowsB()
		 */
		BookRowsB()
		{
		}

		/**
		 * OrdersItemA returns a specific ask level of the current feed's book as an Object using:
		 * - OrdersItemA(level: Number)
		 * @param {number} - level The level of the order you want to know the price and quantity of
		 */
		OrdersItemA(level)
		{
		}

		/**
		 * OrdersItemB returns a specific bid level of the current feed's book as an Object using:
		 * - OrdersItemB(level: Number)
		 * @param {number} level - The level of the order you want to know the price and quantity of
		 */
		OrdersItemB(level)
		{
		}

		/**
		 * OrdersRowsA returns the number of ask levels within the current feed's book using:
		 * - OrdersRowsA()
		 */
		OrdersRowsA()
		{
		}

		/**
		 * OrdersRowsB returns the number of bid levels within the current feed's book using:
		 * - OrdersRowsB()
		 */
		OrdersRowsB()
		{
		}
	},

	/**
	 * The constructor is called when the user instantiates a new vX.console using:
	 * - new vX.console({ fillColor: String, textColor: String })
	 */
	console: class {
		/**
		 * The constructor is called when the user instantiates a new vX.console using:
		 * - new vX.console(pConfiguration: Object)
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
		textColor(pColor)
		{
		}

		/**
		 * Prints one or more values
		 */
		print(...value)
		{
		}
	},

	/**
	 * This class' functions should be overridden in each script for handling user actions and symbol events
	 */
	table: class {
		/**
		 * @typedef {Object} table_Column
		 * @property {string} name - The name of the column header
		 * @property {string} format - The type of the column as a string. Formats include:\nstring, number, bigint, boolean, orderID, time, symbol, date
		 * @property {number} width - The width of the column in pixels
		 * @property {number} digits - The number of digits past the decimal point to display for each value within the column
		 * @property {vX.Align} align - The horizontal alignment of each value within the column
		 */
		/**
		 * The constructor is called when the user instantiates a new vX.table using:
		 * - new vX.table(pConfiguration: Object)
		 * @param {Object} pConfiguration - Object containing table properties
		 * @param {string} pConfiguration.fillColor - The background color of the console as a hexadecimal string
		 * @param {string} pConfiguration.textColor - The text color of the console as a hexadecimal string
		 * @param {string} pConfiguration.gridColor - The text color of the console as a hexadecimal string
		 * @param {string} pConfiguration.width - The number of columns to be displayed within the table
		 * @param {string} pConfiguration.digits - The default number of digits past the decimal point to display for each cell
		 * @param {string} pConfiguration.align - The default alignment for each cell
		 * @param {string} pConfiguration.columns - The number of columns displayed within the table
		 * @param {string} pConfiguration.format - The default format for every column within the table. Formats include:\nstring, number, bigint, boolean, orderID, time, symbol, date
		 * @param {table_Column[]} pConfiguration.header - Array of column objects with their specific formatting properties
		 * @type {function}
		 */
		constructor(pConfiguration)
		{
		}

		/**
		 * Prints one or more values
		 */
		print(...value)
		{
		}
	},

	//TODO: Complete sheet intellisense once vX.sheet is in production
	// sheet: class {
	// 	/**
	// 	 * The constructor is called when the user instantiates a new vX.sheet using:
	// 	 * - new vX.sheet(pConfiguration: Object)
	// 	 */
	// 	constructor(pConfiguration)
	// 	{
	// 	}
	//  /**
	// 	* Prints one or more values
	// 	*/
	//  print(...value)
	//  {
	//  }
	// },

	/**
	 * @typedef {Object} vX_Session
	 * @property {number} Current 0
	 * @property {number} Previous 1
	 */
	/**
	 * vX.Session allows the user to reference the current or previous market session without having to manually update the startDate and endDate of their feed and is always referenced as:
	 *  - vX․Session.<property>
	 * \n
	 */
	Session: {
		/**
		 * The current market session as of when the script is run
		 */
		Current: 0,
		/**
		 * The most recently closed market session as of when the script is run
		 */
		Previous: 1
	},

	/**
	 * vX.Trigger is a flag that enables the use of the vX.feed.onTrigger() function when referenced within the initialization of the feed and is always referenced as:
	 *  - vX․Trigger.<property>
	 * \n
	 * vX.Trigger is used in vX.feed.onTrigger() as the pFlag parameter
	 * @typedef {Object} vX_Trigger
	 * @property {number} IcebergOrders Invokes v9.feed.onTrigger() on iceberg orders
	 * @property {number} TradeSweeps Invokes v9.feed.onTrigger() on trade sweeps
	 * @property {number} StopOrders Invokes v9.feed.onTrigger() on stop orders
	 * @property {number} Trades Invokes v9.feed.onTrigger() on all raw trade orders
	 */
	/**
	 * vX.Trigger is a flag that enables the use of the vX.feed.onTrigger() function when referenced within the initialization of the feed and is always referenced as:
	 *  - vX․Trigger.<property>
	 * \n
	 * vX.Trigger is used in vX.feed.onTrigger() as the pFlag parameter
	 */
	Trigger: {
		/**
		 * Invokes v9.feed.onTrigger() on iceberg orders
		 */
		IcebergOrders: 1,
		/**
		 * Invokes v9.feed.onTrigger() on trade sweeps
		 */
		TradeSweeps: 2
		/**
		 * Invokes v9.feed.onTrigger() on stop orders
		 */
		StopOrders: 4,
		/**
		 * Invokes v9.feed.onTrigger() on all raw trade orders
		 */
		Trades: 8
	},

	/**
	 * vX.Align allows for the alignment of sheet and table date within cells and is always referenced as:
	 *  - vX.Align.<property>
	 * \n
	 * vX.Align is used for the following vX.table properties:
	 * - vX.table.align
	 * - vX.table.header.align
	 * - vX.sheet.align
	 * - vX.sheet.header.align
	 */
	Align: {
		/**
		 * Aligns data within a cell to its default position
		 */
		Default: 0,
		/**
		 * Aligns data within a cell to the middle horizontally
		 */
		Center: 1,
		/**
		 * Aligns data within a cell to the left
		 */
		Left: 2,
		/**
		 * Aligns data within a cell to the right
		 */
		Right: 3
	},

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
	 */
	/**
	 * A UnionID marks the type of an event and is always referenced as:
	 * - vX.UnionID.<property>
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
	},

	/**
	 * @typedef {Object} Aggressor
	 * @property {number} NoAggressor 0
	 * @property {number} Buy 1
	 * @property {number} Sell 2
	 */
	/**
	 * An Aggressor is a type of event and is always referenced as:
	 * - vX.Aggressor.<property>
	 *\n
	 * vX.Aggressor is used for the following event types:
	 * - pEvent.tradeSummary.aggressor
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
	 * A HaltReason is a type of event and is always referenced as:
	 * - vX.HaltReason.<property>
	 *\n
	 * vX.HaltReason is used for the following event types:
	 * - pEvent.securityStatus.haltReason
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
	 * A SecurityType is a type of event and is always referenced as:
	 * - vX.SecurityType.<property>
	 *\n
	 * vX.SecurityType is used for the following event types:
	 * - pEvent.securityStatus.type
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
	 * A SecurityEvent is a type of event and is always referenced as:
	 * - vX.SecurityEvent.<property>
	 *\n
	 * vX.SecurityEvent is used for the following event types:
	 * - pEvent.securityStatus.event
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
	 * A BookType is a type of event and is always referenced as:
	 * - vX.BookType.<property>
	 *\n
	 * vX.BookType is used for the following event types:
	 * - pEvent.orderBook.type
	 * - pEvent.bookLevel.type
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
	 * A DailyStatisticsType is a type of event and is always referenced as:
	 * - vX.DailyStatisticsType.<property>
	 *\n
	 * vX.DailyStatisticsType is used for the following event types:
	 * - pEvent.dailyStatistics.type
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
	 * A BookAction is a type of event and is always referenced as:
	 * - vX.BookAction.<property>
	 *\n
	 * vX.BookAction is used for the following event types:
	 * - pEvent.orderBook.action
	 * - pEvent.bookLevel.action
	 * - pEvent.dailyStatistics.action
	 * - pEvent.sessionStatistics.action
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
	 * A SessionStatisticsType is a type of event and is always referenced as:
	 * - vX.SessionStatisticsType.<property>
	 *\n
	 * vX.SessionStatisticsType is used for the following event types:
	 * - pEvent.sessionStatistics.type
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
	 * A StateType is a type of event and is always referenced as:
	 * - vX.StateType.<property>
	 *\n
	 * vX.StateType is used for the following event types:
	 * - pEvent.sessionStatistics.stateType
	 */
	StateType: {
		NotSet: 255,
		DailyOpenPrice: 0,
		IndicativeOpeningPrice: 5,
		DailyClosePrice: 10
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
	 * A SettleType is a type of event and is always referenced as:
	 * - vX.SettleType.<property>
	 *\n
	 * vX.SettleType is used for the following event types:
	 * - pEvent.dailyStatistics.settleType
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
	 * Returns a JSON Object representation of the provided Event
	 * @param {Event} pEvent - The Event to be converted to a JSON Object
	 */
	eventToJson(pEvent): function {
	}

	/**
	 * Returns an identical copy of the provided Object
	 * @param {Object} pObject - The Object to be copied
	 */
	objectCopy(pObject): function {
	}

	/**
	 * Returns an identical copy of the provided Event
	 * @param {Event} pEvent - The Event to be copied
	 */
	eventCopy(pEvent): function {
	}
}
`,
);
