// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

async function buildTables() {
  try {
    client.connect();
    // drop tables in correct order
    client.query(`
    DROP TABLE IF EXISTS tags;
    DROP TABLE IF EXISTS links;
  `);
    // build tables in correct order
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    // users, activities, routines, routineActivities
    await client.query(`
      CREATE TABLE links(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        link VARCHAR(255) UNIQUE NOT NULL,
        "createDate" DATE NOT NULL,
        "clickNum" INTEGER,
        comment VARCHAR(255) NOT NULL
      );
       CREATE TABLE tags(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      );
      `);
    console.log("Finished building tables...");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    const createInitialLinks = async () => {
      console.log("Starting to create initial links...");
      try {
        const linksToCreate = [
          {
            name: "Google",
            link: "https://www.google.com",
            createDate: "2020/08/31",
            clickNum: 12,
            comment: "A search utility tool.",
          },
          {
            name: "Facebook",
            link: "https://www.facebook.com",
            createDate: "2021/02/14",
            clickNum: 23,
            comment: "A social media website for family and friends.",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com",
            createDate: "2020/12/25",
            clickNum: 1,
            comment: "A social networking site for professional relationships",
          },
        ];
      } catch (err) {
        console.error("There was a problem creating LINKS");
        throw err;
      }
    };
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
