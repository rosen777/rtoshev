"use client";

import { useActionState, use, Suspense } from "react";
import { InputType, Input } from "../../components/Input";
import { useDarkMode } from "src/ThemeHandler";
import { darkTheme, lightTheme } from "src/styles/Theme";
import { Box } from "@mui/material";
import { fetchUser, postUser } from "../../utils/api";
import "./GetInTouch.css";

type UserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const userPromise = fetchUser();

function FetchUser({ dataResource }) {
  const data = use(dataResource);

  return (
    <div>
      <h1>Data Fetched</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

const GetInTouch = () => {
  const handleUserForm = async (
    previousState: {
      users: UserFormData[];
      error: string | null;
      success: string | null;
      isLoading: boolean;
    },
    formData: FormData
  ) => {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const newUser = { firstName, lastName, email };
      const response = await postUser(firstName, lastName, email);

      return {
        ...previousState,
        users: [...previousState.users, response, newUser],
      };
    } catch (error) {
      return {
        ...previousState,
        error: "Failed to send message.",
        success: null,
        isLoading: false,
      };
    }
  };

  const [formState, setFormState, isPending] = useActionState(handleUserForm, {
    users: [],
    error: null,
    success: null,
    isLoading: false,
  });

  const { darkMode } = useDarkMode();

  const user = fetchUser(); // Assume fetchData returns a resource

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexBasis: "auto",
        gap: "2rem",
        height: "100vh",
      }}
      style={{
        backgroundColor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
      }}>
      <div
        style={{
          color: darkMode
            ? darkTheme.palette.secondary.main
            : lightTheme.palette.secondary.main,
        }}>
        <h2>Contact Form</h2>
        <Suspense fallback={<div>Loading user data...</div>}>
          <FetchUser dataResource={user} />
        </Suspense>
      </div>
      <div>
        {isPending ? (
          <div
            style={{
              color: darkMode
                ? darkTheme.palette.secondary.main
                : lightTheme.palette.secondary.main,
            }}>
            <p>Loading...</p>
          </div>
        ) : (
          <form action={setFormState}>
            <Input
              label="First Name"
              name="firstName"
              type={InputType.Text}
              required
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              name="lastName"
              type={InputType.Text}
              required
              placeholder="Enter your last name"
            />
            <Input
              label="Email"
              name="email"
              type={InputType.Email}
              required
              placeholder="Enter your email"
            />
            <Input
              label="Message"
              name="message"
              type={InputType.Text}
              required
              placeholder="Enter your message"
              pattern="[A-Za-z]+"
              isTextArea={true}
            />
            <div style={{ marginTop: "1rem" }}>
              <button
                className="submitBtn"
                type="submit"
                disabled={formState.isLoading}>
                {formState.isLoading ? "Sending..." : "Send Message"}
              </button>
              {/* {formState.error && <div>Error: {formState.error}</div>}
              {formState.success && <div>Success: {formState.success}</div>} */}
            </div>
          </form>
        )}
      </div>
    </Box>
  );
};

export default GetInTouch;
