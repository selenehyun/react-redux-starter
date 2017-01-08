import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user-action';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onRowSelect,
            onSelectAll: this.onSelectAll
        };
        
    }
    
    componentWillMount() {
        this.props.fetchUsers();
    }

    componentDidMount() {
        
    }

    onRowSelect(row, isSelected, e) {
        if(isSelected) {

        }
    }

    onSelectAll(isSelected, rows) {
        console.log(isSelected, rows)
    }
     
    render() { 
        return (
            <div>
                <h1 className="page-header">Products</h1>
                <BootstrapTable data={this.props.user.users} striped hover selectRow={ this.selectRowProp }>
                    <TableHeaderColumn isKey dataField='id' dataSort={ true }>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={ true }>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' dataSort={ true }>phone</TableHeaderColumn>
                    <TableHeaderColumn dataField='address' dataSort={ true }>address</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

ProductTable.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);