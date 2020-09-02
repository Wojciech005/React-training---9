class App extends React.Component {
    state = { 
        items: [
            { id: 1, name: "tea", active: true },
            { id: 2, name: "tomatoes", active: false },
            { id: 3, name: "pasta", active: false },
            { id: 4, name: "apple jam", active: true },
            { id: 5, name: "sparkling water", active: false },
            { id: 6, name: "bread", active: false },
        ]
     }


     handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if(id === item.id) {
                item.active = !item.active
            }
            return item
        })
        this.setState({
            items: items
        })
     }
    render() { 
        return ( 
            <React.Fragment>
                <Header items = {this.state.items}/>
                <ListItems items = {this.state.items} changeStatus={this.handleChangeStatus}/>
            </React.Fragment>
         );
    }
}
 
