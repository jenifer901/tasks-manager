import { Injectable, computed, signal } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userSignal = signal<User | null>(null);

    user = computed(() => this.userSignal());

    isAuthenticated = computed(() => !!this.userSignal());

    login(user: User){
        this.userSignal.set(user)
    }

    logout() {
        this.userSignal.set(null);
    }

}