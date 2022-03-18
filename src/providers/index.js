import { LoginProvider } from "./Login";
import { ModalProvider } from "./Modal";
import { TokenProvider } from "./Token";
export const Providers = ({ children }) => {
    return (
        <TokenProvider>
            <ModalProvider>
                <LoginProvider>{children}</LoginProvider>
            </ModalProvider>
        </TokenProvider>
    );
};
