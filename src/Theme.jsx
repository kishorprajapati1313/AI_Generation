import React from 'react'

export const GlobleVariable = {
  Backend_url: import.meta.env.VITE_BACKEND_URL,
  React_api: import.meta.env.VITE_STABLE_DEFFUSION_API,

}

const Theme = {
  primary: {
    100: '#201f31',
    10: '#2b2a3c',
  },

  secondary: {
    100: "#71a3c1",
  },

  white:{
    100:"white",
  },
  
  grey:{
    100: "grey"
  }  
}

export default Theme

