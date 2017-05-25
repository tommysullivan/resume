import * as React from "react";
import { Row, Column } from "./bootstrap";

interface PersonData {
    firstName:string,
    lastName:string,
    favoriteColors:string[]
}

const mikesFavoritePeople:PersonData[] = [
    {
        firstName: "Tommy",
        lastName: "Sullivan",
        favoriteColors: ["red",'blue']
    },
    {
        firstName: "Bobby",
        lastName: "Chen",
        favoriteColors: ["green",'orange']
    }
]

const words = ["hi","bye",'hello','goodbye'];
const siteStyle = {padding: '20px', border: '5px'};
export const Site = () => <div style={siteStyle}>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
        </div>
    </nav>
    <h1>Mike Chen Resume</h1>
    <h2>Favorite People:</h2>
    <Row>
        {words.map(word => <Column columnWidthForMediumScreen={5} ><p>{word}</p></Column>)}
    </Row>
    <ul>
        {mikesFavoritePeople.map(person => <li key={person.firstName}><Person person={person} /></li>)}
    </ul>
</div>

export interface PersonProps {
    person:PersonData
}

export const Person = (props:PersonProps) => <div>
    <h4>{props.person.firstName} {props.person.lastName}</h4>
    <ul>
        {props.person.favoriteColors.map(color => <li key={color}>{color}</li>)}
    </ul>
</div>