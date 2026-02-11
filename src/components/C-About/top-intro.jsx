import React, { useEffect } from 'react';
import JumboSectionHeader from 'components/common/JumboSectionHeader';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { connect } from 'react-redux';
import { getAboutText, getAboutHeader } from 'selectors/pageContent.selector';
import { P } from '../common/typography';

const Wrapper = styled.div`
  padding: 10px 0px;
  margin: 0px auto;
  width: 100%;
`;

const Card = styled.div`
  background: #fff;
  width: 100%;
`;

const TopIntro = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper id='about' ref={ref}>
      <Card data-aos='fade-right'>
        <JumboSectionHeader>{props.header}</JumboSectionHeader>
        <div style={{ margin: '10px', fontSize: '16px', lineHeight: '22px' }}>
          {props.about}
        </div>
      </Card>
    </Wrapper>
  );
});

const mapStateToProps = (state) => {
  return {
    header: getAboutHeader(state),
    about: getAboutText(state),
  };
};
export default connect(mapStateToProps, null, null, { forwardRef: true })(
  TopIntro
);
