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

// // search titles
// const searchTitles = async(data, query) => {
//   try {
//     var localData = [...storyData];
//     const titleData = localData.filter((story) => {
//       return story.title;
//     });
//     return titleData; // still need to make sure these are checked by RegEx before filtering against queries

//   } catch(e) {
//     return `Nope! ${e}`;
//   }
// };

// // search bylines
// const searchBylines = async(data, query) => {
//   try {
//     var localData = [...storyData];
//     const bylineData = localData.filter((story) => {
//       return story.byline;
//     });
//     return bylineData; // same as title and section above
//   } catch(e) {
//     return `Nope! ${e}`;
//   }
// };

// // search abstracts
// const searchAbstracts = async(data, query) => {
//   try {
//     var localData = [...data];
//     const abstractData = localData.filter((story) => {
//       return story.abstract;
//     });
//     return abstractData; // same as title and section above
//   } catch(e) {
//     return `Nope! ${e}`;
//   }
// };

const sortByFilter = (data, filterBy) => {
  try {
    // remove spanish stories
    const dataENG = data.filter((item) => {
      if (!item.url.includes('\/es\/')) {
        return true;
      }
    });
    // sort case by filter selection, then clean up sorted data
    switch (filterBy) {
      case 'title':
        var allTitles = dataENG.map((item) => item.title );
        handleData(allTitles);
        break;
      // case 'byline':
      //   var allBylines = dataENG.map((item) => item.byline );
      //   handleData(allBylines);
      //   break;
      // case 'abstract':
      //   var allAbstracts = dataENG.map((item) => item.abstract );
      //   handleData(allAbstracts);
      //   break;
      default:
        break;
    }
    // for (var i = 0; i < d.length; i++) {
    //   console.log(d[i].filterBy);
    // }
  } catch(e) {
    console.log(`Could not sort by ${filterBy}. ${e}`);
  }
};

// show results
const showResults = (res) => {
  try {
    const newLI = document.createElement('li');
    const newLink = document.createElement('a');
    newLI.append(res);
    newLink.append(newLI);
    list.append(newLink);
    if (!listLabel.classList.contains('active')) {
      listLabel.classList.add('active');
    }
  } catch(e) {
    console.log(`Wrong: ${e}`);
  }
};

// clear results
const clearResults = () => {
  if (listLabel.classList.contains('active')) {
    listLabel.classList.remove('active');
  }
  list.innerHTML = '';
};

// handle strings
const handleStr = (str) => {
  try {
    const regexSC = new RegExp(/[^a-zA-Z ]/g);
    const regexWS = new RegExp(/\s/);

    // replace spaces if applicable
    if (regexWS.test(str)) {
      // create array of strings
      var arrOfStr = str.split(" ");

      const cleanStr = arrOfStr.map((item) => {
        // replace special characters
        if (regexSC.test(item)) {
          item.replace(/[^a-zA-Z ]/g, "").toLowerCase();
        } else {
          item.toLowerCase();
        }
      });
      return cleanStr;

    } else {
      if (regexSC.test(str)) {
        return str.replace(/[^a-zA-Z ]/g, "").toLowerCase();
      } else {
        return str.toLowerCase();
      }
    }
  } catch(e) {
    console.log(`Could not handle input. ${e}`);
  }
};

// handle data
const handleData = (data) => {
  try {
    const regexSC = new RegExp(/[^a-zA-Z ]/g);
    const regexWS = new RegExp(/\s/);

    const cleanData = data.map((item) => {
      if (regexWS.test(item)) {
        // create array of strings
        var arrOfStr = str.split(" ");

        const cleanStr = arrOfStr.map((item) => {
          // replace special characters
          if (regexSC.test(item)) {
            item.replace(/[^a-zA-Z ]/g, "").toLowerCase();
          } else {
            item.toLowerCase();
          }
        });
        return cleanStr;
      } else {
      // replace special characters
        if (regexSC.test(item)) {
          item.replace(/[^a-zA-Z ]/g, "").toLowerCase();
          console.log(item);
        }
        else {
          return item.toLowerCase();
          console.log(item);
        }
      }
    });
    // console.log(cleanData);
  } catch(e) {
    console.log(`Could not handle this data. ${e}`);
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
    // capture filter
    const filterBy = criteria.value ? criteria.value : '';
    // send data to get cleaned up and sorted by filter
    sortByFilter(localData, filterBy);

  });
}