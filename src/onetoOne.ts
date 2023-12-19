import { prisma } from "./db/client";
import { clean } from "./helpers/clean";

/*
 * one-to-one
 * A user has one profile, a profile belongs to one user
 */
async function createUserWithProfile() {
  await clean();
  // create a user
  // Create a user without an associated profile
  const user = await prisma.user.create({
    data: {
      // Any other user-specific data can be included here

      createdAt: new Date(),
    },
  });

  // create a profile with user
  const profile = await prisma.profile.create({
    data: {
      name: "abid",
      userId: user.id,
      createdAt: new Date(),
    },
  });
  //find user ind also includes profile value
  const userOne = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    //if i only view the name of profile section and also get an id
    include: {
      profile: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  //   2. create a user with a profile
  const userTwo = await prisma.user.create({
    //should match with the required schema
    data: {
      // Provide a value for the required 'name' field in the User model
      createdAt: new Date(),
      //profile has required value createdAt
      profile: {
        create: {
          name: "hasan",
          createdAt: new Date(), // Provide a value for the required field
        },
      },
    },
    include: {
      profile: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  //   return { userOne, userTwo };
  console.log("user one", userOne, "user two", userTwo);
}

console.log("one-to-one");
console.log(createUserWithProfile());
