/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import StarIcon from 'material-ui-icons/Star';
import 'purecss/build/pure.css';

import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import './main.css';
import '../style.css';
import r_img1 from '../assets/rocket_badge_1.png';
import r_img2 from '../assets/rocket_badge_2.png';
import r_img3 from '../assets/rocket_badge_3.png';
import r_img4 from '../assets/rocket_badge_4.png';
import r_img5 from '../assets/rocket_badge_5.png';
import r_img6 from '../assets/rocket_badge_6.png';
import r_img7 from '../assets/rocket_badge_7.png';
import r_img8 from '../assets/rocket_badge_8.png';
import r_img9 from '../assets/rocket_badge_9.png';
import r_img0 from '../assets/rocket_launch.gif';



// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const timelineElements = [
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="December 20th 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img9+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Expedition 58 Launch
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Vandenberg AFB, CA, USA</h4>
    <p> NASA astronaut Anne McClain, Canadian Space Agency astronaut David Saint-Jacques and Oleg Kononenko of the Russian space agency Roscosmos launch to the International Space Station aboard the Russian Soyuz spacecraft from the Baikonur Cosmodrome in Kazakhstan..</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 26th 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img2+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Expedition 57 Landing
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Plesetsk Cosmodrome, Russian Federation</h4>
    <p> Astronauts Serena Auñón-Chancellor of NASA, Alexander Gerst of the European Space Agency (ESA), and cosmonaut Sergey Prokopyev of the Russian space agency Roscosmos, will undock their Soyuz spacecraft from the International Space Station and land in Kazakhstan.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 26th 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img6+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Lander
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Cape Canaveral, FL, USA</h4>
    <p>The Entry, Descent and Landing phase is the final plunge of the Mars InSight Lander through the Martian atmosphere. It lasts about six minutes and delivers the lander safely to the surface of the Red Planet.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 5th 2014"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img7+')'}}
  >
    <h3 className="vertical-timeline-element-title">
    Falcon 9 v1.1
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Cape Canaveral, FL, USA</h4>
    <p>An SSL built satellite planned to be operated above the equator at a longitude of 105.5 degrees East providing coverage of souther and south-eastern Asia, China and the Middle East.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 13th 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img6+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Pegasus XL
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Kwajalein Atoll</h4>
    <p>Designed to image high-energy X-ray radiation, the Nuclear Spectroscopic Telescope Array (NuSTAR) is tasked with surveying regions surrounding the center of own Milky Way Galaxy and performing deep observations of the extragalactic sky, studying black holes and supernovas.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="February 14th 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img4+')'}}
  >
    <h3 className="vertical-timeline-element-title">Proton-M/Briz-M</h3>
    <h4 className="vertical-timeline-element-subtitle">Baikonur Cosmodrome, Republic of Kazakhstan</h4>
    <p>An International Launch Services Proton rocket with a Breeze M upper stage will deploy the SES 4 satellite to provide telecommunications services over the Americas, Africa, Europe and the Middle East.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 20th 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img1+')'}}
  >
    <h3 className="vertical-timeline-element-title">Delta IV Heavy</h3>
    <h4 className="vertical-timeline-element-subtitle">Vandenberg AFB, CA, USA</h4>
    <p>Unknown mission</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 5th 2009"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img2+')'}}
  >
    <h3 className="vertical-timeline-element-title">Delta II 7920-10C</h3>
    <h4 className="vertical-timeline-element-subtitle">Vandenberg AFB, CA, USA</h4>
    <p>A satellite to demonstrate new technology for missile detection early wanring systems. Used in later operation capacities.</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 11th 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img3+')'}}

  >
    <h3 className="vertical-timeline-element-title">Ariane 5 ECA</h3>
    <h4 className="vertical-timeline-element-subtitle">Kourou, French Guiana</h4>
    <p>
      A powerful communication satellite for the French Ministry of Defence. 
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="March 24th 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img5+')'}}

  >
    <h3 className="vertical-timeline-element-title">Falcon1 - FalconSAT-2</h3>
    <h4 className="vertical-timeline-element-subtitle">Omelek Island</h4>
    <p>
      SpaceX was scheduled to launch a Falcon 1 rocket as part of the unknown mission. The launch window for the unknown mission was on Fri, Mar 24th, 2006, 5:30 PM from Omelek Island. The status of the launch was FAILED.
    </p>
  </VerticalTimelineElement>,
];

const pages = [

  {
    path: '/demo',
    title: 'Demo',

    content: () => <VerticalTimeline>{timelineElements}</VerticalTimeline>,
  },

];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>

    <Catalog
      imports={documentationImports}
      pages={pages}
      theme={{ background: 'linear-gradient(black, lightblue)' }}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />,
      }}
      title="React Vertical Timeline"
    />
  </div>,
  document.getElementById('catalog'),
);
