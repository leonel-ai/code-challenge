const API_KEY = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const form = document.querySelector('#searchForm');
const criteria = document.querySelector('#select');
const list = document.querySelector('#searchResults');

// GET all the latest public data from API and store into var
const getPublicData = async() => {
  try {
    const res = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    return res.data.results;
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// retrieve titles
const getTitles = async(storyData) => {
  try {
    var localData = [...storyData];
    const titleData = localData.filter((story) => {
      return story.title;
    });
    return titleData; // still need to make sure these are checked by RegEx before filtering against queries

  } catch(e) {
    return `Nope! ${e}`;
  }
}

// retrieve sections
const getSections = async(storyData) => {
  try {
    var localData = [...storyData];
    const sectionData = localData.filter((story) => {
      return story.section;
    });
    return sectionData; // same as titleData
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// retrieve bylines
const getBylines = async(storyData) => {
  try {
    var localData = [...storyData];
    const bylineData = localData.filter((story) => {
      return story.byline;
    });
    return bylineData; // same as title and section above
  } catch(e) {
    return `Nope! ${e}`;
  }
}

// filter by Titles
const filterTitles = async (q, d) => {
  try {
    let titles = await getTitles(d);
    showResults(titles[1].title); // TEMP JUST FOR OUTPUT TESTING
  } catch(e) {
    console.log(`No titles found: ${e}`);
  }
}

// filter by Sections
const filterSections = async (q, d) => {
  try {
    // let sections = await getSections();
  } catch(e) {
    console.log(`No sections found: ${e}`);
  }
}

// filter by Bylines
const filterBylines = async (q, d) => {
  try {
    // let bylines = await getBylines();
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
    const storyData = await getPublicData();

    // clear previous results display here

    // save terms and query
    const searchTerm = form.elements.query.value;
    const searchQuery = await validateTerms(searchTerm);

    // decide case by filter option
    const filterBy = criteria.value ? criteria.value : '';
    switch (filterBy) {
      case 'title':
        filterTitles(searchQuery, storyData);
        break;
      case 'section':
        filterSections(searchQuery, storyData);
        break;
      case 'byline':
        filterBylines(searchQuery, storyData);
        break;
      default:
        break;
    }
  });
}