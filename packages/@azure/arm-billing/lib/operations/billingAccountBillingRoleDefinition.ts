/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/billingAccountBillingRoleDefinitionMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingAccountBillingRoleDefinition. */
export class BillingAccountBillingRoleDefinition {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingAccountBillingRoleDefinition.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the role definition for a role
   * @param billingAccountName billing Account Id.
   * @param billingRoleDefinitionName role definition id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountBillingRoleDefinitionGetResponse>
   */
  get(billingAccountName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountBillingRoleDefinitionGetResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingRoleDefinitionName role definition id.
   * @param callback The callback
   */
  get(billingAccountName: string, billingRoleDefinitionName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingRoleDefinitionName role definition id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, billingRoleDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinition>): void;
  get(billingAccountName: string, billingRoleDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinition>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinition>): Promise<Models.BillingAccountBillingRoleDefinitionGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingRoleDefinitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BillingAccountBillingRoleDefinitionGetResponse>;
  }

  /**
   * Lists the role definition for a billing account
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountBillingRoleDefinitionListResponse>
   */
  list(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountBillingRoleDefinitionListResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  list(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): void;
  list(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>, callback?: msRest.ServiceCallback<Models.BillingRoleDefinitionListResult>): Promise<Models.BillingAccountBillingRoleDefinitionListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BillingAccountBillingRoleDefinitionListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleDefinitions/{billingRoleDefinitionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingRoleDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleDefinitions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};