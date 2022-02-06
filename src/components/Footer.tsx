import { FunctionComponent } from 'react';

interface IFooterProps {
}

const Footer: FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="navFooter">
      <span className="navFooterText">Copyright@2022 - Dean Carlo Pinlac </span>
      <span>| using ReactV17 - ReactRouterV6 - Typescript - MaterialUI</span>
    </div>
  );
};

export default Footer;
