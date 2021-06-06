import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  padding: 0 5px;
`;

Wrapper.displayName = 'Body';
export default { Wrapper };
