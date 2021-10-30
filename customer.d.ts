import LeadSource from 'vuanem-netsuite-types/leadSource';
import Employee from 'vuanem-netsuite-types/employee';

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
