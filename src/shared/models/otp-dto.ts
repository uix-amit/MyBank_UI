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
 * @interface OtpDto
 */
export interface OtpDto {

    /**
     * @type {number}
     * @memberof OtpDto
     * @example 123456
     */
    otp: number;

    /**
     * @type {string}
     * @memberof OtpDto
     * @example clyer1smc0000z0elhfljexma
     */
    id: string;
}
