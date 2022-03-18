import { LoginProvider } from "./Login";
import { TokenProvider } from "./Token";
export const Providers = ({ children }) => {
    return (
        <TokenProvider>
            <LoginProvider>{children}</LoginProvider>
        </TokenProvider>
    );
};
