/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { TasksGetOperationsLogResponseUser } from '././tasksGetOperationsLogResponseUser';


export interface TasksGetOperationsLogResponseOperations {
    /**
     * Log record ID
     */
    id?: string;
    /**
     * Log record creation time
     */
    created?: string;
    /**
     * The operation that was performed on the task. Either new task status or \'deleted\'
     */
    operation?: string;
    /**
     * The reason for the task operation
     */
    reason?: string;
    /**
     * The info that was passed by the client for the task operation if any
     */
    info?: string;
    /**
     * The calling client IP
     */
    ip?: string;
    /**
     * The calling agent
     */
    originator?: TasksGetOperationsLogResponseOperations.OriginatorEnum;
    /**
     * The calling agent version
     */
    originator_version?: string;
    /**
     * The calling client id
     */
    originator_id?: string;
    user?: TasksGetOperationsLogResponseUser;
}
export namespace TasksGetOperationsLogResponseOperations {
    export type OriginatorEnum = 'agent' | 'webapp' | 'enterprise SDK' | 'SDK' | 'session' | 'serving' | 'task' | 'python' | 'curl' | 'postman' | 'other';
    export const OriginatorEnum = {
        Agent: 'agent' as OriginatorEnum,
        Webapp: 'webapp' as OriginatorEnum,
        EnterpriseSDK: 'enterprise SDK' as OriginatorEnum,
        SDK: 'SDK' as OriginatorEnum,
        Session: 'session' as OriginatorEnum,
        Serving: 'serving' as OriginatorEnum,
        Task: 'task' as OriginatorEnum,
        Python: 'python' as OriginatorEnum,
        Curl: 'curl' as OriginatorEnum,
        Postman: 'postman' as OriginatorEnum,
        Other: 'other' as OriginatorEnum
    }
}
