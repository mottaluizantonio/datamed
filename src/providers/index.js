import { DashboardProvider } from "./Dashboard";
import { DetailsProvider } from "./Details";
import { LoginProvider } from "./Login";
import { ModalProvider } from "./Modal";
import { RegisterProvider } from "./Register";
import { TokenProvider } from "./Token";

export const Providers = ({ children }) => {
    return (
        <TokenProvider>
            <LoginProvider>
                <ModalProvider>
                    <RegisterProvider>
                        <DashboardProvider>
                            <DetailsProvider>{children}</DetailsProvider>
                        </DashboardProvider>
                    </RegisterProvider>
                </ModalProvider>
            </LoginProvider>
        </TokenProvider>
    );
};
