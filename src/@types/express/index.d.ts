import {UserInterface} from "../../schemas/User";

declare global {
    namespace express {
        interface Request {
            userLogadoId?: UserInterface;
            userLogadoNome?:UserInterface
        }
    }
}