// *******************************************************************

function AllButtonShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategoriesBtn(data.categories))
    .catch(err => console.log(err));
}

const RemoveColorBtn = () => {
  const items = document.getElementsByClassName('Btn-Color-remove');

  for (let item of items) {
    item.classList.remove('ActiveColor');
  }
};

const ClickButton = id => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
      // All Btn Color Remove

      RemoveColorBtn();

      // One Btn Color Add
      const ActiveButton = document.getElementById(`Btn-${id}`);
      ActiveButton.classList.add('ActiveColor');
      displayCategoriesVideo(data.category);
    })
    .catch(err => console.log(err));
};

const displayCategoriesBtn = categories => {
  const ButtonContainer = document.getElementById('AllButtonContainer');

  categories.forEach(item => {
    const ButtonContain = document.createElement('div');

    ButtonContain.innerHTML = `
      <button id="Btn-${item.category_id}" onclick="ClickButton(${item.category_id})" class="btn Btn-Color-remove">
        ${item.category}
      </button>
      `;
    // console.log(item);

    ButtonContainer.appendChild(ButtonContain);
  });
};

// *******************************************************************

// video Part Start :
function AllVideoShow(searchText = '') {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  )
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

// Details Show :
const ShowDetails = async Details => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${Details}`;

  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.video);
};

const displayDetails = video => {
  const DetailsBox = document.getElementById('detailsContainer');
  DetailsBox.innerHTML = `
  <img class="h-[250px] w-full" src="${video.thumbnail}"/>
  <h3 class="font-bold my-3">${video.title}</h3>
  <p>${video.description}</p>
  `;

  document.getElementById('CustomModal').showModal();
};

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

   <div class=" flex gap-3 my-3">
    <div class="h-10 w-10">
      <img class="h-full w-full rounded-full object-cover" src="${
        video.authors[0].profile_picture
      }"/>
    </div>
    <div class="flex flex-col gap-1 w-full">
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

      <button onclick="ShowDetails('${
        video.video_id
      }')" class="btn font-semibold text-gray-500 flex justify-center ">Details</button>
     
    </div>
  
   </div>

    

  `;

    VideoContainer.appendChild(VideoFile);
  });
};

document.getElementById('searchText').addEventListener('keyup', r => {
  AllVideoShow(r.target.value);
});

AllButtonShow();
AllVideoShow();
