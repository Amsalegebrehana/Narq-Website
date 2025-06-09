interface User {
    id: string;
    employee_uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile_number: string;
    last_4_digit_ssn: string;
    organization: string[];
    title: string;
    date_of_birth: Date;
    address: string;
    hire_date: Date;
    employment_type: number;
    data_source: string;
    serving_notice_period: Object;
    flagged: boolean;
}