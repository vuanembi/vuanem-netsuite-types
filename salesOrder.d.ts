import Location from 'vuanem-netsuite-types/location';
import Custbody5 from 'vuanem-netsuite-types/custbody5';
import OrderPaymentMethod from 'vuanem-netsuite-types/orderPaymentMethod';
import LeadSource from 'vuanem-netsuite-types/leadSource';
import CustbodyExpectedShippingMethod from 'vuanem-netsuite-types/custbodyExpectedShippingMethod';
import CustbodyExpectedDeliveryTime from 'vuanem-netsuite-types/custbodyExpectedDeliveryTime';
import Employee from 'vuanem-netsuite-types/employee';
import Partner from 'vuanem-netsuite-types/partner';

// YYYY-MM-DD
type ISODate = string;

// Vietnam
type Country = 238;

// HNI
type Subsidiary = 1;

export type SalesOrderSearch = {
  id: number;
}

export type SalesOrder = {
  // * Customer Information
  entity: number;
  custbody_customer_phone: string;

  // * Shipping Information
  custbody_exepected_shipping_method: CustbodyExpectedShippingMethod;
  shipdate: ISODate;
  custbody_expecteddeliverytime: CustbodyExpectedDeliveryTime;
  custbody_recipient: string;
  custbody_recipient_phone: string;
  shippingaddress: {
    addressee: string;
    country: Country;
  };

  // * Order Infomartion
  custbody_order_payment_method: OrderPaymentMethod;
  trandate: ISODate;
  salesrep: Employee;
  leadsource: LeadSource;
  custbody5: Custbody5;
  partner: Partner;

  // * Store Information
  subsidiary: Subsidiary;
  location: Location;

  // * Items
  item: [
    {
      item: number;
      quantity: number;
    },
  ];

  // * Promotions
  promotions: [
    {
      promocode: number;
      couponcode: string;
    },
  ];
};
