// Create app object title/subtitle
// use title/subtitle in the template
// render template

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist -logical and operator
// render a new p tag if options.length >0 "here are your options" "no options"

const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: ['1','2']
}

const template =
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>

    </div>;


// Create a templateTwo var JSX expression
// div
//  h1 -> name
//  p -> age: your age
//  p -> location: city
// Render templateTwo

const user = {
    name: 'Yonatan',
    age: 44,
    location: 'Netanya'
}


function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;
    }
}

const templateTwo = (
    <div id="template2">
        <h1>{user.name ? user.name : 'Anonymus'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);