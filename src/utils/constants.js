export const genres = [
  { value: "Action", text: "Action" },
  { value: "Adventure", text: "Adventure" },
  { value: "Animation", text: "Animation" },
  { value: "Biography", text: "Biography" },
  { value: "Comedy", text: "Comedy" },
  { value: "Crime", text: "Crime" },
  { value: "Documentary", text: "Documentary" },
  { value: "Drama", text: "Drama" },
  { value: "Family", text: "Family" },
  { value: "Fantasy", text: "Fantasy" },
  { value: "Film-Noir", text: "Film Noir" },
  { value: "Game-Show", text: "Game Show" },
  { value: "History", text: "History" },
  { value: "Horror", text: "Horror" },
  { value: "Music", text: "Music" },
  { value: "Musical", text: "Musical" },
  { value: "Mystery", text: "Mystery" },
  { value: "News", text: "News" },
  { value: "Reality-TV", text: "Reality TV" },
  { value: "Romance", text: "Romance" },
  { value: "Sci-Fi", text: "Sci Fi" },
  { value: "Short", text: "Short" },
  { value: "Sport", text: "Sport" },
  { value: "Talk-Show", text: "Talk Show" },
  { value: "Thriller", text: "Thriller" },
  { value: "War", text: "War" },
  { value: "Western", text: "Western" },
];

export const main_filter = [
  { value: "most_pop_movies", text: "Most pop movies" },
  { value: "most_pop_series", text: "Most pop series" },
  { value: "top_boxoffice_200", text: "Top boxoffice 200" },
  {
    value: "top_boxoffice_last_weekend_10",
    text: "Top boxoffice last weekend ",
  },
  { value: "top_rated_250", text: "Top rated" },
  { value: "top_rated_english_250", text: "Top rated english" },
  { value: "top_rated_lowest_100", text: "Top rated lowest" },
  { value: "top_rated_series_250", text: "Top rated series" },
  { value: "titles", text: "Titles" },
];

export const convertMonthToText = (num) => {
  let month;
  switch (num) {
    case 1:
      month = "January";
      break;

    case 2:
      month = "February";
      break;

    case 3:
      month = "March";
      break;

    case 4:
      month = "April";
      break;

    case 5:
      month = "May";
      break;

    case 6:
      month = "June";
      break;

    case 7:
      month = "July";
      break;

    case 8:
      month = "August";
      break;

    case 9:
      month = "September";
      break;

    case 10:
      month = "October";
      break;

    case 11:
      month = "November";
      break;

    case 12:
      month = "December";
      break;

    default:
      month = "January";
      break;
  }

  return month;
};
