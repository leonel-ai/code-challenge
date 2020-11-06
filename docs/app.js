const API_KEY = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const form = document.querySelector('#searchForm');
const criteria = document.querySelector('#select');
const list = document.querySelector('#searchResults');
const listLabel = document.querySelector('#resultsLabel');

// GET all the latest public data from API and store into var
const getScienceData = async() => {
  try {
    const res = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    const resultsArr = res.data.results;
    var sections = '';
    var scienceData = [];

    for (var i = 0; i < resultsArr.length; i++) {
      sections = resultsArr[i].section;
      if (sections == 'science') {
        scienceData.push(resultsArr[i]);
      }
    }
    return scienceData;
  } catch(e) {
    return `Nope! Could not retrieve the data. ${e}`;
  }
};

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
};

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
};

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
};

// filter by Titles
const filterTitles = async (q, d) => {
  try {
    let titles = await getTitles(d);
    showResults(titles[1].title); // TEMP JUST FOR OUTPUT TESTING
  } catch(e) {
    console.log(`No titles found: ${e}`);
  }
};

// filter by Sections
const filterSections = async (q, d) => {
  try {
    // let sections = await getSections();
  } catch(e) {
    console.log(`No sections found: ${e}`);
  }
};

// filter by Bylines
const filterBylines = async (q, d) => {
  try {
    // let bylines = await getBylines();
  } catch(e) {
    console.log(`No bylines found: ${e}`);
  }
};

const filterData = async (data, query) => {
  try {
    // decide case by filter
    // switch (filterBy) {
    //   // then pass clean terms and data to find matches
    //   case 'title':
    //     filterTitles(searchQuery, sortedData);
    //     break;
    //   case 'section':
    //     filterSections(searchQuery, sortedData);
    //     break;
    //   case 'byline':
    //     filterBylines(searchQuery, sortedData);
    //     break;
    //   default:
    //     break;
    // }
  } catch(e) {
    console.log(`Could not filter stories by ${filter}. ${e}`)
  }
};

const sortByFilter = async (data, filter) => {
  try {
    console.log(data);
  } catch(e) {
    console.log(`Could not sort by ${filter}. ${e}`);
  }
};

// show results
const showResults = (res) => {
  try {
    const newLI = document.createElement('li');
    const newLink = document.createElement('a');
    listLabel.classList.toggle('active');
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
  // test for special characters
  const regex = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

  if (!regex.test(str)) {
    str.toLowerCase();
    // test if returning array of strings
    if ( /\s/.test(str)) {
      return str.split(" ");
    } else {
      return str;
    }
  }
};

// CAPTURE SEARCH TERMS AND RETURN MATCHES ON FORM INPUT
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const localData = await getScienceData();

    // clear previous results
    clearResults();
    // capture user input
    const formInput = form.elements.query.value;
    // clean up terms
    const searchQuery = await handleStr(formInput);
    console.log(searchQuery);
    // capture filter
    // const filterBy = criteria.value ? criteria.value : '';
    // send data to get cleaned up and sorted by filter
    // const sortedData = await sortByFilter(localData, filterBy);
    // const sortedData = await filterData(storyData, searchQuery);

    // // decide case by filter
    // switch (filterBy) {
    //   // then pass clean terms and data to find matches
    //   case 'title':
    //     filterTitles(searchQuery, sortedData);
    //     break;
    //   case 'section':
    //     filterSections(searchQuery, sortedData);
    //     break;
    //   case 'byline':
    //     filterBylines(searchQuery, sortedData);
    //     break;
    //   default:
    //     break;
    // }
  });
}