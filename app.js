const API_KEY = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const form = document.querySelector('#searchForm');
const criteria = document.querySelector('#select');
const list = document.querySelector('#searchResults');

// get latest public data from API and store into var
const getPublicData = async() => {
  try {
    const res = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    const storyData = res.data.results;
    return storyData;
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// search by Title, Section, and Byline
const searchAny = async () => {
  try {
    const storyData = await getPublicData();
    for (var i = 0; i < storyData.length; i++ ) {
      // switch()
    }
  } catch(e) {
    console.log(`Title not found: ${e}`);
  }
}

// search by Title
const searchTitles = async () => {
  try {
    const storyData = await getPublicData();
    for (var i = 0; i < storyData.length; i++ ) {
      // switch()
    }
  } catch(e) {
    console.log(`Title not found: ${e}`);
  }
}


// search by Sections
const searchSections = async () => {
  try {
    const storyData = await getPublicData();
    for (var i = 0; i < storyData.length; i++ ) {
      // switch()
    }
  } catch(e) {
    console.log(`Section not found: ${e}`);
  }
}


// search by Bylines
const searchBylines = async () => {
  try {
    const storyData = await getPublicData();
    for (var i = 0; i < storyData.length; i++ ) {

    }
  } catch(e) {
    console.log(`Byline not found: ${e}`);
  }
}


// display results
const showResults = (res) => {
  try {
    const newLI = document.createElement('li');
    newLI.append(res);
    list.append(newLI);
  } catch(e) {
    console.log(`Wrong: ${e}`)
  }
};

// clear results
const clearResults = () => {

};

// validate user input


// capture user input and search criteria
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const searchBy = criteria.value;
    return (searchTerm, searchBy);
  });
}

// switch case by search criteria
switch (searchBy) {
  case 'any':
    // searchAny(searchTerm);
    break;
  case 'title':
    // searchTitles(searchTerm);
    break;
  case 'section':
  // searchSections(searchTerm);
    break;
  case 'byline':
   // searchBylines(searchTerm);
    break;
  default:
    //
    break;
}