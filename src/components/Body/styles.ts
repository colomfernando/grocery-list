import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  padding: 0 5px;
`;

Wrapper.displayName = 'Body';
export default { Wrapper };
