import React from 'react';
import socialm from '../img/socialm.png'
import { Content, SocialImg, Text, Title, Wrappe } from './MainBanner.style';

export function MainBanner() {
    return (
        <Content>
            <Wrappe>
                <Title>Welcome to your dashboard</Title>
                <Text>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Text>
            </Wrappe>
            <SocialImg alt='Social Media' src={socialm} />
        </Content>
    );
};