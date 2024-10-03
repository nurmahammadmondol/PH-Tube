/*
 * {"category_id":"1001",
"video_id":"aaab",
"thumbnail":"https://i.ibb.co/QPNzYVy/moonlight.jpg","title":"Midnight Serenade",

"authors":[
{"profile_picture":"https://i.ibb.co/fDbPv7h/Noha.jpg",
"profile_name":"Noah Walker",
"verified":false
}
],

"others":{
"views":"543K",
"posted_date":""},

"description":"'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."},{"category_id":"1003","video_id":"aaac","thumbnail":"https://i.ibb.co/NTncwqH/luahg-at-pain.jpg","title":"Laugh at My Pain","authors":
 *
 */

function ShowTime(Time) {
  const Hour = parseInt(Time / 3600);
  const remainingSecond = Time % 3600;
  const Minute = parseInt(remainingSecond / 60);
  const Second = remainingSecond % 60;

  return `${Hour} hour ${Minute} minute ${Second} second ago`;
}

console.log(ShowTime(4060));
