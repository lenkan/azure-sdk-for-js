/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Returns whether or not Serial Console is disabled.
 * @summary Serial Console GET Result
 */
export interface SerialConsoleGetResult {
  /**
   * Whether or not Serial Console is disabled.
   */
  value?: boolean;
}

/**
 * Returns whether or not Serial Console is disabled for this given subscription
 * @summary Get Disabled result
 */
export interface GetDisabledResult {
  /**
   * Disabled result
   */
  disabled?: boolean;
}

/**
 * Sets disable status and returns whether or not Serial Console is now disabled for this given
 * subscription
 * @summary Set Disabled result
 */
export interface SetDisabledResult {
  /**
   * Disabled result
   */
  disabled?: boolean;
}

/**
 * Details on Failure
 * @summary Details on Failure
 */
export interface DeploymentValidateResult {
  /**
   * Error message
   */
  errorMessage?: string;
}

/**
 * Serial Console operations
 * @summary Serial Console operations
 */
export interface SerialConsoleOperations {
  /**
   * Serial Console operations
   */
  value?: string;
}

/**
 * An interface representing MicrosoftSerialConsoleClientOptions.
 */
export interface MicrosoftSerialConsoleClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the operations operation.
 */
export type ListOperationsResponse = SerialConsoleOperations & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SerialConsoleOperations;
    };
};

/**
 * Contains response data for the disabled operation.
 */
export type ListConsoleDisabledResponse = GetDisabledResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GetDisabledResult;
    };
};

/**
 * Contains response data for the enableConsole operation.
 */
export type ConsoleEnableConsoleResponse = SetDisabledResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SetDisabledResult;
    };
};

/**
 * Contains response data for the disableConsole operation.
 */
export type ConsoleDisableConsoleResponse = SetDisabledResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SetDisabledResult;
    };
};
