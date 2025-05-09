/**
 * serving
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/member-ordering */

import {HTTP} from '~/app.constants';
import {SmApiRequestsService} from './api-requests.service';

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';
import { ApiOptions }                        from './api';

import { Observable }                                        from 'rxjs';

import { ServingContainerStatusReportRequest } from '../model/serving/servingContainerStatusReportRequest';
import { ServingGetEndpointDetailsRequest } from '../model/serving/servingGetEndpointDetailsRequest';
import { ServingGetEndpointDetailsResponse } from '../model/serving/servingGetEndpointDetailsResponse';
import { ServingGetEndpointsResponse } from '../model/serving/servingGetEndpointsResponse';
import { ServingRegisterContainerRequest } from '../model/serving/servingRegisterContainerRequest';
import { ServingUnregisterContainerRequest } from '../model/serving/servingUnregisterContainerRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {ServingGetLoadingInstancesResponse} from '~/business-logic/model/serving/servingGetLoadingInstancesResponse';
import {ServingGetEndpointMetricsHistoryRequest} from '~/business-logic/model/serving/servingGetEndpointMetricsHistoryRequest';
import {ServingGetEndpointMetricsHistoryResponse} from '~/business-logic/model/serving/servingGetEndpointMetricsHistoryResponse';


@Injectable()
export class ApiServingService {

    protected basePath = HTTP.API_BASE_URL;
    public defaultHeaders = new HttpHeaders({'Accept': 'application/json'});
    public configuration = new Configuration();

    constructor(protected apiRequest: SmApiRequestsService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }



    /**
     * Container status report
     * @param request request body
     * @param options flags and headers to use in webapp
     */
    public servingContainerStatusReport(request: ServingContainerStatusReportRequest, options?: ApiOptions): Observable<any> {
        return this.apiRequest.post<object>(`${this.basePath}/serving.container_status_report`,
            request,
            {
                headers: this.defaultHeaders,
                withCredentials: this.configuration.withCredentials
            },
            options
        );
    }

    /**
     * Get endpoint details
     * @param request request body
     * @param options flags and headers to use in webapp
     */
    public servingGetEndpointDetails(request: ServingGetEndpointDetailsRequest, options?: ApiOptions): Observable<any> {
        return this.apiRequest.post<ServingGetEndpointDetailsResponse>(`${this.basePath}/serving.get_endpoint_details`,
            request,
            {
                headers: this.defaultHeaders,
                withCredentials: this.configuration.withCredentials
            },
            options
        );
    }

  /**
   * Get endpoint charts
   * @param request request body
   * @param options flags and headers to use in webapp
   */
  public servingGetEndpointMetricsHistory(request: ServingGetEndpointMetricsHistoryRequest, options?: ApiOptions): Observable<any> {
    return this.apiRequest.post<ServingGetEndpointMetricsHistoryResponse>(`${this.basePath}/serving.get_endpoint_metrics_history`,
      request,
      {
        headers: this.defaultHeaders,
        withCredentials: this.configuration.withCredentials
      },
      options
    );
  }

    /**
     * Get all the registered endpoints
     * @param request request body
     * @param options flags and headers to use in webapp
     */
    public servingGetEndpoints(request: object, options?: ApiOptions): Observable<any> {
        return this.apiRequest.post<ServingGetEndpointsResponse>(`${this.basePath}/serving.get_endpoints`,
            request,
            {
                headers: this.defaultHeaders,
                withCredentials: this.configuration.withCredentials
            },
            options
        );
    }

  /**
   * Get loading instances (enpoint_url not set yet)
   * @param request request body
   * @param options flags and headers to use in webapp
   */
  public servingGetLoadingInstances(request: object, options?: ApiOptions): Observable<any> {
    return this.apiRequest.post<ServingGetLoadingInstancesResponse>(`${this.basePath}/serving.get_loading_instances`,
      request,
      {
        headers: this.defaultHeaders,
        withCredentials: this.configuration.withCredentials
      },
      options
    );
  }

    /**
     * Register container
     * @param request request body
     * @param options flags and headers to use in webapp
     */
    public servingRegisterContainer(request: ServingRegisterContainerRequest, options?: ApiOptions): Observable<any> {
        return this.apiRequest.post<object>(`${this.basePath}/serving.register_container`,
            request,
            {
                headers: this.defaultHeaders,
                withCredentials: this.configuration.withCredentials
            },
            options
        );
    }

    /**
     * Unregister container
     * @param request request body
     * @param options flags and headers to use in webapp
     */
    public servingUnregisterContainer(request: ServingUnregisterContainerRequest, options?: ApiOptions): Observable<any> {
        return this.apiRequest.post<object>(`${this.basePath}/serving.unregister_container`,
            request,
            {
                headers: this.defaultHeaders,
                withCredentials: this.configuration.withCredentials
            },
            options
        );
    }

  }
