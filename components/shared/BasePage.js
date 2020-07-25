import {Container} from 'reactstrap';

const BasePage = (props) => {
  return(
    <div className={`base-page ${className}`} >
      <Container >
        {props.children}
      </Container>
    </div>
  )
}

BasePage.defaultProps={
  className : ''
}
export default BasePage;
