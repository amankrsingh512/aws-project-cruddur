import './App.css';

import HomeFeedPage from './pages/HomeFeedPage';
import NotificationsFeedPage from './pages/NotificationsFeedPage';
import UserFeedPage from './pages/UserFeedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import RecoverPage from './pages/RecoverPage';
import MessageGroupsPage from './pages/MessageGroupsPage';
import MessageGroupPage from './pages/MessageGroupPage';
import ConfirmationPage from './pages/ConfirmationPage';
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//AWS-amplify
import { Amplify } from 'aws-amplify';

const awsConfig = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_CLIENT_ID,
  oauth: {},
  Auth: {
    region: process.env.REACT_APP_AWS_PROJECT_REGION,           
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,         
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,   
  }
};

console.log("AWS Config:", awsConfig); // Debugging step

Amplify.configure(awsConfig);


const router = createBrowserRouter([
  {
    path: "/notifications",
    element: <NotificationsFeedPage />
  },
  {
    path: "/",
    element: <HomeFeedPage />
  },
  {
    path: "/@:handle",
    element: <UserFeedPage />
  },
  {
    path: "/messages",
    element: <MessageGroupsPage />
  },
  {
    path: "/messages/@:handle",
    element: <MessageGroupPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/signin",
    element: <SigninPage />
  },
  {
    path: "/confirm",
    element: <ConfirmationPage />
  },
  {
    path: "/forgot",
    element: <RecoverPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;