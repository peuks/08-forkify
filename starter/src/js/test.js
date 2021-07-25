import axios from "axios";

axios
  .get(
    "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=9b90c61b-087d-4c62-9775-2a7d5d74e1ed"
  )
  .then((response) => {
    console.log(res);
    const data = res;
    //   Throw an error if respons not okay
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  })
  .catch((error) => {
    console.log(error);
  });
