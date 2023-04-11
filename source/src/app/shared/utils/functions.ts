import { USERS } from "src/app/core/database/users/users"
import { LoggedUser, User } from "src/app/models/app.models"

// AUTHENTICATION
export const getUserBy = (parameter: 'username' | 'name' | 'id', value: string): User | undefined => USERS.find((u: User) => u[parameter].toLowerCase() === value.toLowerCase());
export const findUser = (username: string, password: string): User | undefined => USERS.find((u: User) => u.username === username && u.password === password);
export const getLoggedUserFromUser = (u: User): LoggedUser => ({id: u.id, name: u.name, lastname: u.lastname, username: u.username, sex: u.sex, amountLoaned: u.amountLoaned, isAdmin: u.isAdmin});

