import Script from 'next/script';
import config from "../../config";

const ScriptTag = () => <>{config.layout.scripts.map(src => <Script key={src} src={src}/>)}</>;

export default ScriptTag;
