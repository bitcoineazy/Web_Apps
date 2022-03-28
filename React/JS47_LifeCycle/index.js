const propsValues = {
    title: "Список группы",
    items: [
        "Студент 1",
        "Студент 2",
        "Студент 3",
        "Студент 4",
        "Студент 5",
        "Студент 6"
    ]
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //вызов после рендеринга компонента
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //вызов перед удалением компонента из DOM
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Часы </h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById("clock")
)

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};
        this.press = this.press.bind(this);
        console.log("constructor");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }

    componentWillMount() {
        console.log("componentWillMount() - вызов перед рендерингом компонента");
    }

    componentDidMount() {
        console.log("componentDidMount() - вызов после рендеринга компонента");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount() - вызов перед удалением компонента из DOM");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate() - вызов каждый раз при обновлении объекта props или state");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate() - вызов перед обновлением компонента ");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate() - вызов сразу после обновления компонента (если shouldComponentUpdate возвращает true)");
    }

    press() {
        const className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }

    render() {
        console.log("render() - рендер");
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <ClickButton />,
    document.getElementById("lifecycle")
)

class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}

class SearchPlugin extends React.Component{
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        const text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}

class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        const filteredList = this.props.data.items.filter(function (item) {
            return item.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({items: filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("search")
)