
class AddCust extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { d: '1' };
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.custAdd;
        const field = { name: form.name.value, number: form.number.value }
        this.props.createField(field);
        form.name.value = "";
        form.number.value = "";
    }
    goback() {
        this.setState({ d: '2' });
    }
    render() {
        return (
            <div>
                {this.state.d == '1' &&
                    <div className="add">
                        <h1>Add Customer </h1>
                        <div className="abc">
                            <form className="add_form" name="custAdd" onSubmit={this.handleSubmit}>
                                <label for="na">Enter Name to Add</label>
                                <input type="text" id="na" name="name" placeholder="Enter Name" />
                                <label for="no">Enter Number to add </label>
                                <input type="text" id="no" name="number" placeholder="Enter Number" />
                                <button id="Add_button">Add Customer</button>
                            </form>
                            <button className="goback" onClick={this.goback.bind(this)}> Go back to home page</button>
                        </div>
                    </div>
                }
                {
                    this.state.d == '2' &&
                    <div>
                        <DisplayHomepage delField={this.props.delField} createField={this.props.createField} data={this.props.data} />
                    </div>
                }
            </div >
        );
    }
}

class DelCust extends React.Component {
    constructor() {
        super();
        this.delSubmit = this.delSubmit.bind(this);
        this.state = { d: '1' };
    }

    delSubmit(e) {
        e.preventDefault();
        const form = document.forms.custDel;
        const a = Number(form.no.value)

        const field = { id: a };
        this.props.delField(field);
        form.no.value = "";
    }
    goback() {
        this.setState({ d: '2' });
    }
    render() {
        return (
            <div>
                {
                    this.state.d == '1' &&
                    <div>
                        <h1>Delete Customer</h1>
                        <div className="abc">
                            <form name="custDel" onSubmit={this.delSubmit}>
                                <label for="abc">Enter Key Number to delete</label>
                                <input id="abc" name="no" type="text" placeholder="Enter Serial"></input>
                                <button id="Del_button">Delete Customer</button>
                            </form>
                            <button onClick={this.goback.bind(this)}>Go back to home page</button>
                        </div>
                    </div>
                }
                {
                    this.state.d == '2' && <DisplayHomepage delField={this.props.delField} createField={this.props.createField} data={this.props.data} />
                }
            </div>
        );

    }
}



class DisplaySlots extends React.Component {

    render() {
        const slots = 25 - this.props.data.length;
        return (
            <div>
                <h1>Number of Free Slots :{slots}</h1>
            </div>
        );
    }
}



class CreateRow extends React.Component {
    render() {
        const t = this.props.r;
        return (
            <tr>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.number}</td>
                <td>{t.timestamp.toLocaleTimeString()}</td>
            </tr>
        );
    }
}

class CreateTable extends React.Component {

    render() {
        const rows = this.props.data.map(row => <CreateRow key={row.id} r={row} />);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class DisplayCust extends React.Component {
    constructor() {
        super();
        this.state = { d: '1' };
    }
    goback() {
        this.setState({ d: '2' });
    }

    render() {
        const t = this.props.data;
        const tab = <CreateTable data={t} />;
        return (
            < div >
                {this.state.d == '1' &&
                    <div>
                        <div>
                            <h1>Customers</h1>
                            <div>
                                {tab}
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.d == '2' && <DisplayHomepage delField={this.props.delField} createField={this.props.createField} data={t} />
                }


            </div >
        );
    }
}
class DisplayHomepage extends React.Component {

    constructor() {
        super();
        this.state = { d: '1' };
    }
    add() {
        this.setState({ d: '2' })
    }
    disp() {
        this.setState({ d: '3' });
    }

    del() {
        this.setState({ d: '4' });
    }
    render() {
        return (
            <div>
                {this.state.d == '1' &&
                    <div className="abcd">
                        <h1>Welcome to Hotel California!!!</h1>
                        <button onClick={this.add.bind(this)}>Add Customer</button>
                        <button onClick={this.del.bind(this)}>Remove Customer</button>
                    </div>
                }

                {
                    this.state.d == '2' &&
                    <div>
                        <AddCust createField={this.props.createField} data={this.props.data} delField={this.props.delField} />
                    </div>
                }

                {
                    this.state.d == '3' &&
                    <DisplayCust createField={this.createField} data={this.props.data} delField={this.props.delField} />

                }
                {
                    this.state.d == '4' &&
                    <div>
                        <DelCust delField={this.props.delField} createField={this.props.createField} data={this.props.data} />
                    </div>
                }
            </div>
        );
    }

}

function jsonDateReviver(key, value) {
    const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
    if (dateRegex.test(value)) return new Date(value);
    return value;
}

class MainClass extends React.Component {

    constructor() {
        super();
        this.state = { data: [] };
        this.createField = this.createField.bind(this);
        this.delField = this.delField.bind(this);
    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {

        const query = `query 
        {
            recList 
            {
                id
                name
                number
                timestamp            
            }
        }`;

        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const body = await response.text();
        const result = JSON.parse(body, jsonDateReviver);
        this.setState({ data: result.data.recList });
    }

    async createField(field) {

        const l = this.state.data.length;
        if (l >= 25) {
            alert("List Full")
        }

        else {
            const query = `mutation recAdd($field: recInputs!) {
            recAdd(field: $field) {
            id
            }
            }`;


            const respone = await fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, variables: { field } })
            });

            this.loadData();
        }

    }

    async delField(field) {
        const l = this.state.data.length;
        if (field.id > this.state.data.length || field.id <= 0 || isNaN(field.id)) {
            alert("Invalid Entry")
        }
        else {

            const query = `mutation recDel($field: recInd!) { recDel(field: $field) 
            {
            id
            }
            } `;

            const response = await fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, variables: { field } })
            });

            this.loadData();
        }

    }

    render() {
        return (
            <React.Fragment>
                <DisplayHomepage data={this.state.data} createField={this.createField} delField={this.delField} />
                <hr />
                <DisplayCust createField={this.createField} data={this.state.data} delField={this.delField} />
                <hr />
                <DisplaySlots data={this.state.data} />
                <hr />
            </React.Fragment >
        );
    }

}


class Disp extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <MainClass />
        );
    }
}
const element = <Disp />;
ReactDOM.render(element, document.getElementById('contents'));