/* tslint:disable */
/* eslint-disable */
/**
 * MyBank API
 * This Swagger document provides a comprehensive overview of the online banking application's API, including the available endpoints, authentication mechanisms, data models, and error handling. Developers can use this documentation to integrate the banking application with their own systems and client applications, ensuring a seamless and secure user experience.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { LoanAccountStatus } from './loan-account-status';
import { LoanType } from './loan-type';
 /**
 * 
 *
 * @export
 * @interface CreateLoanDto
 */
export interface CreateLoanDto {

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 82cba0c1-00d7-46ca-904a-6558fe953cee
     */
    userID: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example a7c94318-3caf-4dcd-985e-a9f0320abc77
     */
    bankID: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 1234123412341234
     */
    accountNumber: string;

    /**
     * @type {LoanType}
     * @memberof CreateLoanDto
     */
    loanType: LoanType;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 3972000
     */
    loanAmount: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 9.3
     */
    interestRate: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 360
     */
    loanTerm: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 2024-07-10T06:52:41.153Z
     */
    loanStartDate: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 2024-07-10T06:52:41.153Z
     */
    loanEndDate: string;

    /**
     * @type {string}
     * @memberof CreateLoanDto
     * @example 360
     */
    remainingTenure: string;

    /**
     * @type {LoanAccountStatus}
     * @memberof CreateLoanDto
     */
    loanStatus: LoanAccountStatus;

    /**
     * @type {Date}
     * @memberof CreateLoanDto
     * @example 2024-07-10T06:52:41.154Z
     */
    createdAt?: Date;

    /**
     * @type {Date}
     * @memberof CreateLoanDto
     * @example 2024-07-10T06:52:41.154Z
     */
    updatedAt?: Date;
}
