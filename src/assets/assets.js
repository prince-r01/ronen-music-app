import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import mute_icon from "./mute_icon.png"
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import clock_icon from "./clock_icon.png";
import folder_icon from "./folder_icon.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import b_img1 from './browse-img1.jpeg' ;
import b_img2 from "./browse-img2.jpeg";
import b_img3 from "./browse-img3.jpeg";
import b_img4 from "./browse-img4.jpg";
import b_img5 from "./browse-img5.jpeg";
import album1 from "./album1.jpg";
import album2 from "./album2.jpg";
import album3 from "./album3.jpg";
import album4 from "./album4.jpg";
import album5 from "./album5.jpg";
import album6 from "./album6.jpg";
import album7 from "./album7.jpg";
import album8 from "./album8.jpg";
import artist1 from "./artist1.jpeg";
import artist2 from "./artist2.jpeg";
import artist3 from "./artist3.jpg"
import profile_image from "./profile_image.jpg";
import liked_cover from "./liked_cover.jpeg";
import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import song4 from "./song4.mp3";
import song5 from "./song5.mp3";
import song6 from "./song6.mp3";
import song7 from "./song7.mp3";
import song8 from "./song8.mp3";
import song9 from "./song9.mp3";
import song10 from "./song10.mp3";
import song11 from "./song11.mp3";
import playWaveSvg from "./playWave";
import music_note from "./music_note.svg";
export const assets = {
  b_img1,
  b_img2,
  b_img3,
  b_img4,
  b_img5,
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  mute_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  folder_icon,
  arrow_left,
  arrow_right,
  clock_icon,
  music_note,
  liked_cover,
  profile_image,
  playWaveSvg,
};

