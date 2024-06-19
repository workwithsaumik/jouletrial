/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_loyal_ge097849Srv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;
    const { redeemedAmount, customer } = request.data;

    // Fetch the related customer
    const relatedCustomer = await SELECT.one.from(Customers).where({ ID: customer });

    // Check if the related customer exists
    if (!relatedCustomer) {
        request.error(400, `Customer with ID ${customer} does not exist.`);
        return;
    }

    // Check if the customer has enough reward points
    if (relatedCustomer.totalRewardPoints < redeemedAmount) {
        request.error(400, `Customer with ID ${customer} does not have enough reward points.`);
        return;
    }

    // Deduct the redemption amount from 'totalRewardPoints' and add it to 'totalRedeemedRewardPoints'
    relatedCustomer.totalRewardPoints -= redeemedAmount;
    relatedCustomer.totalRedeemedRewardPoints += redeemedAmount;

    // Update the related customer
    await UPDATE(Customers).set(relatedCustomer).where({ ID: customer });
}