import axios from "axios";

const apikey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  articleQuery: function (req, res) {
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=" +
    //   topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";

    // NY Times API get request
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          apikey: apikey,
          q: req.topic,
          begin_date: req.startYear + "0101",
          end_date: req.endYear + "1231"
        }
      })
      // .then( (results) => res.json(results))
      // .catch(err => res.status(422).json(err));
  },

  getArticles: function () {
    return axios.get("/api/articles")
      .then(function (results) {
        return results;
      });
  },

  deleteBook: function (id) {
    return axios.delete("/api/articles/" + id)
      .then(function (results) {
        return results;
      });
  },

  saveArticle: function (title, date, url) {
    var newArticle = {
      title: title,
      date: date,
      url: url
    };
    console.log(newArticle);
    return axios.post("/api/articles", newArticle)
      .then(function (response) {
        return response.data._id;
      });
  }
};
