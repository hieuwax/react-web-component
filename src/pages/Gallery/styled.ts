import { Row } from 'antd';
import styled from 'styled-components';
import { ScreenSizes } from '../../styles/StyleConstants';

export const GalleryWrapper = styled(Row)`
  & .left-menu {
    padding: 32px;
    border-right: 1px solid #2c2c2c;
    padding-top: 60px;
  }

  & .header {
    padding: 60px 24px;
    border-bottom: 1px solid #2c2c2c;

    @media (max-width: ${ScreenSizes.medium}) {
      padding: 30px 24px;
    }
  }
`;
