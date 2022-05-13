// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environmentAPI = {
  // baseAPIURL: 'http://192.168.0.49:8082'
  // baseAPIURL: 'http://api.cropdata.tk/'

  baseAPIURL: 'http://localhost:8080/emp'
  // baseAPIURL: 'https://api-tsuat.cropdata.in/master-data'

}
export const environment = {
  production: false,
  apiUrl: environmentAPI.baseAPIURL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
