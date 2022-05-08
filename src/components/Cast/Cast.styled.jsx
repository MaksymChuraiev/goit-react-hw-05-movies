import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: -10px;
  margin-left: -10px;
  padding: 20px;
`;
export const CastItem = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  flex-basis: calc(20% - 10px);

  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  padding-bottom: 10px;
`;
export const CastImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

export const CastNameTitle = styled.p`
  color: #3f51b5;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

export const CastCharacterTitle = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const CastNoImage = styled.img`
  width: 100%;
`;
