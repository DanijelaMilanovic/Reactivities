import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import AcivityDashboard from "../../features/activities/dashboard/AcivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActiviryForm from "../../features/activities/form/ActiviryForm";
import NotFound from "../../features/Errors/NotFound";
import ServerError from "../../features/Errors/ServerError";
import TestErrors from "../../features/Errors/TestError";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path:'activities', element: <AcivityDashboard />},
            {path:'activities/:id', element: <ActivityDetails />},
            {path:'createActivity', element: <ActiviryForm key='create'/>},           
            {path:'manage/:id', element: <ActiviryForm key='manage'/>},
            {path:'errors', element: <TestErrors />},
            {path:'not-found', element: <NotFound />},
            {path:'service-error', element: <ServerError/>},
            {path:'*', element: <Navigate replace to='/not-found'/>}
        ]
    }
]
export const router = createBrowserRouter(routes); 