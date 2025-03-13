import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserFailure,updateUserStart,updateUserSuccess } from "../redux/user/userSlice";

function Profile() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null); 
  const [image, setImage] = useState(undefined);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false); // Loading state added

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setLoading(true);
  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "First_time_using");
    data.append("cloud_name", "ddsvu2b3o");
  
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddsvu2b3o/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploadedImageData = await res.json();
      console.log(uploadedImageData.url, "handleUpload");
  
      // Update formData with the new profile picture URL
      setFormData((prev) => ({ ...prev, profilePicture: uploadedImageData.url }));
  
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
  
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }), 
      });
  
      const data = await res.json();
      console.log("Updated User:", data);
  
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
  
      dispatch(updateUserSuccess(data)); 
  
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  




  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <div className="text-center font-semibold text-3xl my-7">Profile</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="relative self-center">
            <img
              className="h-24 w-24 cursor-pointer rounded-full object-cover mt-2"
              src={currentUser.profilePicture}
              alt=""
              onClick={() => fileRef.current.click()}
            />
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-full">
                <span className="text-white text-sm">Uploading...</span>
              </div>
            )}
          </div>
          <input
            defaultValue={currentUser.username}
            type="text"
            id="username"
            placeholder="Username"
            className="bg-slate-100 rounded-lg p-3 "
            onChange={handleChange}
          />
          <input
            defaultValue={currentUser.email}
            type="email"
            id="email"
            placeholder="Email"
            className="bg-slate-100 rounded-lg p-3 "
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-slate-100 rounded-lg p-3 "
            onChange={handleChange}
          />
          <button
            className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            disabled={loading} // Disable button while uploading
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <div className="flex justify-between">
            <span className="text-red-600 cursor-pointer">delete account</span>
            <span className="text-red-600 cursor-pointer">sign out</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
