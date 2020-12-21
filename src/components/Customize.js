import React, { Component } from "react";
import Feature from './Feature'
// import FeatureItem from './FeatureItem'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from "slugify";

// export default function Customize(props) {
//   const features = Object.keys(props.features).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const options = props.features[feature].map(item => {
//       const itemHash = slugify(JSON.stringify(item));
//       // const name = slugify(feature);

//       return (
//         <FeatureItem 
//           key={itemHash}
//           itemHash={itemHash}
//           selected={props.selected}
//           featureName={props.featureName}
//           // name={name}
//           USCurrencyFormat={props.USCurrencyFormat}
//           updateFeature={props.updateFeature}
//         />
//       );
//     });

//     return (
//       <Feature 
//         key={featureHash}
//         featureHash={featureHash}
//         feature={feature}
//         options={options}
//       />
//     );
//   });
// }

export default class Customize extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          selected={this.props.selected}
          features= {this.props.features}
          handleUpdate={this.props.handleUpdate}
        />
  </form>
    )
  }
}
