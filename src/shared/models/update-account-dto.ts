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

import { AccoutStatus } from './accout-status';
import { Currency } from './currency';
/**
 *
 *
 * @export
 * @interface UpdateAccountDto
 */
export interface UpdateAccountDto {
  /**
   * @type {string}
   * @memberof UpdateAccountDto
   * @example b8fb4b35-0843-44f3-a5c9-d18a40bcfa62
   */
  accountID: string;

  /**
   * @type {string}
   * @memberof UpdateAccountDto
   * @example ae7a58cd-4696-4984-a954-f34b1a8af470
   */
  userID: string;

  /**
   * @type {string}
   * @memberof UpdateAccountDto
   * @example fa24327f-d930-4ecf-b024-3ce8527b2e3d
   */
  bankID: string;

  /**
   * @type {string}
   * @memberof UpdateAccountDto
   * @example 1234098776541234
   */
  accountNumber: string;

  /**
   * @type {number}
   * @memberof UpdateAccountDto
   * @example 1000
   */
  balance: number;

  /**
   * @type {Currency}
   * @memberof UpdateAccountDto
   */
  currency: Currency;

  /**
   * @type {AccoutStatus}
   * @memberof UpdateAccountDto
   */
  status: AccoutStatus;

  /**
   * @type {Date}
   * @memberof UpdateAccountDto
   * @example 2024-07-10T06:52:41.054Z
   */
  createdAt: Date;

  /**
   * @type {Date}
   * @memberof UpdateAccountDto
   * @example 2024-07-10T06:52:41.054Z
   */
  updatedAt: Date;
}
