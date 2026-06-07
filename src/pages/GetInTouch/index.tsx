import { useActionState } from "react";
import { InputType, Input } from "../../components/Input";
import { useDarkMode } from "src/ThemeHandler";
import { darkTheme, lightTheme } from "src/styles/Theme";
import { Box } from "@mui/material";
import "./GetInTouch.css";

type FormState = {
  error: string | null;
  success: string | null;
  isLoading: boolean;
};

const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_URL!;

const GetInTouch = () => {
  const handleSubmit = async (_previousState: FormState, formData: FormData): Promise<FormState> => {
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      return { error: null, success: "Message sent! I'll get back to you soon.", isLoading: false };
    } catch {
      return { error: "Something went wrong. Please try again.", success: null, isLoading: false };
    }
  };

  const [formState, setFormState, isPending] = useActionState(handleSubmit, {
    error: null,
    success: null,
    isLoading: false,
  });

  const { darkMode } = useDarkMode();

  const textColor = darkMode
    ? darkTheme.palette.secondary.main
    : lightTheme.palette.secondary.main;

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
      <div style={{ color: textColor, textAlign: "center", maxWidth: "600px", padding: "2rem 1rem 0" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>Get In Touch</h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", opacity: 0.85 }}>
          If you want to talk, you can reach out using the form below. I will be happy to respond.
        </p>
      </div>
      <div style={{ width: "100%", maxWidth: "500px", padding: "0 1rem" }}>
        {formState.success ? (
          <p style={{ color: "#4caf50", textAlign: "center", fontSize: "1rem" }}>
            {formState.success}
          </p>
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
              isTextArea={true}
            />
            <div style={{ marginTop: "1rem" }}>
              {formState.error && (
                <p style={{ color: "#f44336", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  {formState.error}
                </p>
              )}
              <button className="submitBtn" type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </Box>
  );
};

export default GetInTouch;
