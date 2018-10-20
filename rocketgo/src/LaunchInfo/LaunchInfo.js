import React, {Component} from 'react';
import {Card, Image, Tab} from "semantic-ui-react";
import RocketImage from '../image/Rocket.png';
import Dc from '../image/DC.jpg';

const LaunchDetail = [
    {menuItem: 'Rocket type', render: () => <Tab.Pane attached={false}>The great general Kim Jong-un</Tab.Pane>},
    {menuItem: 'Launch Location', render: () => <Tab.Pane attached={false}>
            Washington DC
            <Image src={Dc}/>
        </Tab.Pane>},
    {menuItem: 'Schedule', render: () => <Tab.Pane attached={false}>
            <ul>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
                <li>abcd fe as das csaz ev asdasd</li>
            </ul>
        </Tab.Pane>},
    {
        menuItem: 'Nuclear warhead equivalent', render: () => <Tab.Pane attached={false}>
            The Soviet RDS-220 hydrogen bomb (code name Ivan[3] or Vanya), known by Western nations as Tsar Bomba
            (Russian: Царь-бо́мба, tr. Tsar'-bómba, IPA: [t͡sarʲ ˈbombə], lit. Tsar bomb/King of Bombs), was the most
            powerful nuclear weapon ever created. Tested on 30 October 1961, it also remains the most powerful explosive
            ever detonated. It was also referred to as Kuzma's mother (Russian: Ку́зькина ма́ть, tr. Kúz'kina mát', IPA:
            [ˈkusʲkʲɪnə ˈmatʲ]),[4] possibly referring to First secretary Nikita Khrushchev's promise to "show the
            United States a Kuzma's mother" (an idiom roughly translating to "We'll show you") at a 1960 session of
            United Nations General Assembly.[5][6] The bomb had a yield of 50 megatons of TNT (210 PJ). In theory, it
            would have had a maximum yield of 100 megatons of TNT if it had included a uranium-238 tamper, but because
            only one bomb was built, this was never demonstrated. The single bomb was detonated at the Sukhoy Nos cape
            of Severny Island, part of Novaya Zemlya.[7][8][9] The remaining bomb casings are located at the Russian
            Atomic Weapon Museum in Sarov and the Museum of Nuclear Weapons, All-Russian Research Institute of Technical
            Physics, at Snezhinsk.
        </Tab.Pane>
    },
];

class LaunchInfo extends Component {
    state = {};

    render() {
        return (
            <Card centered fluid color='yellow'>
                <Card.Content>
                    <Image src={RocketImage} floated='right' size='mini'/>
                    <Card.Header>
                        First Rocket from Monkey Kingdom
                    </Card.Header>
                    <Card.Meta>Orangutans and donkeys come to the rocket launch site</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Tab menu={{secondary: true, pointing: true}} panes={LaunchDetail} style={{minHeight: '500px'}}/>
                </Card.Content>
            </Card>
        )
    }
}

export default LaunchInfo