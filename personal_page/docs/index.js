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
import r_img0 from '../assets/rocket_launch.gif';



// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const timelineElements = [
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img5+')'}}
    //icon={<img width={40} src = {require('../assets/rocket_badge_1.png')}/> }
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img3+')'}}

  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img2+')'}}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img1+')'}}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img4+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Content Marketing for Web, Mobile and Social Media
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>Strategy, Social Media</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img6+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Agile Development Scrum Master
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>Creative Direction, User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundSize: 'cover', backgroundImage : 'url('+r_img7+')'}}
  >
    <h3 className="vertical-timeline-element-title">
      Bachelor of Science in Interactive Digital Media Visual Imaging
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>Creative Direction, Visual Design</p>
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
