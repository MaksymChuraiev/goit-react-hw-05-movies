import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmItems = styled.li`
  margin-left: 20px;
  margin-top: 20px;
  flex-basis: calc(33% - 20px);
  overflow: hidden;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  padding-bottom: 10px;
`;
export const FilmImage = styled.img`
  width: 400px;
`;
export const FilmTitle = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin-top: 5px;
  color: #3f51b5;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
`;
