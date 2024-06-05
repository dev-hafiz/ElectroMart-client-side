/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const token = localStorage.getItem("access-token");
  // console.log(userInfo);

  useEffect(() => {
    fetch(`https://electro-mart-server-side.vercel.app/users/${user?.email}`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h3 className="text-1xl mb-12 md:text-start text-center md:text-3xl text-blue-700 font-medium ">
        Welcome to profile :)
      </h3>
      <div className="grid md:grid-cols-12  gap-4">
        <div className="border-[1px] border-[#e5e5e5] rounded-md px-4 py-4 md:col-span-8">
          <div className="flex mb-2 mt-3 items-center">
            <h4 className="font-semibold text-[1rem]">Your Name : </h4>
            <p className="ml-5  text-[18px]">{userInfo?.displayName}</p>
          </div>
          <div className="flex  mb-2 items-center">
            <h4 className="font-semibold text-[1rem]">Your Email : </h4>
            <p className="ml-5   mb-2 text-[18px]">{userInfo?.email}</p>
          </div>
          <div className="flex  mb-2 items-center">
            <h4 className="font-semibold text-[1rem]">Your Phone : </h4>
            <p className="ml-5  text-[18px]">{userInfo?.phone}</p>
          </div>
          <div className="flex  mb-2 items-center">
            <h4 className="font-semibold text-[1rem]">Gender : </h4>
            <p className="ml-5  text-[18px]">{userInfo?.gender}</p>
          </div>
          <div className="flex  mb-2 items-center">
            <h4 className="font-semibold text-[1rem]">Address : </h4>
            <p className="ml-5  text-[18px]">{userInfo?.address}</p>
          </div>
        </div>
        <div className=" md:col-span-4 border-[1px] border-[#e5e5e5] rounded-md">
          <div className="profile-container">
            <img
              src={userInfo?.photoUrl}
              alt="profile"
              className="profile-img w-2/4 rounded-md"
            />
          </div>
        </div>
      </div>
      <Link to={`/dashboard/allProduct/update/${userInfo?._id}`}>
        <button className="update-btn">Update Profile </button>
      </Link>
    </div>
  );
};

export default Dashboard;
