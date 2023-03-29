/* tslint:disable */
/* eslint-disable */
/**
 * Calculator Swagger Specification
 * A simple calculator API.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from "../base";
import { User } from "../models";
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Log in or create a user
     * @param {User} [body] User object to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: async (body?: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/user`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     * Logs out the current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logoutUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/user/logout`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Log in or create a user
     * @param {User} [body] User object to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUser(
      body?: User,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUser(
        body,
        options
      );
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Logs out the current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async logoutUser(
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).logoutUser(options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Log in or create a user
     * @param {User} [body] User object to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUser(body?: User, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
      return UserApiFp(configuration)
        .createUser(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Logs out the current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async logoutUser(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
      return UserApiFp(configuration)
        .logoutUser(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   *
   * @summary Log in or create a user
   * @param {User} [body] User object to create
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public async createUser(body?: User, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
    return UserApiFp(this.configuration)
      .createUser(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Logs out the current logged in user session
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public async logoutUser(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
    return UserApiFp(this.configuration)
      .logoutUser(options)
      .then((request) => request(this.axios, this.basePath));
  }
}