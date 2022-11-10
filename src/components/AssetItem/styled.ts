import styled from 'styled-components';

export const AssetItemWrapper = styled.div`
  border-radius: 6px;

  & img, .image {
    border-radius: 6px;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
  }

  & .item-title {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
    margin-top: 12px;
  }

  & .item-desc {
    color: #959595;
    font-size: 14px;
    font-weight: 400;
    min-height: 42px;
    width: 100%;
    margin-top: 8px;
  }
`;
