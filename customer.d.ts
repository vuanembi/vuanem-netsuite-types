/* eslint-disable camelcase */
import LeadSource from './leadSource';
import Employee from './employee';
import { RestletRes } from './record';

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

export type CustomerRes = RestletRes & {
  fields: {
    firstname: string;
    lastname: string;
    phone: string;
  };
};
