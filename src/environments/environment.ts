// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBVWqRkeEN28FBCg4521lq8a4sLBrdiZCs",
    authDomain: "alumninet-ab4d2.firebaseapp.com",
    projectId: "alumninet-ab4d2",
    storageBucket: "alumninet-ab4d2.appspot.com",
    messagingSenderId: "865730677534",
    appId: "1:865730677534:web:15ebe0ab89975791cc570f"
  },
  apiPath:"https://localhost:7290/api/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
