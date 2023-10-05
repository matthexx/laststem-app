import axios from "axios";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();

  const headers = {
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${TOKEN}`
    },
  };

  const signup = async (user) => {
    const apiURL = "http://127.0.0.1:8000";
    var datalid = "";

    // axios.post("/api/users/login", user);
    // added code for testing api
    const res = await axios
      .get(apiURL + "/sanctum/csrf-cookie", headers)
      .then((response) => {
        // nextjs code starts here
        axios
          .post(apiURL + "/api/register", user, headers)
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data.datalid.user));
            console.log(
              "credentials submitted",
              user,
              "lara api response",
              res.data.datalid.token + "is a logedin member",
              res.data.datalid.user
            );
            router.push("/dashboard");

            // check for response data from api call
            if ((datalid = res.data.datalid)) {
              router.push(
                "/dashboard/profile/" + datalid.user.id
                // {
                //     user : datalid.user
                // }
              );
              console.log(datalid.status);
            }
          })
          .catch((error) => {
            console.log("Login Failed", error.message);
          });

        // next js ends here
      })
      .catch((error) => {
        console.log("Login Failed", error.message);
      });
    console.log(user.email, user.password, user);
    return { res };
  };
  // router.push("/dashboard/profile");
  return { signup };

  // console.log("Login successful");
  // Redirect to the profile page
};
