import styled from 'styled-components';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  padding: 0 10px;
  margin-top: 20px;
  ${breakpoints.md`
		padding: 0 15px;
	`}
  ${breakpoints.lg`
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
	`}
`;

Wrapper.displayName = 'Body';
export default { Wrapper };
