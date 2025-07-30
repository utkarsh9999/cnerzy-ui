import { Amplify } from "aws-amplify";
import { COGNITO_CONFIG } from "../config/cognitoConfig";


Amplify.configure({
  Auth: {
    region: COGNITO_CONFIG.region,
    userPoolId: COGNITO_CONFIG.userPoolId,
    userPoolWebClientId: COGNITO_CONFIG.clientId,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});




// AmplifyAuth.signOut().then(() => window.location.href = '/login');



