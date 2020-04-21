import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  // const user = createUser("Miro", "miro@email.com", "123456");
  const user = createUser({
    email: "m@email.com",
    password: 123,
    techs: [
      "Node.JS",
      "ReactJS",
      "React Native",
      { title: "JavaScript", experience: 100 },
      { title: "a", experience: 1 },
      { title: "a" },
    ],
    friends: ["a", "b"],
  });
  // console.log(user.)
  return response.json({ msg: "Hello World" });
}
