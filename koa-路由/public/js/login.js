const getButton = document.getElementById("getButton")
const postButton = document.getElementById("postButton")

const userInput = document.getElementById("username")
const pwdInput = document.getElementById("password")

getButton.onclick = function() {
    let username = userInput.value
    let password = pwdInput.value
    fetch(`/api/user/login?username=${username}&password=${password}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}

postButton.onclick = function() {
    let username = userInput.value
    let password = pwdInput.value
    console.log(username, password)
    // post请求
    fetch(`/api/user/login`, {
        method: 'post',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
}