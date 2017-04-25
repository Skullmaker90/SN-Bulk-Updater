import React from 'react';
//import request from 'superagent';
//import Select from 'react-select';
import Datetime from 'react-datetime';

class DatetimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleonChangeEvent = this.handleonChangeEvent.bind(this);
  }

  handleonChangeEvent(e) {
    this.setState({
      value: e.format()
    });
    this.props.handleonChangeEventCallback(e.format(), this.props.indexNumber);
  }

  render() {
    return <Datetime onChange={this.handleonChangeEvent} />;
  }
}

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleonChangeEvent = this.handleonChangeEvent.bind(this);
  }
  
  handleonChangeEvent(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleonChangeEventCallback(e.target.value, this.props.indexNumber);
  }

  render() {
    return <input type="text" placeholder="Value..." onChange={this.handleonChangeEvent} />;
  }
}

class CheckboxField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleonChangeEvent = this.handleonChangeEvent.bind(this);
  }

  handleonChangeEvent(e) {
    console.log(e.target.checked);
    this.setState({
      value: e.target.checked
    });
    this.props.handleonChangeEventCallback(e.target.value, this.props.indexNumber);
  }

  render() {
    return <input type="checkbox" onChange={this.handleonChangeEvent} />;
  }
}

export const snFields = [
{
    name: "Parent",
    data: 'parent',
    type: InputField
},
{
    name: "Development Schedule Date",
    data: 'u_development_scheduled_date',
    type: DatetimePicker
},
{
    name: "Caused by Change",
    data: 'caused_by',
    type: InputField
},
{
    name: "Watch List",
    data: 'watch_list',
    type: 'inputDropdownList',
},
{
    name: "Upon Reject",
    data: 'upon_reject',
    type: InputField
},
{
    name: "Updated On",
    data: 'sys_updated_on',
    type: DatetimePicker
},
{
    name: "Approval History",
    data: 'approval_history',
    type: 'null'
},
{
    name: "Ticket Number",
    data: 'number',
    type: InputField
},
{
    name: "Resolution Notes",
    data: 'u_resolve_notes',
    type: 'textarea'
},
{
    name: "State (numeric, 1-7)",
    data: 'state',
    type: 'null'
},
{
    name: "Created By",
    data: 'sys_created_by',
    type: 'inputDropdown'
},
{
    name: "Add to Knowledge",
    data: 'knowledge',
    type: CheckboxField
},
{
    name: "Order",
    data: 'order',
    type: 'textarea'
},
{
    name: "Configuration Item",
    data: 'cmdb_ci',
    type: InputField
},
{
    name: "Impact",
    data: 'impact',
    type: 'numeric'
},
{
    name: "Is Active",
    data: 'active',
    type: CheckboxField
},
{
    name: "Work Notes List",
    data: 'work_notes_list',
    type: 'textarea'
},
{
    name: "SLA Priority",
    data: 'priority',
    type: 'numericDropdown'
},
{
    name: "Domain Path",
    data: 'sys_domain_path',
    type: InputField
},
{
    name: "Business Duration",
    data: 'business_duration',
    type: 'timeinput'
},
{
    name: "Group List",
    data: 'group_list',
    type: InputField
},
{
    name: "Show In Portal?",
    data: 'u_show_in_portal',
    type: CheckboxField
},
{
    name: "Approval Set",
    data: 'approval_set',
    type: 'null'
},
{
    name: "Short Description",
    data: 'short_description',
    type: InputField
},
{
    name: "Correlation Display",
    data: 'correlation_display',
    type: InputField
},
{
    name: "Delivery Task",
    data: 'delivery_task',
    type: 'null'
},
{
    name: "Work Start Time",
    data: 'work_start',
    type: DatetimePicker
},
{
    name: "Additional Assignee List",
    data: 'additional_assignee_list',
    type: 'null'
},
{
    name: "Initial Response Time",
    data: 'u_initial_response_time',
    type: 'null'
},
{
    name: "Notify Initiator",
    data: 'notify',
    type: 'null'
},
{
    name: "Class Name",
    data: 'sys_class_name',
    type: 'dropdown'
},
{
    name: "Create Request",
    data: 'u_create_request',
    type: CheckboxField
},
{
    name: "Closed By",
    data: 'closed_by',
    type: 'inputDropdown'
},
{
    name: "Follow Up",
    data: 'follow_up',
    type: 'null'
},
{
    name: "SCEP Group",
    data: 'u_scep_group',
    type: 'dropdown'
},
{
    name: "Customer Scheduled Date",
    data: 'u_customer_scheduled_date',
    type: DatetimePicker
},
{
    name: "Reassignment Count",
    data: 'reassignment_count',
    type: 'null'
},
{
    name: "Assigned To",
    data: 'assigned_to',
    type: 'inputDropdown',
},
{
    name: "SLA Due",
    data: 'sla_due',
    type: DatetimePicker
},
{
    name: "Comments and Work Notes",
    data: 'comments_and_work_notes',
    type: 'textarea'
},
{
    name: "Contact Preference",
    data: 'u_choice_2',
    type: 'null'
},
{
    name: "Ticket Type",
    data: 'u_choice_1',
    type: 'dropdown'
},
{
    name: "Escalation",
    data: 'escalation',
    type: 'null'
},
{
    name: "Upon Approval",
    data: 'upon_approval',
    type: 'null'
},
{
    name: "Correlation Id",
    data: 'correlation_id',
    type: InputField
},
{
    name: "Made SLA?",
    data: 'made_sla',
    type: CheckboxField
},
{
    name: "Client ID",
    data: 'u_client_id',
    type: InputField
},
{
    name: "Resolved By",
    data: 'resolved_by',
    type: 'inputDropdown'
},
{
    name: "Updated By",
    data: 'sys_updated_by',
    type: 'inputDropdown'
},
{
    name: "Opened By",
    data: 'opened_by',
    type: 'inputDropdown'
},
{
    name: "User Input",
    data: 'user_input',
    type: 'null'
},
{
    name: "Created On",
    data: 'sys_created_on',
    type: DatetimePicker
},
{
    name: "Domain",
    data: 'sys_domain',
    type: 'null'
},
{
    name: "Calendar STC",
    data: 'calendar_stc',
    type: DatetimePicker
},
{
    name: "Cmdb_ci_acc",
    data: 'u_reference_2',
    type: 'null'
},
{
    name: "Closed At",
    data: 'closed_at',
    type: DatetimePicker
},
{
    name: "Sys_user_group",
    data: 'u_reference_3',
    type: 'null'
},
{
    name: "Reference 1",
    data: 'u_reference_1',
    type: 'null'
},
{
    name: "State (Name, New-Closed)",
    data: 'u_state',
    type: 'dropdown'
},
{
    name: "Business Service",
    data: 'business_service',
    type: 'null'
},
{
    name: "RFC",
    data: 'rfc',
    type: 'null'
},
{
    name: "Time Worked",
    data: 'time_worked',
    type: 'time'
},
{
    name: "Expected Start",
    data: 'expected_start',
    type: DatetimePicker
},
{
    name: "Opened At",
    data: 'opened_at',
    type: DatetimePicker
},
{
    name: "Work End",
    data: 'work_end',
    type: DatetimePicker
},
{
    name: "Caller ID",
    data: 'caller_id',
    type: 'inputDropdown'
},
{
    name: "Resolved At",
    data: 'resolved_at',
    type: DatetimePicker
},
{
    name: "Location Test1 (Text)",
    data: 'u_location_test1',
    type: 'null'
},
{
    name: "Subcategory",
    data: 'subcategory',
    type: 'dropdown'
},
{
    name: "Work Notes",
    data: 'work_notes',
    type: 'textarea'
},
{
    name: "Assignment Group",
    data: 'assignment_group',
    type: 'inputDropdown'
},
{
    name: "Business STC",
    data: 'business_stc',
    type: DatetimePicker
},
{
    name: "Description",
    data: 'description',
    type: 'textarea'
},
{
    name: "Calendar Duration",
    data: 'calendar_duration',
    type: 'time'
},
{
    name: "Closed Notes",
    data: 'close_notes',
    type: 'textarea'
},
{
    name: "Company",
    data: 'u_company',
    type: InputField
},
{
    name: "ID",
    data: 'sys_id',
    type: 'null'
},
{
    name: "Contact Type",
    data: 'contact_type',
    type: 'dropdown'
},
{
    name: "Incident State",
    data: 'incident_state',
    type: 'numericDropdown'
},
{
    name: "Urgency",
    data: 'urgency',
    type: 'numericDropdown'
},
{
    name: "Problem ID",
    data: 'problem_id',
    type: 'null'
},
{
    name: "Company",
    data: 'company',
    type: 'null'
},
{
    name: "Response Date",
    data: 'u_response_date',
    type: DatetimePicker
},
{
    name: "Activity Due",
    data: 'activity_due',
    type: DatetimePicker
},
{
    name: "Severity",
    data: 'severity',
    type: 'numericDropdown'
},
{
    name: "Comments",
    data: 'comments',
    type: 'textarea'
},
{
    name: "Boolean 5",
    data: 'u_boolean_5',
    type: 'null'
},
{
    name: "Boolean 4",
    data: 'u_boolean_4',
    type: 'null'
},
{
    name: "Translated Text",
    data: 'u_translated_text_1',
    type: 'null'
},
{
    name: "Boolean 3",
    data: 'u_boolean_3',
    type: 'null'
},
{
    name: "Approval",
    data: 'approval',
    type: InputField
},
{
    name: "Boolean 2",
    data: 'u_boolean_2',
    type: 'null'
},
{
    name: "Send Initiator Notifications?",
    data: 'u_boolean_1',
    type: CheckboxField
},
{
    name: "Due Date",
    data: 'due_date',
    type: DatetimePicker
},
{
    name: "Mod Count",
    data: 'sys_mod_count',
    type: 'null'
},
{
    name: "Tags",
    data: 'sys_tags',
    type: InputField
},
{
    name: "Location",
    data: 'location',
    type: 'null'
},
{
    name: "Category",
    data: 'category',
    type: 'dropdown'
}];
