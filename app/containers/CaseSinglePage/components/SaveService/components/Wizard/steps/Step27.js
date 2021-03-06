import React from 'react';
import extend from 'lodash/extend';
import { Button, Col, InputNumber, Row, Select } from 'antd';
import Form from '../../../../../../../components/Core/Form';
import Footer from '../Footer';
import { valueOrUndefined } from '../../../../../../../utils/common';

class Step extends React.Component {
  state = this.props.initialValues ? this.props.initialValues.toJS() : {
    walkthrough: {},
  };

  onSubmit = (values) => this.props.onSubmit(values, this.props.form);

  onDoYouHaveOneChange = (MSA) => this.setState({ walkthrough: extend(this.state.walkthrough, { MSA }) });

  render() {
    const { form, visible, stepIsActive, step } = this.props;
    const { getFieldDecorator } = form;
    const style = visible ? {} : { display: 'none' };

    if (!stepIsActive(step)) {
      return null;
    }

    return (
      <Form form={form} layout="vertical" hideRequiredMark onSubmit={this.onSubmit} style={style} shouldValidate={false}>
        {!this.props.initialValues ? (
          <Button className="btn-in-header" type="primary" size="large" htmlType="submit" onClick={this.props.onRequestedStatusChange} value="draft">Save Draft</Button>
        ) : null}
        <Row gutter={20}>
          <Col span={12}>
            <div className="form-step-title m-b-xxl">Confirm MSA</div>
            <Form.Item label="Do you have an MSA">
              {getFieldDecorator('walkthrough.MSA', {
                initialValue: valueOrUndefined(this.state.walkthrough.MSA)
              })(
                <Select
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="Select yes or no"
                  optionFilterProp="children"
                  onChange={this.onDoYouHaveOneChange}
                >
                  <Select.Option value={1}>Yes</Select.Option>
                  <Select.Option value={0}>No</Select.Option>
                </Select>
              )}
            </Form.Item>
            {(this.state.walkthrough.MSA ? (
              <Form.Item label="MSA Amount">
                {getFieldDecorator('walkthrough.MSAAmount', {
                  initialValue: this.state.walkthrough.MSAAmount
                })(
                  <InputNumber
                    size="large"
                    style={{ width: '100%' }}
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '').toString()}
                    optionFilterProp="children"
                    placeholder="MSA Amount"
                  />
                )}
              </Form.Item>
            ) : null)}
          </Col>
        </Row>

        <Footer percent={90} goBack={this.props.goBack} step={step} lastStep={false} onSubmitClick={this.props.onRequestedStatusChange} />
      </Form>
    );
  }
}

export default Form.create()(Step);
