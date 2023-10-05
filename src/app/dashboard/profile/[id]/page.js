"use client";
import { useEffect, useState } from "react";

export default function UserProfile({ params }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const json_user = localStorage.getItem("user");
    const user = JSON.parse(json_user);
    setUserData(user);
  }, []);
  return (
    <div>
      <h1>User Profile Page</h1>
      <p>User profile{params.id}</p>
      <p>{userData.name}</p>
    </div>
  );
}
