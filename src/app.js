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
    options: ['1', '2']
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

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    if (count > 0) {
        count--;
        renderCounterApp()
    }
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            {count > 0 && <button onClick={minusOne}>-1</button>}
            {count > 0 && <button onClick={reset}>RESET</button>}
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();