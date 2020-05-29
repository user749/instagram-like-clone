import React from "react";
import Helmet from 'react-helmet';


function SEO({title}) {
  const titleText = title ? `${title} · Instagram ` : "Instagram";

  return (
      <Helmet title={title}>
        <title>{titleText}</title>

      </Helmet>
  )
}

export default SEO;
