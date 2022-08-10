import Cookies from "js-cookie";

export default function useAuth() {
  const token = Cookies.get("token");

  return token;
}
