let postData = [
  {
    username: "mr kuldeep",
    dpUrl:
      "https://cdn.pixabay.com/photo/2023/07/30/11/39/girl-8158685_640.jpg",
    postUrl:
      "https://cdn.pixabay.com/photo/2024/02/05/09/31/man-8554081_640.jpg",
  },
  {
    username: "John Doe",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Jane Smith",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Alice Johnson",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Bob Williams",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Emily Brown",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Michael Wilson",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Sarah Martinez",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "David Lee",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Jennifer Taylor",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Christopher Anderson",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Jessica Thomas",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Matthew Hernandez",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Amanda Young",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Daniel White",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Lauren King",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Ryan Garcia",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Rebecca Martinez",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "William Johnson",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Olivia Brown",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
  {
    username: "Ethan Thomas",
    dpUrl: "https://via.placeholder.com/150",
    postUrl: "https://via.placeholder.com/500",
  },
];
window.addEventListener("DOMContentLoaded", () => {
  updatePosts();
  updateStories();
});

let storiesData = [
    {
        dpUrl: "https://cdn.pixabay.com/photo/2024/02/05/09/31/man-8554081_640.jpg",
        username: "yahoo!",
        storyUrl: "https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg",
        storyCaption: "IAMDEV",
        createdAt: "i will tell you sooon!"
    },
    {
        dpUrl: "https://via.placeholder.com/150",
        username: "user1",
        storyUrl: "https://via.placeholder.com/500",
        storyCaption: "Story 1",
        createdAt: "2024-02-25"
    },
    {
        dpUrl: "https://via.placeholder.com/150",
        username: "user2",
        storyUrl: "https://via.placeholder.com/500",
        storyCaption: "Story 2",
        createdAt: "2024-02-24"
    },
    {
        dpUrl: "https://via.placeholder.com/150",
        username: "user3",
        storyUrl: "https://via.placeholder.com/500",
        createdAt: "2024-01-11",
    },
];

function updateStories() {
    storiesData.forEach((story)=>{
  let storyBox = document.createElement("div");
  storyBox.classList.add("storybox");
  storyBox.innerHTML = `
        <div class="dp">
          <img
            src="${story.dpUrl}"
          />
        </div>
        <span class="username">${story.username}</span>`;
    document.querySelector('.statusarea').appendChild(storyBox);
    });
}

function updatePosts() {
  postData.forEach((obj) => {
    let post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <div class="postheader">
          <div class="leftposthead">
            <div class="postdp"><img src="${obj.dpUrl}" ></div>
            <span class="username">${obj.username}</span>
          </div>
          <a href="#" class="morebtn rightposthead"><i class="ri-more-fill"></i></a>
        </div>
        <div class="mainpost">
          <img src="${obj.postUrl}" alt="something went wrong !">
        </div>
        <div class="bottompost">
          <div class="leftbottompost">
              <a href="#" class="like"><i class="ri-heart-3-line"></i></a>
              <a href="#" class="comment"><i class="ri-chat-3-line"></i></a>
              <a href="#" class="share"><i class="ri-send-plane-line"></i></a>
          </div>
          <a href="#" class="bookmark"><i class="ri-bookmark-line"></i></a>
        </div>
        `;
    let postContainor = document.querySelector("main");
    postContainor.appendChild(post);
  });
}
