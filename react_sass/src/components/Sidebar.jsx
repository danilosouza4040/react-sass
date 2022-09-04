import SocialNetworkContainer from './SocialNetworkContainer';
import InformationContainer from './InformationContainer';

import Avatar from '../img/d.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Danilo Nascimento" />
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
