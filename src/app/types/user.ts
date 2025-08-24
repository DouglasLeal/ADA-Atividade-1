import { Address } from "./address";

export interface User {
    name: string;
    email: string;
    password: string;
    address: Address;
}
