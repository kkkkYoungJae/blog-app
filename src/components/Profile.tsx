import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth(app);
  const { user } = useContext(AuthContext);

  const onSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("로그아웃 되었습니다.");
    } catch (error: any) {
      console.log(error);
      toast.success(error.code);
    }
  };

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__email">{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        로그아웃
      </div>
    </div>
  );
};

export default Profile;
