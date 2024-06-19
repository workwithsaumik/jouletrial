using { S4HANA_Joule_Product } from './external/S4HANA_Joule_Product.cds';

using { customer_loyal_ge097849 as my } from '../db/schema.cds';

@path : '/service/customer_loyal_ge097849'
service customer_loyal_ge097849Srv
{
    @odata.draft.enabled
    entity Customers as
        projection on my.Customers;

    @odata.draft.enabled
    entity Purchases as
        projection on my.Purchases;

    @odata.draft.enabled
    entity Redemptions as
        projection on my.Redemptions;

    entity A_ProductBasicText as
        projection on S4HANA_Joule_Product.A_ProductBasicText;
}

annotate customer_loyal_ge097849Srv with @requires :
[
    'authenticated-user'
];
