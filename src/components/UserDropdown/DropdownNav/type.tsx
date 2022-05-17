type ToggleType = React.Dispatch<React.SetStateAction<boolean>>;

export interface DropdownNavI {
    toggleDropdown: ToggleType;
    toggleIsClickable: ToggleType;
}

// click handlers 

export interface DNSimpleClickI {
    toggleDropdown: ToggleType;
}

export interface DNLogoutClickI {
    toggleDropdown: ToggleType;
    toggleIsClickable: ToggleType;
}