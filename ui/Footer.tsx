import styled from 'styled-components';

type StyledFooterProps = {
  theme: FooterProps['theme'];
};

const StyledFooter = styled.footer<StyledFooterProps>`
  height: 225px;
  padding-top: 56px;
  background-color: ${(props) => (props.theme === 'DARK' ? '#000' : '#fff')};
  color: ${(props) => props.theme === 'DARK' && '#fff'};

  span {
    margin-right: 35px;
  }

  a {
    color: ${(props) => props.theme === 'DARK' ? '#B0B0B0' : '#0037c6'};
  }
`;

const FooterLinksWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export type FooterProps = {
  theme: 'LIGHT' | 'DARK';
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <StyledFooter theme={props.theme}>
      <div className="container">
        <span>Find me on</span>
        <FooterLinksWrapper>
          <a href="mailto: pearlseajain@gmail.com" target="_blank" rel="noreferrer">
            E-mail
          </a>
          <a
            href="https://github.com/pearlsea020"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pearlsea-jain/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </FooterLinksWrapper>
      </div>
    </StyledFooter>
  );
};

export default Footer;
