// Create app object title/subtitle
// use title/subtitle in the template
// render template

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist -logical and operator
// render a new p tag if options.length >0 "here are your options" "no options"


const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const numbers = [55, 101, 1000];

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndicisionApp();
    }
    console.log('form submitted', app.options);
}

const resetOptions = () => {
    app.options = [];
    renderIndicisionApp();
}



const renderIndicisionApp = () => {
    const template =
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            {app.options.length > 0 &&
                <button onClick={resetOptions}>Remove all</button>
            }
            {
                app.options.length > 0 &&
                <ol>
                    {
                        app.options.map((option, index) => {
                            return <li data-key={index} key={index}>option:{option}</li>
                        })}
                </ol>
            }


            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>add option</button>
            </form>
        </div>;
    ReactDOM.render(template, appRoot);
}

renderIndicisionApp();