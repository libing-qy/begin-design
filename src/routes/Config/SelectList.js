import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {Row, Col} from 'antd';
import StandardTable from 'components/StandardTable';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Select.less';

import SelectSimpleForm from '../../components/Config/SelectSimpleForm';
import SelectTableList from '../../components/Config/SelectTableList';

export default class SelectList extends React.Component {


	newData() {
		let dataList = [];
		for (let i = 0; i < 15; i++) {
			dataList.push({
				key: i,
				name: `Edward King ${i}`,
				age: 32,
				address: `London, Park Lane no. ${i}`,
			});
		}
		return dataList;
	}
	render() {
		return (
			<PageHeaderLayout title="配置管理">
			<Row>
			<Col span={18} push={6}>
			<SelectTableList data={this.newData()}/>
			</Col>
			<Col span={1} push={23} />
			<Col span={5} pull={19} >
			<SelectSimpleForm >
			</SelectSimpleForm>
			</Col>
			</Row>
			</PageHeaderLayout>

			);
	}
}