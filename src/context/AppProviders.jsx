import { AuthProvider } from "./auth/auth-context";
import { UserProvider } from "./auth/user-context";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default AppProviders;
