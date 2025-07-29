import './Icon.scss';
import icons from '../../../data/icons.json'


export const Icon = ({ icon }) => {
  return <img className="icon" src={icons[icon].path} alt={icons[icon].title} />;
};