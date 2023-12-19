import { faker } from "@faker-js/faker";
import { prisma } from "./db/client";
import { clean } from "./helpers/clean";

/*
 * many-to-many
 * A product can have multiple categories and a category can belong to multiple products
 */

async function createProductsWithCategories() {
  await clean();
  //inside the category array there have an multiple categories
  const categoriesPromises = Array(10)
    .fill(null)
    .map(() => {
      return prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: 100,
        },
      });
    });
  //use transcation that provides extra level of secuirity

  const categories = await prisma.$transaction(categoriesPromises);
  //now have an product which have an multiple category
  const productsPromises = Array(10)
    .fill(null)
    .map(() => {
      return prisma.category.create({
        data: {
          name: faker.commerce.productAdjective(),
          product: {
            connect: [
              {
                id: categories[Math.floor(Math.random() * categories.length)]
                  .id,
              },
              {
                id: categories[Math.floor(Math.random() * categories.length)]
                  .id,
              },
            ],
          },
        },
        include: {
          product: true,
        },
      });
    });

  return prisma.$transaction(productsPromises);
}

console.log("many-to-many");
(async () => {
  console.log(JSON.stringify(await createProductsWithCategories(), null, 2));
})();
