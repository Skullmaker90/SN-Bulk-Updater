import request from 'superagent';
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './App.css';
import * as snFields from './Items.js';

const url = 'http://138.68.50.13:8080/';

/*
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
*/

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      passwd: '',
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginSubmitResponse = this.handleLoginSubmitResponse.bind(this);
    this.handleLoginUserChange = this.handleLoginUserChange.bind(this);
    this.handleLoginPasswdChange = this.handleLoginPasswdChange.bind(this);

  }

  handleLoginSubmitResponse(e) {
    if (e.body.status_code === 200) {
      this.props.handleLoginEventSuccess(e);
    } else {
      this.props.handleLoginEventFailure(e);
      this.setState({
        user: '',
        passwd: ''
      });
    };
  }
  
  handleLoginSubmit(e) {
    e.preventDefault();
    var handleResponse = this.handleLoginSubmitResponse
      request
      .post(url + 'login')
      .withCredentials()
      .type('form')
      .send({'username': this.state.user})
      .send({'password': this.state.passwd})
      .end(function (err, result) {
        handleResponse(result);
        console.log(err, result);
      });
    return false;
  }

  handleLoginUserChange(e) {
    this.setState({
      user: e.target.value
    });
  }

  handleLoginPasswdChange(e) {
    this.setState({
      passwd: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <label>
          Username:
          <input type="text" placeholder="Username" value={this.state.user} onChange={this.handleLoginUserChange} />
          <br />
          Password:
          <input type="password" placeholder="Password" value={this.state.passwd} onChange={this.handleLoginPasswdChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class QueryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryInput: '',
      itemList: []
    };
    this.handleQueryInputChange = this.handleQueryInputChange.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleItemListUpdate = this.handleItemListUpdate.bind(this);

  }

  handleQueryInputChange(e) {
    e.preventDefault();
    this.setState({
      queryInput: e.target.value
    });
  }

  handleQuerySubmit(e) {
    e.preventDefault();
    var handleItemListUpdate = this.handleItemListUpdate
    var query = this.state.queryInput;
    request
      .post(url)
      .withCredentials()
      .type('form')
      .send({'query': query})
      .end(function (err, result) {
        handleItemListUpdate(result.body.result);
        console.log(err, result);
    });
    return false;
  }

  handleItemListUpdate(iList) {
    this.setState({
      itemList: iList
    });
  }

  render() {
    return (
      <div id="QueryContainer">
        <QueryInput handleQueryInputChange={this.handleQueryInputChange} handleQuerySubmit={this.handleQuerySubmit} value={this.state.queryInput} />
        <QueryInfo itemList={this.state.itemList} />
      </div>
    );
  }
}

function QueryInput(props) {
  return (
    <form onSubmit={props.handleQuerySubmit}>
      <label>
        Query:
        <input type="text" placeholder="Query..." value={props.value} onChange={props.handleQueryInputChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

class QueryInfo extends React.Component {
  constructor(props) {
    super(props);

    this.ListItem = this.ListItem.bind(this);
    this.ItemList = this.ItemList.bind(this);
  }

  ListItem(props) {
    return <li>{props.value}</li>;
  }

  ItemList(props) {
    const items = this.props.itemList;
    const listItems = items.map((item) =>
        <this.ListItem key={item.sys_id} value={item.short_description} />
    );
    return (
        <ul>
          {listItems}
        </ul>
    );
  }
  render() {
    return <this.ItemList />;
  }
}

class FieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTableList: [],
    };

    this.handleFieldDropdownOnclick = this.handleFieldDropdownOnclick.bind(this);
    this.handleonChangeEventCallback = this.handleonChangeEventCallback.bind(this);
  }

  handleFieldDropdownOnclick(val) {
    var newList = this.state.fieldTableList;
    newList.push({ data: val.value, name: val.label, type: val.type, value: '', indexNumber: null });
    this.setState({
      fieldTableList: newList
    });
  }

  handleonChangeEventCallback(newValue, indexNumber) {
    const items = this.state.fieldTableList;
    items[indexNumber].value = newValue;
    this.setState({
      fieldTableList: items
    });
  }

  render() {
    return (
        <div id="FieldContainer">
          <FieldSearchDropdown handleFieldDropdownOnclick={this.handleFieldDropdownOnclick} />
          <FieldTable fieldRowItems={this.state.fieldTableList} handleonChangeEventCallback={this.handleonChangeEventCallback} />
        </div>
    );
  }
}

class FieldSearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  getOptions() {
    var List = snFields.snFields;
    var ListNew = [];
    for (var i in List) {
      if (List[i].type !== 'null') {
        ListNew.push({ value: List[i].data, label: List[i].name, type: List[i].type });
      };
    }
    return ListNew;
  }

  logChange(val) {
    console.log("Selected: " + val.value);
  }

  render(options) {
    return (
        <div>
          <Select name='fieldSearchListDropdown' value='one' options={this.getOptions()} onChange={this.props.handleFieldDropdownOnclick} />
        </div>
    );
  }
}

class FieldTable extends React.Component {
  constructor(props) {
    super(props);

    this.RowItem = this.RowItem.bind(this);
  }

  RowItem(props) {
    var dataItem = props.item;
    var InputType = React.createElement(dataItem.type, {indexNumber: dataItem.indexNumber, handleonChangeEventCallback: this.props.handleonChangeEventCallback})
    return (
        <div>
            {dataItem.name}
            {' '}
            {InputType}
        </div>
    );
  }

  fieldTable(props) {
    const listItems = props.items;
    var fieldTableRows = listItems.map((item, i) =>
        item.indexNumber = i
    );
    fieldTableRows = listItems.map((item) =>
      <props.RowItem key={item.name} item={item} indexNumber={item.indexNumber} />
    );
    return (
        <div>
          <span>
            Name
            Value
          </span>
          {fieldTableRows}
        </div>
    );
  }
  render() {
    return (
      <div>
        <this.fieldTable items={this.props.fieldRowItems} RowItem={this.RowItem} />
      </div>
    );
  }
}

class FieldApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleLoginEventSuccess = this.handleLoginEventSuccess.bind(this);
    this.handleLoginEventFailure = this.handleLoginEventFailure.bind(this);

  }

  handleLoginEventSuccess(e) {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLoginEventFailure(e) {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <div>
          <span><QueryContainer /></span>
          <span><FieldContainer /></span>
        </div>
      );
    } else {
      return <LoginForm handleLoginEventSuccess={this.handleLoginEventSuccess} handleLoginEventFailure={this.handleLoginEventFailure}/>;
    }
  }
}

export default FieldApp;
