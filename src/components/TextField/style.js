import styled, {
  css
} from 'styled-components';

const Input = styled.input `
width:100%;
${(props) => props.value === 'Disabled Input' && css
  `width:100%;
   `
};
${(props) => props.value === 'Accessible' && css
  `width:100%`
};
${(props) => props.value === '101' && css
  `width:100%;
  border-color:red;`
};`

const Div = styled.div `
  border: 1px solid grey;
  padding-left: 6px;
  padding-right: 10px;
  padding-bottom: 6px;`

const P = styled.p `
font-weight: bold;`

const Err = styled.p `
color:red;
`

export default Input;
export {
  Div,
  P,
  Err
};
