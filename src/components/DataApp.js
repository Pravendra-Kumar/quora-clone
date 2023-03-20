import React, {useState} from "react";

export const DataAppContext = React.createContext();

const DataApp = (props) => {

   

    const [appState, setAppState] = useState(true);



    return(
        <>
            <DataAppContext.Provider value={{appState, setAppState }}>
                <div>
                    {props.children}
                </div>
            </DataAppContext.Provider>

        </>
    )
}

export default DataApp;



//creating of react context var
//creation of provider
//creation of consumer with useContext
//creation of consumer in class comp
//creation of global context and wraper
//shifting warpper to different file
//login management with context
//theme togle using context


//  limitations
// all componnets render everytime
// single file to store all context values - in form of state
// scalibility - 100+ components - context value can be huge and complex to manage



//Redux - useReducer Hook
