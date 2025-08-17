import { User } from "../types/user";

export class LocalStorageUtil {
    private static readonly LOGGED_USER_KEY = "logged_user";
    private static readonly USERS_LIST_KEY = "users_list";

    public static getLoggedUser(): User | null {
        const user = localStorage.getItem(this.LOGGED_USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    public static setLoggedUser(user: User): void {
        localStorage.setItem(this.LOGGED_USER_KEY, JSON.stringify(user));
    }

    public static clearLoggedUser(): void {
        localStorage.removeItem(this.LOGGED_USER_KEY);
    }



    public static getUsersList(): User[] {
        const users = localStorage.getItem(this.USERS_LIST_KEY);
        return users ? JSON.parse(users) : [];
    }

    public static setUsersList(users: User[]): void {
        localStorage.setItem(this.USERS_LIST_KEY, JSON.stringify(users));
    }

    public static addUser(user: User): void {
        const users = this.getUsersList();
        users.push(user);
        this.setUsersList(users);
    }

    public static getUserByEmail(email: string): User | null {
        const users = this.getUsersList();
        return users.find(user => user.email === email) || null;
    }




}