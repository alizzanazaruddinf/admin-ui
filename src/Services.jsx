export const users = [
    {
        name: "izza",
        email: "alizza@gmail.com",
        street: "semarang",
        city: "semarang",
        age: "25",
        job: "web developer",
    },
    {
        name: "nazaruddin",
        email: "nazaruddin@gmail.com",
        street: "semarang",
        city: "semarang",
    },
    {
        name: "firdaus",
        email: "firdaus@gmail.com",
        street: "semarang",
        city: "semarang",
    },
];

const city = "Jakarta";
const street = "Jl Kebon Jeruk";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};