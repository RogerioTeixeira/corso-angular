export interface NavbarConfig {
    links:NavbarLink[];
    brand:NavbarLink;
}

export interface NavbarLink {
    label: string;
    pathUrl: string;
}