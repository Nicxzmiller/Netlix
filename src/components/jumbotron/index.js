import React from "react";
import { Container, Inner,Item, Image, Pane, SubTitle, Title } from './styles/jumbotron'

export default function Jumbotron({children, direction = 'row', ...restProps}){
    return(
        <Item direction={direction}>
            <Inner>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container>
        {children}
    </Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane>
        {children}
    </Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title>
        {children}
    </Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle>
        {children}
    </SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps}){
    return <Image { ...restProps} />
}