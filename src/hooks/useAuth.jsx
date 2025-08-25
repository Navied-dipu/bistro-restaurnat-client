import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
