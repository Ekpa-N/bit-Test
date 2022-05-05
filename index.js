require('dotenv').config()
const axios = require('axios')

const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
const port = process.env.PORT

app.use(express.static(__dirname + '/client/dist'))
app.use(express.json())


app.get('/user', (request, response) => {
    const { code, state } = request.query
})

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/client/dist/index.html')
})

async function middleChecker(request, response, next) {
    const { code } = request.body;
    try {
        let responseData = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: "e155f31bffc2467deb0e",
            client_secret: process.env.SECRET,
            code,
        }, {
            headers: {
                Accept:"application/json"
            }
        }
        )
        responseToken= responseData.data
        request.token = responseToken
        console.log(responseToken)
        next()
    } catch {error=> {console.Console.log(error)}}
}



app.post('/login', middleChecker, (request, response) => {
    const {access_token} = request.token
    const userPromise = axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `token ${access_token}`,
            Accept:"application/vnd.github.v3+json"
        }
    })
    const repoPromise = 
    axios.get ('https://api.github.com/user/repos?affiliation=owner&per_page=20&page=1', {
        headers: {
            Authorization: `token ${access_token}`,
            Accept:"application/vnd.github.v3+json"
        }
    })

    Promise.all([userPromise, repoPromise])
    .then(([userResponse, reposResponse]) => {
        // const userDetails = JSON.stringify(userResponse.data)               
        // const repoDetails = JSON.stringify(reposResponse.data)
        const userDetails = userResponse.data
        const repoDetails = reposResponse.data
        console.log(userDetails)        
        response.send([userDetails, repoDetails])
    })
    .catch(error => {console.log(error)})

})


app.listen(port, () => {
    console.log("listening on port " + port)
})


