/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_loyal_ge097849Srv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Customers, Purchases } = cds.entities;
    
    // Calculate reward points
    const rewardPoints = Math.floor(request.data.purchaseValue / 10);
    request.data.rewardPoints = rewardPoints;

    // Get the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: request.data.customer_ID });

    // Check if the customer is not undefined
    if (customer !== undefined) {
        // Update total purchase value and total reward points of the customer
        const totalPurchaseValue = customer.totalPurchaseValue + request.data.purchaseValue;
        const totalRewardPoints = customer.totalRewardPoints + rewardPoints;

        await UPDATE(Customers)
            .set({ totalPurchaseValue: totalPurchaseValue, totalRewardPoints: totalRewardPoints })
            .where({ ID: request.data.customer_ID });
    }
}