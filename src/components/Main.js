import React from "react";
import HornedBeasts from "./HornedBeasts";
import array from './data.json';

class Main extends React.Component {
    render() {
        let newArray = array.map((element, index) => {
            return (<HornedBeasts 
                key={index}
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
                horns={element.horns}/>);
        });
        return (
            <>
                {newArray}
            </>
        );
    }
}
export default Main;