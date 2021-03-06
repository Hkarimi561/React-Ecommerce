import React from 'react';
import { NavLink } from 'react-router-dom'
import text from '../lib/text'
import config from '../lib/config'
import * as helper from '../lib/helper'

const CheckoutSuccess = ({ order, settings }) => {
  if (order && order.items && order.items.length > 0) {
    let checkoutSuccessText = text.checkoutSuccessText.replace('{order_number}', `<b>${order.number}</b>`);
    return (
      <div className="checkout-box has-text-centered">
        <div className="content">
          <h1 className="title is-4">{text.checkoutSuccessTitle}</h1>
          <div className="notification">
            <div dangerouslySetInnerHTML={{
              __html: checkoutSuccessText
            }}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="checkout-box has-text-centered">
      </div>
    )
  }
}

export default CheckoutSuccess
