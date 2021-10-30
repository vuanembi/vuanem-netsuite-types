import LeadSource from './leadSource';
import Employee from './employee';

export type CustomerSearch = {
  phone: string;
}

export type Customer = {
  leadsource: LeadSource;
  custentity_employee_record_reference: Employee;
  firstname: string;
  lastname: string;
  phone: string;
};
