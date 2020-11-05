const API_KEY = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const form = document.querySelector('#searchForm');
const criteria = document.querySelector('#select');
const list = document.querySelector('#searchResults');
const storyData = [];

// GET all the latest public data from API and store into var
const getPublicData = async() => {
  try {
    const res = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    storyData = res.data.results;
    return storyData;
  } catch(e) {
    return `Nope! ${e}`;
  }
}

getPublicData(); // init call

// retrieve titles
const getTitles = async() => {
  try {
    var localStoryData = storyData;
    const titleData = localStoryData.filter((story) => {
      return story.title;
    });
    return titleData; // still need to make sure these are checked by RegEx and sanitized before filtering against queries
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// retrieve sections
const getSections = async() => {
  try {
    var localStoryData = storyData;
    const sectionData = localStoryData.filter((story) => {
      return story.section;
    });
    return sectionData; // same as titleData
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// retrieve bylines
const getBylines = async() => {
  try {
    var localStoryData = storyData;
    const bylineData = localStoryData.filter((story) => {
      return story.byline;
    });
    return bylineData; // same as title and section above
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// filter by Titles
const filterTitles = async (q) => {
  try {
    let titles = await getTitles();
    console.log(titles);
  } catch(e) {
    console.log(`No titles found: ${e}`);
  }
}

// filter by Sections
const filterSections = async (q) => {
  try {
    let sections = await getSections();
  } catch(e) {
    console.log(`No sections found: ${e}`);
  }
}

// filter by Bylines
const filterBylines = async (q) => {
  try {
    let bylines = await getBylines();
  } catch(e) {
    console.log(`No bylines found: ${e}`);
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

// basic checks on user input
const validateTerms = (term) => {
  const regex = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); // test for special characters

  if (regex.test(term)) {
    alert('Please retry your search without special characters.'); // temp, replace with DOM feedback
  } else {
    term.toLowerCase();

    if ( /\s/.test(term)) {
      const terms = term.split(" ");
      return terms;
    } else {
      return term;
    }
  }
};

// capture user input and search criteria
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // clear previous results display here

    // save terms and query
    const searchTerm = form.elements.query.value;
    const searchQuery = await validateTerms(searchTerm);

    // decide case by filter option
    const filterBy = criteria.value ? criteria.value : 'title';
    switch (filterBy) {
      case 'title':
        filterTitles(searchQuery);
        break;
      case 'section':
        filterSections(searchQuery);
        break;
      case 'byline':
        filterBylines(searchQuery);
        break;
      default:
        break;
    }
  });
}