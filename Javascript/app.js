function getData() {
    var input = document.getElementById("input").value;
    const url = `https://api.github.com/users/${input}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("name").innerHTML = data.name;
            document.getElementById("img").src = data.avatar_url;
            document.getElementById("bio").innerHTML = data.bio;
            document.getElementById("followers").innerHTML = data.followers;
            document.getElementById("followings").innerHTML = data.following;
            document.getElementById("repos").innerHTML = data.public_repos;
        })
        .catch(err => console.log(err));
}