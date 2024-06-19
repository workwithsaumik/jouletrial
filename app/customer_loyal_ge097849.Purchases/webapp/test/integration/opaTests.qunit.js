sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyalge097849/Purchases/test/integration/FirstJourney',
		'customerloyalge097849/Purchases/test/integration/pages/PurchasesList',
		'customerloyalge097849/Purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyalge097849/Purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);