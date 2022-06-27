import Head from "next/head";
import config from "../../config";

type HeadTagProps = {
  title?: string;
};

const HeadTag = (props: HeadTagProps) => {
  const suffix = props.title ? `| ${config.app.name}` : '';
  let title = props.title || `${config.app.name}: ${config.app.slogan}`;
  if (suffix != '') title = `${title} ${suffix}`;

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta content={config.app.description} name="description"/>
      </Head>
    </>
  );
};

export default HeadTag;
