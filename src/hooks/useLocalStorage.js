import { useState } from "react"; // ?? useState ?? -- място където държим стейта..

export const useLocalStorage = (key, initialValue) => {
    // local storage vs state:
    // when the local storage is updated react is not notified so its impossible to handle a change
    // so the state has to be our single source of truth - SST
    // the state will be telling the local storage about each change 
    // then the App.js can access data both from the state and the localStorage, but we must have high consistency 
    // between the localStorage and the state
    // localStorage only loads the data initially and never again
    // we control the state through react
    // we are not depending on the localStorage


    const [state, setState] = useState(() => {
        // sterialized means in a string form
        const persistedStateSerialized = localStorage.getItem(key);

        // ако е локалСторидж нещо е персистирало: следва да се обработи и да се ретърнне
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState;
        }
        return initialValue; //дифолтното валю
        /* всичко от горните редове в превод: 
        началната стойност да бъде initialValue, което ръчно сме подали, но ако вече си персистирал нещо
        в локалСторидж, то ще ти бъде дифолтното валю
        и по този начин стейта персистира и при рефреш не се логаутва
        */
    });

    const setLocalStorageState = (value) => {
        // value-то е новият стейт 
        // localStorage ни служи, само с това да даде аут-а при рефреш, защото стейта губи данните
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState
    ];
};

//DONE