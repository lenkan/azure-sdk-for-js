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
import * as Mappers from "../models/connectionsMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a Connections. */
export class Connections {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a Connections.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of connections.
   * @summary Get Connections
   * @param resourceGroupName Resource Group Name
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsListResponse>
   */
  list(resourceGroupName: string, options?: Models.ConnectionsListOptionalParams): Promise<Models.ConnectionsListResponse>;
  /**
   * @param resourceGroupName Resource Group Name
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ConnectionCollection>): void;
  /**
   * @param resourceGroupName Resource Group Name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: Models.ConnectionsListOptionalParams, callback: msRest.ServiceCallback<Models.ConnectionCollection>): void;
  list(resourceGroupName: string, options?: Models.ConnectionsListOptionalParams | msRest.ServiceCallback<Models.ConnectionCollection>, callback?: msRest.ServiceCallback<Models.ConnectionCollection>): Promise<Models.ConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ConnectionsListResponse>;
  }

  /**
   * Gets a connection.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsGetResponse>
   */
  get(resourceGroupName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param callback The callback
   */
  get(resourceGroupName: string, connectionName: string, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  get(resourceGroupName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Connection>, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConnectionsGetResponse>;
  }

  /**
   * Creates or updates a connection.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param connection The connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, connectionName: string, connection: Models.Connection, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param connection The connection.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, connectionName: string, connection: Models.Connection, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param connection The connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, connectionName: string, connection: Models.Connection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  createOrUpdate(resourceGroupName: string, connectionName: string, connection: Models.Connection, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Connection>, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        connection,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a connection.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, connectionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists consent links of a connection.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsListConsentLinksResponse>
   */
  listConsentLinks(resourceGroupName: string, connectionName: string, content: Models.ConsentLinkInput, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsListConsentLinksResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param callback The callback
   */
  listConsentLinks(resourceGroupName: string, connectionName: string, content: Models.ConsentLinkInput, callback: msRest.ServiceCallback<Models.ConsentLinkPayload>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param options The optional parameters
   * @param callback The callback
   */
  listConsentLinks(resourceGroupName: string, connectionName: string, content: Models.ConsentLinkInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsentLinkPayload>): void;
  listConsentLinks(resourceGroupName: string, connectionName: string, content: Models.ConsentLinkInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsentLinkPayload>, callback?: msRest.ServiceCallback<Models.ConsentLinkPayload>): Promise<Models.ConnectionsListConsentLinksResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        content,
        options
      },
      listConsentLinksOperationSpec,
      callback) as Promise<Models.ConnectionsListConsentLinksResponse>;
  }

  /**
   * Confirms consent code of a connection.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsConfirmConsentCodeResponse>
   */
  confirmConsentCode(resourceGroupName: string, connectionName: string, content: Models.ConfirmConsentCodeInput, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsConfirmConsentCodeResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param callback The callback
   */
  confirmConsentCode(resourceGroupName: string, connectionName: string, content: Models.ConfirmConsentCodeInput, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param options The optional parameters
   * @param callback The callback
   */
  confirmConsentCode(resourceGroupName: string, connectionName: string, content: Models.ConfirmConsentCodeInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  confirmConsentCode(resourceGroupName: string, connectionName: string, content: Models.ConfirmConsentCodeInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Connection>, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionsConfirmConsentCodeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        content,
        options
      },
      confirmConsentCodeOperationSpec,
      callback) as Promise<Models.ConnectionsConfirmConsentCodeResponse>;
  }

  /**
   * Lists connection keys.
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsListConnectionKeysResponse>
   */
  listConnectionKeys(resourceGroupName: string, connectionName: string, content: Models.ListConnectionKeysInput, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsListConnectionKeysResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param callback The callback
   */
  listConnectionKeys(resourceGroupName: string, connectionName: string, content: Models.ListConnectionKeysInput, callback: msRest.ServiceCallback<Models.ConnectionSecrets>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param connectionName The connection name.
   * @param content The content.
   * @param options The optional parameters
   * @param callback The callback
   */
  listConnectionKeys(resourceGroupName: string, connectionName: string, content: Models.ListConnectionKeysInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionSecrets>): void;
  listConnectionKeys(resourceGroupName: string, connectionName: string, content: Models.ListConnectionKeysInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectionSecrets>, callback?: msRest.ServiceCallback<Models.ConnectionSecrets>): Promise<Models.ConnectionsListConnectionKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectionName,
        content,
        options
      },
      listConnectionKeysOperationSpec,
      callback) as Promise<Models.ConnectionsListConnectionKeysResponse>;
  }

  /**
   * Gets a list of connections.
   * @summary Get Connections
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConnectionCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectionCollection>, callback?: msRest.ServiceCallback<Models.ConnectionCollection>): Promise<Models.ConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ConnectionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "connection",
    mapper: {
      ...Mappers.Connection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    201: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listConsentLinksOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/listConsentLinks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "content",
    mapper: {
      ...Mappers.ConsentLinkInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConsentLinkPayload
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const confirmConsentCodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/confirmConsentCode",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "content",
    mapper: {
      ...Mappers.ConfirmConsentCodeInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listConnectionKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/listConnectionKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "content",
    mapper: {
      ...Mappers.ListConnectionKeysInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSecrets
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};