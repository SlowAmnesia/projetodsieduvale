document.addEventListener("DOMContentLoaded", program);

async function program(){
    const posts = await fetch('./data/posts.json')
        .then(response => response.json())
        .then(data => {return data})
        .catch(error => console.log(error));

    posts.forEach(post => criarPost(post));
}

function criarPost(objetoPost){
    // criação dos elementos  
    const post = document.createElement('div');
    post.classList.add('post');

    const profilePicture = document.createElement('div');
    profilePicture.classList.add('profile-picture');

    const img = document.createElement('img');
    if (objetoPost.profile_picture){
        img.src = objetoPost.profile_picture;
    } else{
        img.src = './assets/default_profile_picture.png';
    }

    const content = document.createElement('div');
    content.classList.add('content');

    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');

    const nickname = document.createElement('span');
    nickname.classList.add('nickname');
    nickname.innerHTML = objetoPost.nickname;

    const user = document.createElement('span');
    user.classList.add('user');
    user.innerHTML = objetoPost.user;

    const timePassed = document.createElement('span');
    timePassed.classList.add('time-passed');
    timePassed.innerHTML = objetoPost.time_passed
    
    const contentText = document.createElement('div');
    contentText.classList.add('content-text');
    contentText.innerHTML = objetoPost.content_text;

    const contentPicture = document.createElement('div');
    contentPicture.classList.add('content-picture');

    const contentImage = document.createElement('img');
    contentImage.classList.add('content-image');
    contentImage.src = objetoPost.content_image;

    //junção dos elementos
    contentPicture.appendChild(contentImage);
    contentHeader.appendChild(nickname);
    contentHeader.appendChild(user);
    contentHeader.appendChild(timePassed);

    content.appendChild(contentHeader);
    content.appendChild(contentText);
    content.appendChild(contentPicture);

    profilePicture.appendChild(img);

    post.appendChild(profilePicture);
    post.appendChild(content);

    document.querySelector('.container').appendChild(post);
}
