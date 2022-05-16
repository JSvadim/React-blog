// local imports
import { AuthController } from "../../../controllers/auth-controller";


type ToggleType = React.Dispatch<React.SetStateAction<boolean>>;
export const simpleClick = (toggleDropdown: ToggleType) => {
    toggleDropdown(false);
}

export const logoutClick = async (toggleDropdown: ToggleType) => {
    await AuthController.logout();
    toggleDropdown(false);
}