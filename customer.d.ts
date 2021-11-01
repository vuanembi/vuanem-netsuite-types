/* eslint-disable camelcase */
import LeadSource from './leadSource';
import Employee from './employee';

export type CustomerSearch = {
  phone: string;
};

export type CustomerRecord = {
  leadsource: LeadSource;
  custentity_employee_record_reference: Employee;
  firstname: string;
  lastname: string;
  phone: string;
};

export type CustomerRes = {
  id: string;
  recordType: 'customer';
  values: {
    entityId: string;
    phone: string;
  };
};

export type CustomerSearchResult = {
  id: string,
}
