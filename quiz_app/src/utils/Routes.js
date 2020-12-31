import React from "react";

import Home from "../pages/Home/Home";
import Basic from "../pages/Basic/Basic";
import Admin from "../pages/Admin/Admin";

export default [
    {
        path:"/",
        exact:"true",
        component:() => <Home />,
    },
    {
        path:"/admin",
        component:() => <Basic />,
    },
    {
        path:"/admin",
        component:() => <Admin />,
    },
];

