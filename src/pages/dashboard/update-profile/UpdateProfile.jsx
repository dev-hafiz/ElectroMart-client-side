import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [updateUser, setUpdateUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://electro-mart-server-side.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateUser(data);
      });
  }, [user?.email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const photoUrl = form.photoUrl.value;
    // console.log(displayName, email, phone, gender, address, photoUrl);

    const userData = {
      displayName,
      email,
      phone,
      gender,
      address,
      photoUrl,
    };

    await fetch(
      `https://electro-mart-server-side.vercel.app/users/${updateUser._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "User Info Updatedt Successfully!",
          text: `Your product ${data?.displayName} has been Edited.`,
          icon: "success",
        });
        navigate("/dashboard");
      });
  };

  return (
    <div className="my-16">
      {/* form start  */}

      <form onSubmit={handleSubmit} className="w-8/12 mx-auto ">
        <div className="relative z-0 w-full mb-5 group">
          <input
            defaultValue={updateUser?.displayName}
            type="text"
            name="displayName"
            placeholder="Your Name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            defaultValue={updateUser?.email}
            type="email"
            name="email"
            placeholder="Email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            disabled
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={updateUser?.phone}
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={updateUser?.address}
              type="text"
              name="address"
              placeholder="Your Address"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={updateUser?.photoUrl}
              type="url"
              name="photoUrl"
              placeholder="Photo URL"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label className="mr-3 font-semibold">Select Gender</label>
          <select defaultValue={updateUser?.gender} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>

      {/* form end */}
    </div>
  );
};

export default UpdateProfile;
