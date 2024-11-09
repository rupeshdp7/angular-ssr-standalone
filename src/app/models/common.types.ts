export type Navigation = {
    id: string;
    label: string;
    route: string;
    icon?: string;
};

export type HeaderNavigation = {
    id: string;
    label: string;
    route: string;
    subMenu: NavigationList;
    icon?: string;
};
export type NavigationList = Navigation[];

export type HeaderNavigationList = HeaderNavigation[];

export type CurrentNavigationURLSegments = {
    parent: string;
    child: string;
}; 