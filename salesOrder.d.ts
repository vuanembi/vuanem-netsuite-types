/* eslint-disable camelcase */
import type * as Location from './location';
import type Custbody5 from './custbody5';
import type * as OrderPaymentMethod from './orderPaymentMethod';
import type LeadSource from './leadSource';
import type CustbodyExpectedShippingMethod from './custbodyExpectedShippingMethod';
import type CustbodyExpectedDeliveryTime from './custbodyExpectedDeliveryTime';
import type Employee from './employee';
import type Partner from './partner';
import type { RestletRes } from './record';

// YYYY-MM-DD
type ISODate = string;

// Vietnam
type Country = 238;

// HNI
type Subsidiary = 1;

export type SalesOrderSearch = {
  id: number;
};

export type SalesOrderRecord = {
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
  custbody_order_payment_method: OrderPaymentMethod.OrderPaymentMethod;
  trandate: ISODate;
  salesrep: Employee;
  leadsource: LeadSource;
  custbody5: Custbody5;
  partner: Partner;
  memo: string;

  // * Store Information
  subsidiary: Subsidiary;
  location: Location.Location;

  // * Items
  item: SalesOrderItem[];

  // * Promotions
  // promotions: {
  //   promocode: number;
  //   couponcode: string;
  // }[];
};

export type SalesOrderItem = {
  item: number;
  quantity: number;
};

export type SalesOrderRes = RestletRes;
