monaco.languages.typescript.javascriptDefaults.addExtraLib(
	`
//============================================================================================================

//-----------------------------------------------------------------------------------------------------------=
const	qEditSymb			=	2001;
const	qEditDate			=	2002;
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
const	littleEndian	=	true;
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
var v9 = {

	edit = class
	{
		//-----------------------------------------------------------------------------------------------------------=
		constructor (pEditType)
		{
			this.fEditType	=	qEditSymb;

			if (pEditType)	{
				if (pEditType.toUpperCase() === "SYMBOL")	{
					this.fEditType	=	qEditSymb;
					}
				if (pEditType.toUpperCase() === "DATE")	{
					this.fEditType	=	qEditDate;
					}
				}
		}
		//-----------------------------------------------------------------------------------------------------------=

		//-----------------------------------------------------------------------------------------------------------=
		set value (pEdit)
		{
			return gHome._pagesave (gUniq,this.fEditType,pEdit);
		}
		//-----------------------------------------------------------------------------------------------------------=

		//-----------------------------------------------------------------------------------------------------------=
		get value ()
		{
			return gHome._pageread (gUniq,this.fEditType);
		}
		//-----------------------------------------------------------------------------------------------------------=

		//-----------------------------------------------------------------------------------------------------------=
		get symbol ()
		{
			return  (this.fEditType==qEditSymb) ? 	this.value : "";
		}
		//-----------------------------------------------------------------------------------------------------------=

		//-----------------------------------------------------------------------------------------------------------=
		get date ()
		{
			return  (this.fEditType==qEditDate) ? 	this.value : "";
		}
		//-----------------------------------------------------------------------------------------------------------=

	}

	PRICE_NULL_32		:	2147483647,
	PRICE_NULL_64		:	9223372036854775807n,
	sGroupSettleID		:	4294967293,

	Aggressor	:
	{
		NoAggressor					: 0,
		Buy							: 1,
		Sell						: 2
	},

	HaltReason	:
	{
		NotSet						: 255,
		GroupSchedule				: 0,
		SurveillanceIntervention	: 1,
		MarketEvent					: 2,
		InstrumentActivation		: 3,
		InstrumentExpiration		: 4,
		Unknown						: 5,
	    RecoveryInProcess			: 6
	},

	SecurityType	:
	{
		NotSet						: 0,
		TradingHalt					: 2,
		Close						: 4,
		NewPriceIndication			: 15,
		ReadyToTrade				: 17,
		NotAvailableForTrading		: 18,
		UnknownorInvalid			: 20,
		PreOpen						: 21,
		PreCross					: 24,
		Cross						: 25,
		PostClose					: 26,
		NoChange					: 103,
		PreClos						: 150,
		Restricted					: 200,
		Freeze						: 201
	},

	SecurityEvent	:
	{
		NoEvent						: 0,
		NoCancel					: 1,
		ResetStatistics				: 4,
		ImpliedMatchingON			: 5,
		ImpliedMatchingOFF			: 6
	},

	BookType	:
	{
		NotSet						: 85,
		Bid							: 66,
		Ask							: 83,
		ImpliedBid					: 98,
		ImpliedAsk					: 115,
		BookReset					: 82
	},

	DailyStatisticsType	:
	{
		SettlementPrice				: 54,
		ClearedVolume				: 66,
		OpenInterest				: 67,
		FixingPrice					: 87
	},

	BookAction	:
	{
		NotSet						: 255,
		New							: 0,
		Change						: 1,
		Delete						: 2,
		DeleteThru					: 3,
		DeleteFrom					: 4,
		Overlay						: 5,
		Replace						: 6
	},

	SessionStatisticsType	:
	{
		NotSet						: 127,
		OpenPrice					: 0,
		HighTrade					: 1,
		LowTrade					: 2,
		LastTrade					: 3,
		HighestBid					: 4,
		LowestAsk					: 5,
		ClosePrice					: 6
	},


	StateType	:
	{
		NotSet						: 255,
		DailyOpenPrice				: 0,
		IndicativeOpeningPrice		: 5,
		DailyClosePrice				: 10
	},

	PutOrCall	:
	{
		NotSet						: 255,
		Put							: 0,
		Call						: 1
	},

	SettleType	:
	{
		Final						: 1,
		Actual						: 2,
		Rounded						: 4,
		Intraday					: 8,
		ReservedBits				: 16,
		NullValue					: 128
	},

	TransactionType	:
	{
		NotSet						: 255,
		TransactionStart			: 0,
		TransactionEnd				: 1
	},

	EventIndicator	:
	{
		NotSet						: 0,
		LastOfType					: 1,
		EndOfEvent					: 128
	},

	UnionID				:
	{
		NotSet						: 255,
		NotMapped					: 250,
		TradeSummary				: 0,
		TradeMatch					: 1,
		VolumeUpdate				: 2,
		BookLevel					: 3,
		OrderBook					: 4,
		SecurityStatus				: 5,
		DailyStatistics				: 6,
		SessionStatistics			: 7,
		LimitsBanding				: 8,
		ChannelReset				: 9,
		TransactionMarker			: 10,
	}

};
//-----------------------------------------------------------------------------------------------------------=

//============================================================================================================

//-----------------------------------------------------------------------------------------------------------=
v9.lineChart = class
{
	constructor (pID) {
		this.fLineEnum		=	gHome.MakeLine (gUniq,(pID) ? document.getElementById(pID) : null);
		}

	linePush (pItem,pRate,pTime)
	{
		gHome.LinePush (gUniq,pItem.fCalcEnum,pRate,pTime);
	}

}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.cubeChart = class
{
	constructor (pID) {
		this.fCubeEnum		=	gHome.MakeCube (gUniq,(pID) ? document.getElementById(pID) : null);
		}

	cubePlus (pItem,pData,pSize)
	{
		gHome.CubePlus (gUniq,pItem,pData,pSize);
	}

	cubeDele (pItem,pData)
	{
		gHome.CubeDele (gUniq,pItem,pData);
	}

	cubeSave (pItem,pData,pSize)
	{
		gHome.CubeSave (gUniq,pItem,pData,pSize);
	}

	cubeRead (pItem,pData)
	{
		gHome.CubeRead (gUniq,pItem,pData);
	}

	cubeFree (pItem)
	{
		gHome.CubeFree (gUniq,pItem);
	}

	cubePush (pItem,pSave)
	{
		gHome.CubePush (gUniq,pItem,pSave);
	}

}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.plotChart = class
{
	constructor (pID) {
		this.fPlotEnum		=	gHome.MakePlot (gUniq,(pID) ? document.getElementById(pID) : null);
		}

	plotPlus (pItem,pData,pSize)
	{
		gHome.PlotPlus (gUniq,pItem,pData,pSize);
	}

}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.lineItem = class
{


	constructor (pPane) {
		try	{
			this.fCalcEnum		=	gHome.MakeCalc (gUniq,this);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"MakeCalc",e);
			}
		}

	set lineWidth (pData)
	{
		try	{
			this._lineWidth	=	pData;
			gHome.Calc_lineWidth (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"lineWidth",e);
			}
	}

	set strokeStyle (pData)
	{
		try	{
			this._strokeStyle	=	pData;
			gHome.Calc_strokeStyle (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErroo (gUniq,"strokeStyle",e);
			}
	}

	set format (pData)
	{
		try	{
			this._format	=	pData;
			gHome.Calc_format (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"format",e);
			}
	}

	set textStyle (pData)
	{
		try	{
			this._textStyle	=	pData;
			gHome.Calc_textStyle (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"textStyle",e);
			}
	}

	set bodyStyle (pData)
	{
		try	{
			this._bodyStyle	=	pData;
			gHome.Calc_bodyStyle (gUniq,this.fCalcEnum,pData);
			//postMessage ([_Calc_bodyStyle,gCodeDash,this.fCalcUniq,pData]);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"textStyle",e);
			}
	}

	set title (pData)
	{
		try	{
			this._title	=	pData;
			gHome.Calc_title (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"title",e);
			}
	}

	set name (pData)
	{
		try	{
			this._name	=	pData;
			gHome.Calc_name (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"name",e);
			}
	}

	get lineWidth ()
	{
		return this._lineWidth;
	}

	get strokeStyle ()
	{
		return this._strokeStyle;
	}

	get textStyle ()
	{
		return this._textStyle;
	}

	get eventStyle ()
	{
		return this._eventStyle;
	}

	get title ()
	{
		return this._title;
	}

	get format ()
	{
		return this._format;
	}
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.cubeItem = class
{


	constructor (pPane) {
		try	{
			this.fCalcEnum		=	gHome.MakeCalc (gUniq,this);
			this.fCubeMaps		=	new Map();
			}
		catch (e)	{
			gHome.PageErro (gUniq,"MakeCalc",e);
			}
		}

	set lineWidth (pData)
	{
		try	{
			this._lineWidth	=	pData;
			gHome.Calc_lineWidth (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"lineWidth",e);
			}
	}

	set strokeStyle (pData)
	{
		try	{
			this._strokeStyle	=	pData;
			gHome.Calc_strokeStyle (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErroo (gUniq,"strokeStyle",e);
			}
	}

	set format (pData)
	{
		try	{
			this._format	=	pData;
			gHome.Calc_format (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"format",e);
			}
	}

	set textStyle (pData)
	{
		try	{
			this._textStyle	=	pData;
			gHome.Calc_textStyle (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"textStyle",e);
			}
	}

	set bodyStyle (pData)
	{
		try	{
			this._bodyStyle	=	pData;
			gHome.Calc_bodyStyle (gUniq,this.fCalcEnum,pData);
			//postMessage ([_Calc_bodyStyle,gCodeDash,this.fCalcUniq,pData]);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"textStyle",e);
			}
	}

	set title (pData)
	{
		try	{
			this._title	=	pData;
			gHome.Calc_title (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"title",e);
			}
	}

	set name (pData)
	{
		try	{
			this._name	=	pData;
			gHome.Calc_name (gUniq,this.fCalcEnum,pData);
			}
		catch (e)	{
			gHome.PageErro (gUniq,"name",e);
			}
	}

	get lineWidth ()
	{
		return this._lineWidth;
	}

	get strokeStyle ()
	{
		return this._strokeStyle;
	}

	get textStyle ()
	{
		return this._textStyle;
	}

	get eventStyle ()
	{
		return this._eventStyle;
	}

	get title ()
	{
		return this._title;
	}

	get format ()
	{
		return this._format;
	}
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.objectCopy	=	 function (pObject)
{
	return Object.assign({},pObject);
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
v9.eventCopy	=	 function (pEvent)
{

	let	tEvent	=	{};

	if (pEvent.header)	{
		tEvent.header	=	v9.objectCopy (pEvent.header);
		}

	try	{
		switch (pEvent.header.unionID)	{
			case	v9.UnionID.TransactionMarker	:
				tEvent.transactionMarker	=	v9.objectCopy (pEvent.transactionMarker);
				break;
			case	v9.UnionID.ChannelReset			:
				tEvent.channelReset			=	v9.objectCopy (pEvent.channelReset);
				break;
			case	v9.UnionID.TradeSummary			:
				tEvent.tradeSummary			=	v9.objectCopy (pEvent.tradeSummary);
				break;
			case	v9.UnionID.TradeMatch			:
				tEvent.tradeMatch			=	v9.objectCopy (pEvent.tradeMatch);
				break;
			case	v9.UnionID.VolumeUpdate			:
				tEvent.volumeUpdate			=	v9.objectCopy (pEvent.volumeUpdate);
				break;
			case	v9.UnionID.BookLevel			:
				tEvent.bookLevel			=	v9.objectCopy (pEvent.bookLevel);
				break;
			case	v9.UnionID.OrderBook			:
				tEvent.orderBook			=	v9.objectCopy (pEvent.orderBook);
				break;
			case	v9.UnionID.SecurityStatus		:
				tEvent.securityStatus		=	v9.objectCopy (pEvent.securityStatus);
				break;
			case	v9.UnionID.DailyStatistics		:
				tEvent.dailyStatistics		=	v9.objectCopy (pEvent.dailyStatistics);
				break;
			case	v9.UnionID.SessionStatistics	:
				tEvent.sessionStatistics	=	v9.objectCopy (pEvent.sessionStatistics);
				break;
			case	v9.UnionID.LimitsBanding		:
				tEvent.limitsBanding		=	v9.objectCopy (pEvent.limitsBanding);
				break;
			case	v9.UnionID.ClearingPrice		:
				tEvent.clearingPrice		=	v9.objectCopy (pEvent.clearingPrice);
				break;
			}
		}
	catch (e)	{
		tEvent	=	{};
		}

	return tEvent;
}
//-----------------------------------------------------------------------------------------------------------=


//-----------------------------------------------------------------------------------------------------------=
v9.feed = class
{

	//-----------------------------------------------------------------------------------------------------------=
	constructor (pSymbol,pDate)
	{
		//DSS ("CALLING PageBack");
		//gHome._pageback (gUniq,qMakeFeed,pSymbol);
		gHome.MakeFeed (gUniq,pSymbol,pDate);
		gFeed	=	this;
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	onOpen (pMeta)
	{
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	onLoad ()
	{
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	onEvent (pSymbol,pEvent,pRealTime)
	{
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	onRender ()
	{
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	onStop ()
	{
	}
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	formatPrice (pPrice,pSymbolID)
	{
		return gHome.FormatPrice (gUniq,pPrice,pSymbolID);
	}
	//-----------------------------------------------------------------------------------------------------------=

	////-----------------------------------------------------------------------------------------------------------=
	//symbol (pPrice,pSymbol)
	//{
	//	if (!_meta)	return "";
	//	return gHome._FracText (pPrice,pSymbol);
	//}
	////-----------------------------------------------------------------------------------------------------------=

}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
function onOpen (pMeta)
{
	if (!gFeed)	return;
	gFeed.onOpen (pMeta);
}
//-----------------------------------------------------------------------------------------------------------=

//----------------------------------------------------------------  -------------------------------------------=
function onLoad ()
{
	if (!gFeed)	return;
	gFeed.onLoad ();
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
function onEvent (pSymbol,pEvent,pRealTime)
{
	if (!gFeed)	return;
	gFeed.onEvent (pSymbol,pEvent,pRealTime);
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
function onRender ()
{
	if (!gFeed)	return;
	gFeed.onRender ();
}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
function onStop ()
{
	if (!gFeed)	return;
	gFeed.onStop ();
}
//-----------------------------------------------------------------------------------------------------------=

////-----------------------------------------------------------------------------------------------------------=
//const	kPageNone	=	0;
//const	kPageOpen	=	1;
//const	kPageLoad	=	2;
//const	kPageTick	=	3;
////-----------------------------------------------------------------------------------------------------------=
//
////-----------------------------------------------------------------------------------------------------------=
//function _pagetask (pTask,pData)
//{
//	switch (pTask)	{
//		case	kPageOpen	:
//			gFeed.onOpen();
//			break;
//		case	kPageLoad	:
//			gFeed.onLoad();
//			break;
//		}
//
//}
////-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
window.onerror = function (msg, url, lineNo, columnNo, error) {
	var string = msg.toLowerCase();
	var substring = "script error";
	if (string.indexOf(substring) > -1){
		gHome._pageerro (gUniq,'Script Error: See Browser Console for Detail');
		}
	else {
		//var message = [
		//	'Message: ' + msg,
		//	'URL: ' + url,
		//	'Line: ' + lineNo,
		//	'Column: ' + columnNo,
		//	'Error object: ' + JSON.stringify(error)
		//].join(' - ');

		var message = [
			'Message: ' + msg,
			'Line: ' + lineNo,
			'Column: ' + columnNo
		].join(' - ');

		gHome._pageerro (gUniq,message);
		}
	}
//-----------------------------------------------------------------------------------------------------------=

//-----------------------------------------------------------------------------------------------------------=
window.onfocus= function() {
	gHome._pagesele (gUniq);
};
//-----------------------------------------------------------------------------------------------------------=

/**
 * Class used for referencing any individual Event from the current feed
 */
var please = {
	/**
	 * @typedef {object} Header
	 * @property {number} unionID Enumerated value used to find the type of an Event object
	 * @property {number} sequence The current Event object's session array index
	 * @property {number} time The exact time of the current Event in nanoseconds as a BigInt
	 * @property {number} timeH The higher half of the aforementioned time member as a Number
	 * @property {number} timeL The lower half of the aforementioned time member as a Number
	 * @property {number} milliseconds The aforementioned time member in milliseconds as a Number
	 */
	/**
	 * Each Event’s header object provides access to general Event information and is accessed using:
	 *  - <EventName>.header.<memberName>
	 * @type {Header}
	 * @example
	 * onEvent(pSymbol, pEvent, pRealTime) {
	 *     switch (pEvent.header.unionID) {
	 *         case v9.UnionID.TradeSummary:
	 *             var fTime = new Date(pEvent.header.milliseconds).toLocalTimeString(); //Formats the date and time based off of the current Event's time in milliseconds
	 *             break;
	 *         default :
	 *             break;
	 *     }
	 * }
	 */
	header:
	{
		unionID: 255,
		sequence: 0, //Each event within a feed has an assigned sequence value that
		time: 0,
		timeH: 0,
		timeL: 0,
		milliseconds: 0
	},

	/**
	 * @typedef {enumeration} TradeSummary
	 * @property {number} price The price of the current Event
	 * @property {number} quantity The total quantity matched for the the current Event
	 * @property {number} matches The number of upcoming orders that will participate in the current Event
	 * @property {Aggressor} aggressor The aggressor of the trade the current Event is summarizing
	 * @property {boolean} isImplied Whether or not the trade the current Event is summarizing was implied
	 * @property {number} isSnapshot Whether or not the current Event is a market summary
	 * @property {number} volume The accumulated volume of the current session
	 */
	/**
	 * Each tradeSummary Event object is accessed using:
	 *  - <EventName>.header.tradeSummary
	 * @type {TradeSummary}
	 */
	tradeSummary: {
		price: 0,
		quantity: 0,
		matches: 0,
		aggressor: 0,
		isImplied: false,
		isSnapshot: false,
		volume: 0
	},

	/**
	 * @typedef {object} TradeMatch
	 * @property {number} price The price of the current Event
	 * @property {number} quantity The total quantity matched for the current Event
	 * @property {number} number The enumerated value from 0 to number of TradeSummary.matches
	 * @property {boolean} isAggressor Whether or not the current Event was made by the aggressor of the trade.
	 * @property {number} orderID The identifier for the current Event’s order
	 * @property {number} auxilaryID The original identifier for the current Event’s order.
	 * @property {number} flags These bits are exchange specific. If you don’t know which exchange this file came from, the exchange for this instrId is located in the Instrument Information message.
	 */
	/**
	 * Each tradeMatch Event object is accessed using:
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
	 * @typedef {object} VolumeUpdate
	 * @property {number} volume The total volume for the session including the current Event
	 * @property {number} vwap An ICE-specific stat metric
	 */
	/**
	 * Each volumeUpdate Event object is accessed using:
	 *  - <EventName>.header.volumeUpdate
	 * @type {VolumeUpdate}
	 * */
	volumeUpdate: {
		volume: 0,
		vwap: 0
	},

	/**
	 * @typedef {object} BookLevel
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
	 * Each bookLevel Event object is accessed using:
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
	 * @typedef {object} OrderBook
	 * @property {number} price The price of the current Event
	 * @property {BookType} type The type of the current Event
	 * @property {number} quantity The total quantity matched for the current Event
	 * @property {number} priorityID The order priority for execution on the current order book : Lower = higher priority
	 * @property {boolean} auxilaryID The first OrderID assigned because some exchanges change the orderID : Only ICE and Eurex Exchanges
	 * @property {number} previousID If an orderID is changed, this is the ID that was just replaced : Eurex
	 * @property {number} orderID The identifier for the current Event's order
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 */
	/**
	 * Each orderBook Event object is accessed using:
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
		action: 255
	},

	/**
	 * @typedef {object} SecurityStatus
	 * @property {number} group The exchange specific code assigned to a group of related securities, which are concurrently affected by market events
	 * @property {BookType} asset The underlying asset code represented as a String
	 * @property {number} sessionDate The date of the current Event's trading session
	 * @property {number} type The total implied quantity at the current event's price level
	 * @property {HaltReason} haltReason The reason why the market has been halted
	 * @property {SecurityEvent} securityEvent Additional reasoning for the market being halted
	 */
	/**
	 * Each securityStatus Event object is accessed using:
	 *  - <EventName>.header.securityStatus
	 * @type {SecurityStatus}
	 */
	securityStatus: {
		group: "",
		asset: "",
		sessionDate: 0,
		type: 0,
		haltReason: 255,
		securityEvent: 0
	},

	/**
	 * @typedef {object} DailyStatistics
	 * @property {number} price The price of the current Event
	 * @property {number} instrumentID The unique instrument identifier for the current exchange
	 * @property {number} impliedQuantity The total number of Events in the current session : Only applies to OpenInterest type
	 * @property {number} impliedOrders The total number of implied orders at the current event's price level
	 * @property {number} level The price level at which the event occurred
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 * @property {DailyStatisticsType} type The type of the current Event
	 * @property {SettleType} settleType The settlement type of the current Event
	 * @property {boolean} isEndEvent Whether or not the current Event is the last Event of the packet
	 */
	/**
	 * Each dailyStatistics Event object is accessed using:
	 *  - <EventName>.header.dailyStatistics
	 * @type {DailyStatistics}
	 */
	dailyStatistics: {
		price: 0,
		instrumentID: 0,
		size: 0,
		impliedQuantity: 0,
		impliedOrders: 0,
		level: 0,
		action: 255,
		type: 0, // waiting for Ed
		settleType: 0,
		isEndEvent: false
	},

	/**
	 * @typedef {object} SessionStatistics
	 * @property {number} price The price of the current Event
	 * @property {number} instrumentID The unique instrument identifier for the current exchange
	 * @property {StateType} stateType The OpeningPrice type of the current Event
	 * @property {BookAction} action The book action of the order corresponding to the current event
	 * @property {SessionStatisticsType} type The type of the current Event
	 * @property {number} size The total number of Events in the current session
	 */
	/**
	 * Each sessionStatistics Event object is accessed using:
	 *  - <EventName>.header.sessionStatistics
	 * @type {SessionStatistics}
	 */
	sessionStatistics: {
		price: 0,
		instrumentID: 0,
		stateType: 255,
		action: 255,
		type: 127,
		size: 0
	},

	/**
	 * @typedef {object} LimitsBanding
	 * @property {number} highLimit The lowest price level the contract can trade in this session
	 * @property {number} lowLimit The highest price level the contract can trade in this session
	 * @property {number} maxVariation The maximum tradeable range for this session
	 */
	/**
	 * Each limitsBanding Event object is accessed using:
	 *  - <EventName>.header.limitsBanding
	 * @type {LimitsBanding}
	 */
	limitsBanding: {
		highLimit: 0,
		lowLimit: 0,
		maxVariation: 0
	},

	/**
	 * @typedef {object} ChannelReset
	 * @property {BookType} type The type of the current Event
	 */
	/**
	 * Each channelReset Event object is accessed using:
	 *  - <EventName>.header.channelReset
	 * @type {ChannelReset}
	 * */
	channelReset: {
		type: 85
	},

	/**
	 * @typedef {object} TransactionMarker
	 * @property {TransactionType} type The type of the current Event
	 */
	/**
	 * Each transactionMarker Event object is accessed using:
	 *  - <EventName>.header.transactionMarker
	 * @type {TransactionMarker}
	 * @return
	 */
	transactionMarker: {
		type: 255
	},
};
`,
	'myDefault:some.file.d.ts'
);
