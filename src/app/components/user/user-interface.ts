export interface UserInterface {
        token?: any;
        id?: number; 
        email: string;
        password: string;
        name?: string; // Opcional si el registro incluye nombre
        role?: string; // Opcional, por si tiene roles (admin, user, etc.)

}
