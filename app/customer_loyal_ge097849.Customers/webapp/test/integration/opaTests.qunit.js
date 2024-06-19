sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyalge097849/Customers/test/integration/FirstJourney',
		'customerloyalge097849/Customers/test/integration/pages/CustomersList',
		'customerloyalge097849/Customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyalge097849/Customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);