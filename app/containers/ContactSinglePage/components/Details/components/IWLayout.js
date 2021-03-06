import React from 'react';
import DetailsHeaderLayout from './HeaderLayout';
import { stringToText, formatDate, formatPhone } from '../../../../../utils/common';
import { contactTypeLabelByValue } from '../../../../ContactsPage/config';

const IWLayout = (props) => (
  <div>
    <DetailsHeaderLayout data={props.data} />
    <table className="two-equal-columns" style={{ maxWidth: '281px' }}>
      <tbody>
        <tr>
          <td colSpan={2}>
            <div className="m-b-md">
              <div className="text-bold">Type</div>
              <div>{stringToText(contactTypeLabelByValue(props.data.contactType))}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="m-b-md">
              <div className="text-bold">Cell Number</div>
              <div>{stringToText(formatPhone(props.data.primaryPhoneNumberType, props.data.primaryPhoneNumber, props.data.primaryPhoneNumberExtension))}</div>
            </div>
          </td>
          <td>
            <div className="m-b-md">
              <div className="text-bold">Home Number</div>
              <div>{stringToText(formatPhone(props.data.secondaryPhoneNumberType, props.data.secondaryPhoneNumber, props.data.secondaryPhoneNumberExtension))}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="m-b-md">
              <div className="text-bold">Email</div>
              <div>{stringToText(props.data.email)}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="m-b-md">
              <div className="text-bold">Date of Birth</div>
              <div>{stringToText(formatDate(props.data.dateOfBirth))}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="m-b-md">
              <div className="text-bold">Address</div>
              <div>{stringToText(props.data.address)}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div>
              <div className="text-bold">Description</div>
              <div>{stringToText(props.data.description)}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default IWLayout;
