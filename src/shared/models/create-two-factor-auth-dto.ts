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

 /**
 * 
 *
 * @export
 * @interface CreateTwoFactorAuthDto
 */
export interface CreateTwoFactorAuthDto {

    /**
     * @type {string}
     * @memberof CreateTwoFactorAuthDto
     * @example 82158c84-38b9-47e9-9722-3f8e26f9ae42
     */
    userID: string;

    /**
     * @type {number}
     * @memberof CreateTwoFactorAuthDto
     * @example 123123
     */
    otp: number;

    /**
     * @type {Date}
     * @memberof CreateTwoFactorAuthDto
     * @example 2024-07-10T06:52:41.149Z
     */
    createdAt?: Date;
}
