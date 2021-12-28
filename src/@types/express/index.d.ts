import {UserInterface} from "../../schemas/User";

declare global {
    namespace express {
        interface Request {
            user?: UserInterface;
        }
    }
}