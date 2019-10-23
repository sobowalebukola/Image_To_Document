import React, { Component } from "react";
import "./App.css";
import Tesseract from "tesseract.js";
import { Link } from "react-router-dom";

var styles = {
  background: "#00F260", /* fallback for old browsers */
background: "-webkit-linear-gradient(to right, #0575E6, #00F260)",  /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #0575E6, #00F260)" ,/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: "60px",
marginTop: "28px",
borderRadius: "17px",
fontSize: "25px"
}
var pic = {
  marginTop: "28px",
  alignItems : "center",
  display: "flex",
  justifyContent: "center"
}
var text = {
  color: "#0575e6",
  fontFamily  : "cursive"
}
var ren = {
  marginRight: "4px"
}
var result  = {
  marginLeft  : "15px"
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: [],
      patterns: [],
      documents: []
    };
  }
  handleChange = event => {
    if (event.target.files[0]) {
      var uploads = [];
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue;
        let upload = event.target.files[key];
        uploads.push(URL.createObjectURL(upload));
      }
      this.setState({
        uploads: uploads
      });
    } else {
      this.setState({
        uploads: []
      });
    }
  };
  generateText = () => {
    let uploads = this.state.uploads;

    for (var i = 0; i < uploads.length; i++) {
      Tesseract.recognize(uploads[i], {
        lang: "eng"
      })
        .catch(err => {
          console.error(err);
        })
        .then(result => {
          // Get Confidence score
          let confidence = result.confidence;

          // Get full output
          let text = result.text;

          // Get codes
          let pattern = /\b\w{10,10}\b/g;
          let patterns = result.text.match(pattern);

          // Update state
          this.setState({
            patterns: this.state.patterns.concat(patterns),
            documents: this.state.documents.concat({
              pattern: patterns,
              text: text,
              confidence: confidence
            })
          });
        });
    }
  };
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 style  = { text}>Converts Image to Text</h1>
        </header>

        <section className="hero">
          <label className="fileUploaderContainer">
            Click here to upload documents
            <input
              type="file"
              id="fileUploader"
              onChange={this.handleChange}
              multiple
            />
          </label>

          <div style = {pic}>
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" alt="needed" style = {ren} />;
            })}
          </div>

          <button onClick={this.generateText} className="button" style ={styles} >
            Generate
          </button>
        </section>

        {/* Results */}
        <section className="results">
          {this.state.documents.map((value, index) => {
            return (
              <div key={index} className="results__result">
                <div className="results__result__image">
                  <img
                    src={this.state.uploads[index]}
                    width= "150px"
                    alt="doc"
                  />
                </div>
                  <div style = { result }>
                    <small>
                      <strong>Image Text:</strong> {value.text}
                    </small>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
