import React, {useState, createContext } from 'react';

export const ViewContext = createContext();

export const ViewProvider = props =>{

    const [quizMassage,setquizMassage] = React.useState('Select Language & Quiz type on top...');
    const [basicMassage,setbasicMassage] = React.useState('Select Language & Quiz type on top...');
    const [profileOpen, setProfileOpen] = React.useState(false);
    
    return(
        <ViewContext.Provider value={[profileOpen, setProfileOpen]}>
            {props.children}
        </ViewContext.Provider>
    );
}