export const albumsData = [
  {
    id: 0,
    name: "ONE STEP",
    image: album1,
    songsList: [
      {
        id: 0,
        name: "Pehla Nasha",
        image: img2,
        file: song2,
        artist: "Jubin Nautiyal",
        duration: "3:26",
      },
      {
        id: 1,
        name: "Dil Diyan Gallan",
        image: img3,
        file: song3,
        artist: "Atif Aslam",
        duration: "4:20",
      },
      {
      id: 2,
      name: "Samjahwan",
      image: img6,
      file: song6,
      artist: "Arijit Singh, Shreya Ghosal",
      duration: "4:29",
    },
    {
      id: 3,
      name: "Sun Raha Hai",
      image: img7,
      file: song7,
      artist: "Shreya Ghosal",
      duration: "5:14",
    },
    ],
    desc: "Your weekly update of the most played tracks.",
    bgColor: "#d02020",
  },
  {
    id: 1,
    name: "EAgICY",
    image: album2,
    songsList: [
      {
        id: 0,
        name: "Ae Dil Hai Muskhil",
        image: img1,
        file: song1,
        artist: "Arijit Singh",
        duration: "4:29",
      },
      {
        id: 1,
        name: "Dil Diyan Gallan",
        image: img3,
        file: song3,
        artist: "Atif Aslam",
        duration: "4:20",
      },
      {
        id: 2,
        name: "Main Honn Na",
        image: img8,
        file: song8,
        artist: "Sonu Nigam, Shreya Ghosal",
        duration: "6:1",
      },
      {
        id: 3,
        name: "Main Agar Kahoon",
        image: img9,
        file: song9,
        artist: "Shreya Ghosal, Sonu Nigam",
        duration: "5:8",
      },
    ],
    desc: "It offers an intimate glimpse into the artists inner world",
    bgColor: "#427aa1",
  },
  {
    id: 2,
    name: "ALL EYES ON YOU",
    image: album3,
    songsList: [
      {
        id: 0,
        name: "Pehla Nasha",
        image: img2,
        file: song2,
        artist: "Jubin Nautiyal",
        duration: "3:26",
      },
      {
        id: 1,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
    ],
    desc: "Boundless soundscapes for limitless horizons.",
    bgColor: "#ffd929",
  },
  {
    id: 3,
    name: "SAVAGE",
    image: album4,
    songsList: [
      {
        id: 0,
        name: "Ae Dil Hai Muskhil",
        image: img1,
        file: song1,
        artist: "Arijit Singh",
        duration: "4:29",
      },
      {
        id: 1,
        name: "Hua Hai Aaj Pehli Bar",
        image: img5,
        file: song5,
        artist: "Armaan Malik",
        duration: "5:9",
      },
    ],
    desc: "Dive into a soundscape of introspection and delicate beauty",
    bgColor: "#a7946d",
  },
  {
    id: 4,
    name: "PEACE",
    image: album5,
    songsList: [
      {
        id: 0,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
      {
        id: 1,
        name: "Hua Hai Aaj Pehli Bar",
        image: img5,
        file: song5,
        artist: "Armaan Malik",
        duration: "5:9",
      },
    ],
    desc: "Melancholy melodies for twilight moments.",
    bgColor: "#f3561a",
  },
  {
    id: 5,
    name: "WRATH",
    image: album6,
    songsList: [
      {
        id: 0,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
      {
        id: 1,
        name: "Hua Hai Aaj Pehli Bar",
        image: img5,
        file: song5,
        artist: "Armaan Malik",
        duration: "5:9",
      },
    ],
    desc: "Neon Reverie weaves shimmering synths.",
    bgColor: "#d070fd",
  },
  {
    id: 6,
    name: "ALT ERN ATE",
    image: album7,
    songsList: [
      {
        id: 0,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
      {
        id: 1,
        name: "Hua Hai Aaj Pehli Bar",
        image: img5,
        file: song5,
        artist: "Armaan Malik",
        duration: "5:9",
      },
    ],
    desc: "Blending delicate acoustic melodies with heartful lyricism.",
    bgColor: "#106971",
  },
  {
    id: 7,
    name: "F*CKU",
    image: album8,
    songsList: [
      {
        id: 0,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
      {
        id: 1,
        name: "Hua Hai Aaj Pehli Bar",
        image: img5,
        file: song5,
        artist: "Armaan Malik",
        duration: "5:9",
      },
      {
        id: 2,
        name: "Tum Hi Ho",
        image: img10,
        file: song10,
        artist: "Arijit Singh",
        duration: "4:14",
      },
      {
        id: 3,
        name: "Tere Sang Yara",
        image: img11,
        file: song11,
        artist: "Atif Aslam",
        duration: "4:51",
      },
    ],
    desc: "Grime & Glory.",
    bgColor: "#171719",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Ae Dil Hai Muskhil",
    image: img1,
    file: song1,
    artist: "Arjit Singh",
    duration: "4:29",
  },
  {
    id: 1,
    name: "Pehla Nasha",
    image: img2,
    file: song2,
    artist: "Jubin Nautiyal",
    duration: "3:26",
  },
  {
    id: 2,
    name: "Dil Diyan Gallan",
    image: img3,
    file: song3,
    artist: "Atif Aslam",
    duration: "4:20",
  },
  {
    id: 3,
    name: "Meri Aashiqui",
    image: img4,
    file: song4,
    artist: "Arjit Singh",
    duration: "4:26",
  },
  {
    id: 4,
    name: "Hua Hai Aaj Pehli Bar",
    image: img5,
    file: song5,
    artist: "Armaan Malik",
    duration: "5:9",
  },
];
export const songsData2 = [
  {
    id: 0,
    name: "Samjahwan",
    image: img6,
    file: song6,
    artist: "Arijit Singh, Shreya Ghosal",
    duration: "4:29",
  },
  {
    id: 1,
    name: "Sun Raha Hai",
    image: img7,
    file: song7,
    artist: "Shreya Ghosal",
    duration: "5:14",
  },
  {
    id: 2,
    name: "Main Honn Na",
    image: img8,
    file: song8,
    artist: "Sonu Nigam, Shreya Ghosal",
    duration: "6:1",
  },
  {
    id: 3,
    name: "Main Agar Kahoon",
    image: img9,
    file: song9,
    artist: "Shreya Ghosal, Sonu Nigam",
    duration: "5:8",
  },
  {
    id: 4,
    name: "Tum Hi Ho",
    image: img10,
    file: song10,
    artist: "Arijit Singh",
    duration: "4:14",
  },
  {
    id: 5,
    name: "Tere Sang Yara",
    image: img11,
    file: song11,
    artist: "Atif Aslam",
    duration: "4:51",
  },
];


export const artistsData = [
  {
    id: 0,
    name: "Arijit Singh",
    image: artist1,
    songsList: [
      {
        id: 0,
        name: "Ae Dil Hai Muskhil",
        image: img1,
        file: song1,
        artist: "Arijit Singh",
        duration: "4:29",
      },
      {
        id: 1,
        name: "Meri Aashiqui",
        image: img4,
        file: song4,
        artist: "Arijit Singh",
        duration: "4:26",
      },
      {
        id: 2,
        name: "Samjahwan",
        image: img6,
        file: song6,
        artist: "Arijit Singh, Shreya Ghosal",
        duration: "4:29",
      },
      {
        id: 3,
        name: "Tum Hi Ho",
        image: img10,
        file: song10,
        artist: "Arijit Singh",
        duration: "4:14",
      },
    ],
    desc: "When silence needed a voice, Arijit sang.",
    bgColor: "#f19b5f",
  },
  {
    id: 1,
    name: "Atif Aslam",
    image: artist2,
    songsList: [
      {
        id: 0,
        name: "Dil Diyan Gallan",
        image: img3,
        file: song3,
        artist: "Atif Aslam",
        duration: "4:20",
      },
      {
        id: 1,
        name: "Tere Sang Yara",
        image: img11,
        file: song11,
        artist: "Atif Aslam",
        duration: "4:51",
      },
      {
        id: 2,
        name: "Dil Diyan Gallan",
        image: img3,
        file: song3,
        artist: "Atif Aslam",
        duration: "4:20",
      },
    ],
    desc: "Every song, a heartbeat. Every lryic, a feeling -only Atif.",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    name: "Shreya Ghosal",
    image: artist3,
    songsList: [
      {
        id: 0,
        name: "Samjahwan",
        image: img6,
        file: song6,
        artist: "Arijit Singh, Shreya Ghosal",
        duration: "4:29",
      },
      {
        id: 1,
        name: "Sun Raha Hai",
        image: img7,
        file: song7,
        artist: "Shreya Ghosal",
        duration: "5:14",
      },
      {
        id: 2,
        name: "Main Honn Na",
        image: img8,
        file: song8,
        artist: "Sonu Nigam, Shreya Ghosal",
        duration: "6:1",
      },
    ],
    desc: "A voice that melts hearts and stirs the soul - Shreya Ghosal",
    bgColor: "#63154b",
  },
];
