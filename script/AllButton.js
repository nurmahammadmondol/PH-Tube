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

/*

{"status":true,"message":"successfully fetched all the videos","videos":[{"category_id":"1001",
"video_id":"aaaa",

"thumbnail":"https://i.ibb.co/L1b6xSq/shape.jpg","title":"Shape of You",

"authors":[
{"profile_picture":"https://i.ibb.co/D9wWRM6/olivia.jpg",
"profile_name":"Olivia Mitchell",
"verified":""}
],

"others":{"views":"100K","posted_date":"16278"},

"description":"Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."},

*/

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
   <div class=" flex gap-3 ml-1 my-7">
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
