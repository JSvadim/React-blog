import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateType } from "../redux/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector