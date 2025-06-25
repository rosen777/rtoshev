export const postUser = async (
  firstName: string,
  lastName: string,
  email: string
) => {
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      age: 30,
      email,
    }),
  });

  return response.json();
};

export const fetchUser = async () => {
  const response = await fetch("https://dummyjson.com/users/1");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
