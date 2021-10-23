const linksSocialMedia = {
    github: 'm4rcaoferole',
    youtube: 'm4rcaoferole',
    instagram: 'm4rcaoferole',
    facebook: 'm4rcaoferole',
    twitter: 'm4rcaoferole',
}

function changeSocialMedia() {
    for ( let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`                    

    }
}
changeSocialMedia()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImg.src = data.avatar_url
        userLogin.textContent = data.login
    })
}
getGithubProfileInfos()