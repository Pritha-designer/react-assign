var btn = document.getElementById("userdata");
btn.addEventListener("click", doc);

function doc() {
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then((res) => res.json())
        .then((data) => {
            let result = "<h2>USER DATA</h2>";
            data.forEach((user) => { 
                result += `
                 <ul>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                        <li>Username: ${user.username}</li>
                        <li>Phone: ${user.phone}</li>
                </ul>
                `;
            });
            document.getElementById("display").innerHTML = result;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}