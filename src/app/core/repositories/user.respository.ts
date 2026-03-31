import { Injectable, signal, computed } from "@angular/core";
import { User } from "../../models/user.model";
import { MOCK_USERS } from "../../mocks/users.mock";

/**
 * Reemplaza el uso de NgRx usando en proyectos pequeños Signals Store Pattern
 * uso de signals 
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
    providedIn: 'root'
})
export class UserRepository {
    private usersSignal = signal<User[]>(MOCK_USERS);

    user = computed(() => this.usersSignal());

    gestId(id: string) {

        return computed(() => 
        this.usersSignal().filter(u => u.id === id))
    }

    add(user: User) {
        this.usersSignal.update(users => [...users, user]);
    }

}