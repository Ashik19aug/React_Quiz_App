import React, {useState, createContext } from 'react';

export const ViewContext = createContext();

export const ViewProvider = props =>{

    const [profileOpen, setProfileOpen] = React.useState(false);
    
    return(
        <ViewContext.Provider value={[profileOpen, setProfileOpen]}>
            {props.children}
        </ViewContext.Provider>
    );
}