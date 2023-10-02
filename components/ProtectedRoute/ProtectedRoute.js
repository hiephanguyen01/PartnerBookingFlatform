import Link from "next/link";
import { useSelector } from "react-redux";
import LoadingCPN from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userReducer.user);
  const authing = useSelector((state) => state.userReducer.authing);
  return authing ? (
    <LoadingCPN />
  ) : user ? (
    children
  ) : (
    <Link href="/login-register" />
  );
};

export default PrivateRoute;
