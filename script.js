const timeStamp = document.querySelector("[data-testid='test-user-time']"); 
const userBio = document.querySelector("[data-testid='test-user-bio']");
const followBtn = document.getElementById("followBtn");


let isFollowingUser = false;

followBtn.addEventListener("click", () => {
    isFollowingUser = !isFollowingUser;
    followBtn.textContent = isFollowingUser ? "Following" : "Follow";
    followBtn.classList.toggle("following", isFollowingUser);
});


timeStamp.textContent = Date.now();
const loadTimeStamp = () => { 
if (!timeStamp) return;
 const timeInterval = setInterval(() => {
 timeStamp.textContent = Date.now();
}, 1000)

return () => clearInterval(timeInterval);
}

document.addEventListener("DOMContentLoaded", loadTimeStamp);



const userBioLimit = 200;
const fullBioText = userBio.textContent;
let isExpandedBio = false;

const updateBio = () => {
    if(!isExpandedBio){
         userBio.innerHTML = `${fullBioText.slice(0, userBioLimit)}...
    <span id="loadMore">Load more</span>
    `;
        isExpandedBio = true;
    }else {
    userBio.innerHTML = `${fullBioText}
    <span id="loadMore">Show less</span>
    `;
        isExpandedBio = false;
    }

    document.getElementById("loadMore").addEventListener("click", updateBio);
};

updateBio()


