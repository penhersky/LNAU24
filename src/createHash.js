const fetch = require("node-fetch");
const fs = require("fs");

(async () => {
  const result = await fetch(`http://localhost:4000/graphql`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      variables: {},
      query: `
      {
        __schema{
          types{
            kind,
            name,
            possibleTypes{
              name
            }
          }
        }
      }
    `
    })
  }).then(result => result.json());
  const filteredData = result.data.__schema.types.filter(
    type => type.possibleTypes !== null
  );
  result.data.__schema.types = filteredData;
  fs.writeFile(
    "./src/fragmentTypes.json",
    JSON.stringify(result.data),
    error => {
      console.log(error);
    }
  );
})();
