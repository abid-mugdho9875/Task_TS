import { prisma } from "./db/client";
import { clean } from "./helpers/clean";
import { createProductsWithCategories } from "./helpers/product";
import { sampleArray } from "./helpers/random";
import { createUser } from "./helpers/user";

/*
 * One to many
 * An order has one user, a user can have many orders
 */

async function createOrder() {
  await clean();
  // an single user habe an multiple order this indicated that one to many relationship
  const products = await createProductsWithCategories();
  const user = await createUser();

  const order = await prisma.order.create({
    data: {
      // Single user
      user: {
        connect: {
          id: user.id,
        },
      },
      // Multiple products
      products: {
        connect: sampleArray(products).map((product) => ({
          id: product.id,
        })),
      },
    },
    include: {
      user: true,
    },
  });
  console.log("Created Order:", order);
}
//this function  included all the orders regarding this same user

async function findAllOrders() {
  const allOrders = await prisma.order.findMany({
    //order includes user profile and there have an product information
    include: {
      user: true,
      products: true,
    },
  });
  console.log("All Orders:", allOrders);
}

console.log("one-to-many");

// Call the functions to see the output
(async () => {
  console.log(await createOrder());
  console.log(await JSON.stringify(findAllOrders(), null, 2));
})();
