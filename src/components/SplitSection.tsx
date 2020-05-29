import styled from 'styled-components';

const SplitSection = styled.div`
  --gap: 15px;

  display: flex;
  flex-direction: row;

  & > * {
    width: calc(50% - (var(--gap) / 2));
  }

  & > :first-child {
    margin-right: var(--gap);
  }
`;

export default SplitSection;
