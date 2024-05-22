// gql
async function gql(endpoint, query, variables) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GraphQL request failed:", error);
    throw error;
  }
}

// test gql

(async () => {
  const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`;
  const cats = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    catQuery,
    { q: "[{}]" }
  );
  console.log(cats); 

  const loginQuery = `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`;

  const token = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    loginQuery,
    { login: "test457", password: "123123" }
  );
  console.log(token);
})();

// jwtDecode

function jwtDecode(token) {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return undefined;
    }

    const decoded = atob(parts[1]);
    const decodedJSON = JSON.parse(decoded);

    return decodedJSON;
  } catch (error) {
    return undefined;
  }
}

// test jwtDecode

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 
try {
    console.log(jwtDecode())         
    console.log(jwtDecode("дічь"))   
    console.log(jwtDecode("ey.ey.ey"))      
    
    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}
finally{
    console.log('ДЗ, мабуть, закінчено')
}