const API_URL = "https://api.github.com/users/"

const btnSearch = document.querySelector(".btn")
const inputSearch = document.querySelector("#inp")

const imgAvatar = document.querySelector("#avatar")

const username = document.querySelector('.username')
const userbio = document.querySelector('.userbio')

const userFollower = document.querySelector('.userFollower')
const userFollowing = document.querySelector('.userFollowing')

const profile = document.querySelector('.mm')

const wholeinp = document.querySelector('.inpp')



btnSearch.addEventListener("click", (e) => {

  wholeinp.style.margin= "5rem 0 0 0";
  profile.style.display = "block";

  if (!inputSearch.value) {
    alert("Please Type The Username First !");
    return;
    }
    
  
  fetch(API_URL + inputSearch.value)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
        console.log(data);
      showProfile(data);
      });
});

// function getUser(username) {}

function showProfile(data) {
  const { avatar_url, following, followers, name , bio , documentation_url } = data;
    imgAvatar.src = avatar_url
    username.innerHTML = name
    userbio.innerHTML = bio
    userFollower.innerHTML = "followers : "  + followers
    userFollowing.innerHTML = "followings : "  + following

  if (documentation_url == 'https://docs.github.com/rest/reference/users#get-a-user') {
    alert('There is no github account with this username')
  }
}





