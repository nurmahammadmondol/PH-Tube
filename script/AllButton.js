function ButtonColor() {}

function AllButtonShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategoriesBtn(data.categories))
    .catch(err => console.log(err));
}

const ClickButton = id => {
  // alert(id);

  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayCategoriesVideo(data.category))
    .catch(err => console.log(err));
};

const displayCategoriesBtn = categories => {
  const ButtonContainer = document.getElementById('AllButtonContainer');

  categories.forEach(item => {
    const ButtonContain = document.createElement('div');

    ButtonContain.innerHTML = `
      <button onclick="ClickButton(${item.category_id})" class="btn">
        ${item.category}
      </button>
      `;
    // console.log(item);

    ButtonContainer.appendChild(ButtonContain);
  });
};

// *******************************************************************

// video Part Start :
function AllVideoShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayCategoriesVideo(data.videos));
}

// Video Time :
function ShowTime(Time) {
  const Day = parseInt(Time / 46400);
  const Months = parseInt(Day / 30);

  if (Day >= 1) {
    const Days = Day;
    return `${Days} day ago`;
  }

  const remainingDay = Time % 46400;
  const Hour = parseInt(remainingDay / 3600);
  const remainingSecond = Time % 3600;
  const Minute = parseInt(remainingSecond / 60);
  const Second = remainingSecond % 60;

  return `${Hour} hour ${Minute} minute ${Second} second ago`;
}

const displayCategoriesVideo = videos => {
  const VideoContainer = document.getElementById('videoContainer');
  VideoContainer.innerHTML = '';
  // console.log(videos);

  if (videos.length == 0) {
    VideoContainer.classList.remove('grid');
    VideoContainer.innerHTML = `
      <div class="flex flex-col justify-center items-center gap-7 mt-16">
      <img class="w-[250px]" src="Image/Icon.png"/>
      <h3 class="text-3xl font-bold ">Oops!! Sorry, There is no content here</h3>
      </div>
      `;
  } else {
    VideoContainer.classList.add('grid');
  }

  videos.forEach(video => {
    const VideoFile = document.createElement('div');
    VideoFile.classList = 'card bg-base-100 ';
    VideoFile.innerHTML = `
   <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover" src=${
      video.thumbnail
    } alt="Shoes" />
  
    ${
      video.others.posted_date?.length === 0
        ? ''
        : ` <span class="absolute right-2 bottom-2 text-[8px] text-white bg-black px-2 py-1 rounded-md">${ShowTime(
            video.others.posted_date
          )}</span>`
    }


   </figure>

   <div class=" flex gap-3 ml-1 my-6">
    <div class="h-10 w-10">
      <img class="h-full w-full rounded-full object-cover" src="${
        video.authors[0].profile_picture
      }"/>
    </div>
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">${video.title}</h2>
      <div class="flex items-center gap-2">
      <p>${video.authors[0].profile_name}</p>
      <span>${
        video.authors[0].verified === true
          ? '<img class="h-5 w-5" src="Image/verified-icon.png"/>'
          : ''
      }</span>
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
