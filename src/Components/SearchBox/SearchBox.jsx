import styled from "styled-components";
import {PiMagnifyingGlass} from 'react-icons/pi'

const SearchBox = () => {
    return (
        <Container>
            <input type='text' placeholder='Search' />
            <a href="#"><i><PiMagnifyingGlass fontSize="24px"/></i> </a>
        </Container>
    )
}

export default SearchBox

const Container = styled.div`
width: 240px;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
input{
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 50px;
    border: 0.8px solid gray;
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
a{
    margin-left: -40px;
    align-items: center;
}

`;