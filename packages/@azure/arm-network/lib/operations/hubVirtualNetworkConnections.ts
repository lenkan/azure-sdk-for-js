/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/hubVirtualNetworkConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a HubVirtualNetworkConnections. */
export class HubVirtualNetworkConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a HubVirtualNetworkConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a HubVirtualNetworkConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsGetResponse>
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, callback: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): void;
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): Promise<Models.HubVirtualNetworkConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsGetResponse>;
  }

  /**
   * Retrieves the details of all HubVirtualNetworkConnections.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsListResponse>
   */
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsListResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): Promise<Models.HubVirtualNetworkConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsListResponse>;
  }

  /**
   * Retrieves the details of all HubVirtualNetworkConnections.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): Promise<Models.HubVirtualNetworkConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubVirtualNetworkConnection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListHubVirtualNetworkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
      bodyMapper: Mappers.ListHubVirtualNetworkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
