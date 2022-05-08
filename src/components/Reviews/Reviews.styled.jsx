import styled from '@emotion/styled';

export const ReviewsListWrapp = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: solid 2px #3f51b5;
  padding: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;
export const ReviewsList = styled.ul`
  list-style: none;
`;
export const ReviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const ReviewsTitle = styled.h2`
  color: #3f51b5;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const ReviewsText = styled.p`
  font-size: 24px;
  margin-left: 10px;
`;

export const ReviewsNoText = styled.p`
  color: #3f51b5;
  font-size: 24px;
  font-weight: 700;
  margin: 20px;
  text-align: center;
`;
