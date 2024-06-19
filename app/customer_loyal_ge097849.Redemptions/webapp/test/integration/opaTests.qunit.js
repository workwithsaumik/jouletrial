sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyalge097849/Redemptions/test/integration/FirstJourney',
		'customerloyalge097849/Redemptions/test/integration/pages/RedemptionsList',
		'customerloyalge097849/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyalge097849/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);