const API_KEY = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const form = document.querySelector('#searchForm');
const criteria = document.querySelector('#select');
const list = document.querySelector('#searchResults');
const listLabel = document.querySelector('#resultsLabel');

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
    listLabel.classList.toggle('active');
    const newLI = document.createElement('li');
    const newLink = document.createElement('a');
    newLI.append(res);
    newLink.append(newLI);
    list.append(newLink);
  } catch(e) {
    console.log(`Wrong: ${e}`);
  }
};

// clear results
const clearResults = () => {
  listLabel.classList.toggle('active');
  list.innerHTML = '';
};

// handle strings
const handleStr = (str) => {
  const regex = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); // test for special characters

  if (regex.test(str)) {
    alert('Please retry your search without special characters.'); // temp, replace with DOM feedback
  } else {
    str.toLowerCase();
    if ( /\s/.test(str)) {
      const termsArr = str.split(" ");
      return termsArr;
    } else {
      return termStr;
    }
  }
};

// capture user input and search criteria
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const storyData = await getPublicData();

    // clear previous results display here
    clearResults();

    // save search terms
    const searchTerm = form.elements.query.value;
    const searchQuery = await handleStr(searchTerm);

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