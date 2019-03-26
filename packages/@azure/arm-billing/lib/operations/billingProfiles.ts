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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/billingProfilesMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingProfiles. */
export class BillingProfiles {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingProfiles.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the billing profile by id.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingProfilesGetResponse>
   */
  get(billingAccountName: string, billingProfileName: string, options?: Models.BillingProfilesGetOptionalParams): Promise<Models.BillingProfilesGetResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingProfile>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, options: Models.BillingProfilesGetOptionalParams, callback: msRest.ServiceCallback<Models.BillingProfile>): void;
  get(billingAccountName: string, billingProfileName: string, options?: Models.BillingProfilesGetOptionalParams | msRest.ServiceCallback<Models.BillingProfile>, callback?: msRest.ServiceCallback<Models.BillingProfile>): Promise<Models.BillingProfilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BillingProfilesGetResponse>;
  }

  /**
   * The operation to update a billing profile.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param parameters Parameters supplied to the update billing profile operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingProfilesUpdateResponse>
   */
  update(billingAccountName: string, billingProfileName: string, parameters: Models.BillingProfile, options?: msRest.RequestOptionsBase): Promise<Models.BillingProfilesUpdateResponse> {
    return this.beginUpdate(billingAccountName,billingProfileName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BillingProfilesUpdateResponse>;
  }

  /**
   * The operation to update a billing profile.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param parameters Parameters supplied to the update billing profile operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(billingAccountName: string, billingProfileName: string, parameters: Models.BillingProfile, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        billingProfileName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BillingProfile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfile,
      headersMapper: Mappers.BillingProfilesUpdateHeaders
    },
    202: {
      headersMapper: Mappers.BillingProfilesUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};