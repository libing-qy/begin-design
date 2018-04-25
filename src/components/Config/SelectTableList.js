import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

export default class SelectTableList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };

  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }


  render () {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(this.props.data.length).keys()],
          });
        },
      }],
      onSelection: this.onSelection,
    };
    return(
      <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.data}></Table>
      );
  }
}
