function AllButtonShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategoriesBtn(data.categories));
}

const displayCategoriesBtn = categories => {
  const ButtonContainer = document.getElementById('AllButtonContainer');

  categories.forEach(item => {
    const Button = document.createElement('button');
    Button.classList.add('btn');
    Button.innerText = item.category;

    ButtonContainer.appendChild(Button);
  });
};

// *****************************************************

// video Part Start :
function AllVideoShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayCategoriesVideo(data.videos));
}

const displayCategoriesVideo = videos => {
  const VideoContainer = document.getElementById('videoContainer');
  console.log(videos);

  videos.forEach(video => {
    const VideoFile = document.createElement('div');
    VideoFile.classList = 'card bg-base-100 ';
    VideoFile.innerHTML = `
   <figure class="h-[200px]">
    <img class="h-full w-full object-cover" src=${video.thumbnail} alt="Shoes" />
   </figure>
   <div class=" flex gap-3 ml-1 my-6">
    <div class="h-10 w-10">
      <img class="h-full w-full rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
    </div>
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">${video.title}</h2>
      <div class="flex items-center gap-2">
      <p>${video.authors[0].profile_name}</p>
      <img class="h-5 w-5" src="Image/verified-icon.png"/>
      </div>
      <small class="text-gray-400">${video.others.views} views</small>
    </div>
    
   </div>

  `;

    VideoContainer.appendChild(VideoFile);
  });
};

AllVideoShow();
AllButtonShow();
