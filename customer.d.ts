/* eslint-disable camelcase */
import LeadSource from './leadSource';
import Employee from './employee';

export type CustomerSearchReq = {
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
  fields: {
    firstname: string;
    lastname: string;
    phone: string;
  };
};

export type CustomerSearchRes = {
  id: string;
};
