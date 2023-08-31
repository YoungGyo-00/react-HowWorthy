import palette from 'src/utils/palette';
import { styled } from 'styled-components';

const Title = styled.div`
  margin: 0;
  color: ${palette.black[0]};
  width: fit-content;
  margin-bottom: 5px;
  margin-left: 1vh;
`;

const Input = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  width: 95%;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledInput = ({
  title,
  name,
  placeholder,
}: {
  title: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Input name={name} placeholder={placeholder} />
    </>
  );
};

export default StyledInput;
