// hooks
import { useEffect } from "react";

// local imports
import { UseGetUserHookI } from "../types/hooks/useGetUserType";
import { UserController } from "../controllers/user-controller";


export function useGetUser(props: UseGetUserHookI) {
    // if we already have user data in initialValue we put it into state
    // if not we get user data from server and put it into state

    const {initialValue, setUser, databaseSelector, dbSelectorValue} = props

    useEffect(() => {
        if(initialValue) return setUser(initialValue);
        if(databaseSelector && dbSelectorValue) {
            const getUser = async () => {
                const user = await UserController.getUser(databaseSelector, dbSelectorValue);
                if(user?.data) {
                    setUser(user.data);
                }
            }
            getUser();
        }
    },[])

}