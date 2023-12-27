import { User } from "src/auth/entities/user.entities";


export const normalizeUser = (user: User) => {
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "phone": user.phone
    }
}