import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";

class Home extends Component {
  state = {
    article: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      let query = {
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      };

      API.articleQuery(query)
        .then(res => {
          console.log(res.data.response.docs)
          // const articleDB = res.data.response.docs.map(article => {
          //   let item = {};
          //   let title = "headline.main";
          //   let date = "pub_date".slice(0, 10);
          //   let synopsis = "snippet";
          //   let url = "web_url";
          //   let id = "_id";

          //   item.append(title, date, synopsis, url, id);
          //   return item;
          // })
          // console.log(articleDB);
          this.setState({ articles: res.data.response.docs })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>
                New York Times Searcher
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="12 md-6">
            <form>
              <h3>Search</h3>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                className="form-group"
                disabled={!(this.state.topic) && !(this.state.startYear) && !(this.state.endYear)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="12 md-6">
            {!this.state.articles ? (
              <h3 className="text-center">No Articles to Display</h3>
            ) : (
                <List>
                  {this.state.articles.map(articles => {
                    return (
                      <ListItem
                        title={articles.headline.main}
                        date={articles.pub_date.slice(0, 10)}
                        synopsis={articles.snippet}
                        url={articles.web_url}
                        id={articles._id}
                      />
                    )
                  })}
                </List>
              )}
          </Col>
          {/* <Col size="12 md-6">
            <h3 className="border-top">Saved Articles</h3>
            {!this.state.articles ? (
              <h3 className="text-center">No Saved Articles to Display</h3>
            ) : (
                <List>
                  {this.state.articles.map(articles => {
                    return (
                      <ListItem
                        title={articles.headline.main}
                        date={articles.pub_date.slice(0, 10)}
                        synopsis={articles.snippet}
                        url={articles.web_url}
                      />
                    )
                  })}
                </List>
              )}
          </Col> */}
        </Row>
      </Container>
    )
  }
};

export default Home;
