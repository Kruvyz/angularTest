export class AuthServiceMock {
    canActivate(): boolean {
        return true;
    }

    authAsAdmin() {}
    authAsUser() {}
}
