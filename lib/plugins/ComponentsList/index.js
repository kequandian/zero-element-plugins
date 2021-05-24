import React, { useState, useEffect } from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';
import ComponentsItem from "./ComponentsItem";

import promiseAjax from 'zero-element-boot/lib/components/utils/request';

export default function ComponentsList(props) {
  const api = "/api/ComponentsList";
  const [data, setData] = useState([]);

  function handleQuery(API, queryData) {
    return promiseAjax(API, queryData).then(response => {
      if (response && response.code == 200) {
        setData(response.data);
      }
    });
  }

  useEffect(_ => {
    handleQuery(api);
  }, []);
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "column"
      },
      gateway: {
        xname: "Binding",
        props: {
          binding: {
            title: "title",
            text: "text"
          }
        }
      },
      cart: {
        xname: "ItemCart",
        props: {}
      },
      container: "PlainList"
    },
    items: data
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ComponentsList"
  }, /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(ComponentsItem, null)));
}