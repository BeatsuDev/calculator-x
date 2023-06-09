import globalAxios from 'axios';
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, BaseAPI } from '../base';
import type { RequestArgs, RequiredError } from '../base';
import type { Calculation } from '../models';
import type { CalculationTask } from '../models';
/**
 * CalculationApi - axios parameter creator
 * @export
 */
export const CalculationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a calculation
         * @param {CalculationTask} [body] Calculation object to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCalculation: async (body?: CalculationTask, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/calculation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers!['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all calculations for the current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCalculations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/calculation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CalculationApi - functional programming interface
 * @export
 */
export const CalculationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a calculation
         * @param {CalculationTask} [body] Calculation object to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCalculation(body?: CalculationTask, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Calculation>>> {
            const localVarAxiosArgs = await CalculationApiAxiosParamCreator(configuration).createCalculation(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get all calculations for the current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCalculations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CalculationApiAxiosParamCreator(configuration).getCalculations(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CalculationApi - factory interface
 * @export
 */
export const CalculationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create a calculation
         * @param {CalculationTask} [body] Calculation object to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCalculation(body?: CalculationTask, options?: AxiosRequestConfig): Promise<AxiosResponse<Calculation>> {
            return CalculationApiFp(configuration).createCalculation(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all calculations for the current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCalculations(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CalculationApiFp(configuration).getCalculations(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CalculationApi - object-oriented interface
 * @export
 * @class CalculationApi
 * @extends {BaseAPI}
 */
export class CalculationApi extends BaseAPI {
    /**
     * 
     * @summary Create a calculation
     * @param {CalculationTask} [body] Calculation object to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalculationApi
     */
    public async createCalculation(body?: CalculationTask, options?: AxiosRequestConfig) : Promise<AxiosResponse<Calculation>> {
        return CalculationApiFp(this.configuration).createCalculation(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get all calculations for the current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalculationApi
     */
    public async getCalculations(options?: AxiosRequestConfig) : Promise<AxiosResponse<Calculation[]>> {
        return CalculationApiFp(this.configuration).getCalculations(options).then((request) => request(this.axios, this.basePath));
    }
}
