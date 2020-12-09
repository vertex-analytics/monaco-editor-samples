const model = monaco.editor.createModel(
`var gConsole;

//Append ".onOpen" or ".onEvent" and then add an open parentheses below to see oddity with feed function intellisense
v9.feed

class MyFeed extends v9.feed {
//     onInit ()
//     {
// \t\t
//     }

//     onOpen (pMeta)
//     {
//\t\t
//     }

//     onRender()
//     {
// \t\t
//     }

//     onTrigger(pOrder, pType)
//     {
// \t\t
//     }

//     onEvent (pSymbol,pEvent,pRealTime)
//     {
//         if (pEvent.header.isSnapshot) return;
//         switch (pEvent.header.unionID) {
//             case v9.UnionID.TradeSummary:
//                 if (this.fTickSequ < 5) {
//                     gConsole.print ("TRD",pEvent.tradeSummary.price,pEvent.tradeSummary.quantity);
// 				}
//                 this.fTickSequ++;
//                 break;
//             default :
//                 break;
// 		}
//     }

//     onShut ()
//     {
// \t\t
//     }

//     onExit ()
//     {
// \t\t
// 	}
}

gConsole = new v9.console();

let request = {
    symbol:'ES',
    startDate:'20200902',
    endDate:'20200909',
    weekends: false
};

let feed = new MyFeed(request);
`,
 'javascript'
);
